import { ImageResponse } from "next/og";

export const alt = "Néa Digital, consultante marketing digital freelance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1C1A1A",
          color: "#F5F1EB",
          padding: "70px 80px"
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: 6, color: "#B08D57" }}>NÉA DIGITAL</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.08, fontWeight: 700 }}>Site web, SEO et contenu</div>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.08, fontWeight: 700 }}>pour entreprises et indépendants.</div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#B8B1A6" }}>Consultante marketing digital freelance · neadigital.fr</div>
      </div>
    ),
    size
  );
}
