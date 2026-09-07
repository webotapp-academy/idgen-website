import React from "react";

export function renderDualColorHeadline(
  headline?: string,
  cityName?: string
): React.ReactNode {
  if (!headline || !headline.trim()) {
    return (
      <>
        <span>ID Card Printing &amp; </span>
        <span className="gradient-text">Identity Solutions</span>
        {cityName ? <span> in {cityName}</span> : null}
      </>
    );
  }

  const text = headline.trim();

  // 1. Explicit Markdown bold formatting: **highlighted text**
  if (text.includes("**")) {
    const parts = text.split("**");
    return (
      <>
        {parts.map((part, index) =>
          index % 2 === 1 ? (
            <span key={index} className="gradient-text">
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  }

  // 2. Explicit <gradient>text</gradient> formatting
  if (text.includes("<gradient>") && text.includes("</gradient>")) {
    const regex = /<gradient>(.*?)<\/gradient>/g;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let keyIdx = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        elements.push(
          <span key={`txt-${keyIdx++}`}>
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }
      elements.push(
        <span key={`grad-${keyIdx++}`} className="gradient-text">
          {match[1]}
        </span>
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      elements.push(
        <span key={`txt-${keyIdx++}`}>{text.substring(lastIndex)}</span>
      );
    }

    return <>{elements}</>;
  }

  // 3. Known key brand phrases to automatically apply dual-color gradient to
  const highlightPhrases = [
    "Identification Solutions",
    "Identity Solutions",
    "ID Cards & Identification Solutions",
    "ID Card Printing",
  ];

  for (const phrase of highlightPhrases) {
    const regex = new RegExp(`(${phrase})`, "i");
    if (regex.test(text)) {
      const parts = text.split(regex);
      return (
        <>
          {parts.map((part, index) =>
            regex.test(part) ? (
              <span key={index} className="gradient-text">
                {part}
              </span>
            ) : (
              <span key={index}>{part}</span>
            )
          )}
        </>
      );
    }
  }

  // 4. Conjunction pattern: "Prefix & Highlighted [for/in/across Suffix]"
  const ampersandMatch = text.match(
    /^(.*?&\s*)(.*?)((\s+(?:for|in|across)\s+.*)|$)/i
  );
  if (ampersandMatch) {
    const [, before, highlight, after] = ampersandMatch;
    return (
      <>
        <span>{before}</span>
        <span className="gradient-text">{highlight}</span>
        {after && <span>{after}</span>}
      </>
    );
  }

  // 5. General fallback: highlight second half of words
  const words = text.split(" ");
  if (words.length > 3) {
    const mid = Math.floor(words.length / 2);
    return (
      <>
        <span>{words.slice(0, mid).join(" ")} </span>
        <span className="gradient-text">{words.slice(mid).join(" ")}</span>
      </>
    );
  }

  return <span>{text}</span>;
}
