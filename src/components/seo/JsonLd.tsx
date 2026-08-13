export function JsonLd({ data }: { data: object | null }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output — not user-controlled HTML, safe to inject here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
