import { ImageResponse } from "next/og";
import { company } from "@/lib/content";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0f4338 0%, #17493d 55%, #0b1525 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 9999,
              background: "#5fcf4b",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
            {company.shortName}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Energy as an asset.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Energy engineering for Commercial &amp; Industrial and
            Utility-Scale projects globally.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
