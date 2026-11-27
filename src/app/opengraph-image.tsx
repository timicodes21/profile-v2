import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const alt = `${site.name}: Engineering products. Leading teams. Building systems that scale.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OpengraphImage = () =>
  new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background:
          "radial-gradient(900px 500px at 90% 0%, rgba(255,107,53,0.22), transparent 60%), #0a0a0a",
        color: "#f5f5f0",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          fontSize: 22,
          color: "#a1a1a1",
          letterSpacing: 3,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            background: "#ff6b35",
          }}
        />
        SOFTWARE ENGINEER · TEAM LEAD · LAGOS, NIGERIA
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: -5,
            lineHeight: 0.92,
          }}
        >
          Timileyin
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: -5,
            lineHeight: 0.92,
          }}
        >
          Babalola<span style={{ color: "#ff6b35" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 40,
            fontSize: 44,
            fontWeight: 600,
            letterSpacing: -1,
            lineHeight: 1.15,
          }}
        >
          <span>Engineering products. Leading teams.</span>
          <span style={{ color: "#a1a1a1" }}>Building systems that scale.</span>
        </div>
      </div>
    </div>,
    size,
  );

export default OpengraphImage;
