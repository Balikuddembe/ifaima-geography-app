/* Copyright 2022 Esri – Redesigned for Global IFAIMA, Amman */

export const Loader = ({ className, style, title }) => {
  className =
    (className || "") + " d-flex justify-content-center align-items-center";
  return (
    <div
      id="intro"
      className={className}
      style={{
        ...style,
        background:
          "linear-gradient(135deg, var(--ifaima-bg) 0%, rgba(13,61,71,0.06) 100%)",
      }}
    >
      <div
        id="inner"
        className="d-flex flex-column align-items-center position-relative overflow-hidden p-5 rounded-3 shadow"
        style={{
          backgroundColor: "var(--ifaima-card)",
          border: "1px solid var(--ifaima-border)",
        }}
      >
        <p
          className="text-uppercase small fw-semibold mb-2"
          style={{ color: "var(--ifaima-accent)", letterSpacing: "0.12em" }}
        >
          Global AIM · Search
        </p>
        <h1
          className="h4 fw-bold mb-3"
          style={{ color: "var(--ifaima-primary)" }}
        >
          {title}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="280"
          height="90"
          viewBox="0 0 960 560"
          className="mb-2"
        >
          <polyline
            className="zigzag"
            fill="none"
            stroke="var(--ifaima-primary)"
            strokeWidth="14"
            strokeMiterlimit="10"
            points="902 245.5 762.5 141.5 623.01 245.5 483.51 141.5 344.01 245.5 204.5 141.5 65 245.5 "
          />
        </svg>
        <p className="small mb-0" style={{ color: "var(--ifaima-text-muted)" }}>
          Loading your ice breaker…
        </p>
      </div>
    </div>
  );
};
