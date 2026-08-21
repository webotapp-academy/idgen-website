const fs = require('fs');
const path = require('path');

const xmlPath = path.join(__dirname, 'extracted_docx', 'word', 'document.xml');
const relsPath = path.join(__dirname, 'extracted_docx', 'word', '_rels', 'document.xml.rels');

const xml = fs.readFileSync(xmlPath, 'utf8');

// Parse document text and tables
// Extract structured content: paragraphs, tables, images
const lines = [];

// Let's inspect images relations
let relsMap = {};
if (fs.existsSync(relsPath)) {
  const relsXml = fs.readFileSync(relsPath, 'utf8');
  const relMatches = [...relsXml.matchAll(/Id="([^"]+)"[^>]*Target="([^"]+)"/g)];
  relMatches.forEach(m => {
    relsMap[m[1]] = m[2];
  });
}

// Find all elements in order (paragraphs and tables)
// Simple regex to extract <w:p>...</w:p> and <w:tbl>...</w:tbl>
const bodyMatch = xml.match(/<w:body>(.*?)<\/w:body>/s);
if (bodyMatch) {
  const body = bodyMatch[1];
  
  // Split or match paragraphs and table rows
  const pRegex = /<w:p(?:\s|>).*?<\/w:p>/gs;
  let match;
  while ((match = pRegex.exec(body)) !== null) {
    const pXml = match[0];
    
    // Check for images
    const imgMatches = [...pXml.matchAll(/r:embed="([^"]+)"/g)];
    const images = imgMatches.map(m => relsMap[m[1]] || m[1]);

    // Check runs
    const runs = [];
    const rRegex = /<w:r(?:\s|>).*?<\/w:r>/gs;
    let rMatch;
    while ((rMatch = rRegex.exec(pXml)) !== null) {
      const rXml = rMatch[0];
      const isBold = /<w:b(?:\s|\/|>)/.test(rXml);
      const isItalic = /<w:i(?:\s|\/|>)/.test(rXml);
      const tMatches = [...rXml.matchAll(/<w:t(?:\s[^>]*)?>([^<]*)<\/w:t>/g)];
      const text = tMatches.map(m => m[1]).join('');
      if (text) {
        runs.push({ text, isBold, isItalic });
      }
    }
    
    const fullText = runs.map(r => r.text).join('').trim();
    if (fullText || images.length > 0) {
      const styleMatch = pXml.match(/<w:pStyle\s+w:val="([^"]+)"/);
      const headingMatch = styleMatch ? styleMatch[1] : '';
      lines.push({
        text: fullText,
        runs,
        images,
        style: headingMatch
      });
    }
  }
}

fs.writeFileSync('extracted_docx/extracted_content.json', JSON.stringify({ relsMap, lines }, null, 2));

console.log('--- EXTRACTED CONTENT SUMMARY ---');
lines.forEach((l, i) => {
  const imgStr = l.images.length ? ` [IMAGES: ${l.images.join(', ')}]` : '';
  const styleStr = l.style ? ` [STYLE: ${l.style}]` : '';
  console.log(`P#${i + 1}${styleStr}${imgStr}: ${l.text}`);
});
