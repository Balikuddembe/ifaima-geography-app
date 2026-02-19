/* Copyright 2022 Esri – Redesigned for Global IFAIMA, Amman */

export const Intro = ({
  className,
  style,
  title,
  description,
  hero,
  onDismiss: dismiss,
}) => {
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
        className="d-flex flex-column-reverse flex-md-row h-100 w-100 justify-content-center align-items-center p-3 p-md-4"
      >
        <div
          className="flex-grow-1 flex-shrink-0 d-flex flex-column overflow-hidden m-2 m-md-3 rounded-3 shadow-sm"
          style={{
            maxWidth: "600px",
            flexBasis: "50%",
            backgroundColor: "var(--ifaima-card)",
            border: "1px solid var(--ifaima-border)",
          }}
        >
          <div className="overflow-auto px-3 pt-3">
            <p
              className="text-uppercase small fw-semibold mb-2"
              style={{ color: "var(--ifaima-accent)", letterSpacing: "0.12em" }}
            >
              Global AIM Search
            </p>
            <h1
              className="display-5 fw-bold mb-3"
              style={{ color: "var(--ifaima-primary)" }}
            >
              {title}
            </h1>
            <p
              className="mb-0"
              style={{
                fontFamily: "Literata",
                fontWeight: 400,
                color: "var(--ifaima-text-muted)",
              }}
            >
              {description}
            </p>
            <p
              className="small mt-2 mb-0"
              style={{ color: "var(--ifaima-text-muted)" }}
            >
              A quick ice breaker to get to know the world—and each other—before
              the sessions begin.
            </p>
          </div>
          <div className="p-3 pt-2">
            <button
              type="button"
              className="btn btn-primary px-4 py-2 fw-semibold rounded-pill"
              onClick={() => dismiss()}
            >
              Start the hunt
            </button>
          </div>
        </div>
        <div
          className="flex-grow-1 h-100 w-100 m-2 m-md-3 rounded-3 overflow-hidden shadow-sm"
          style={{
            flexBasis: "50%",
            maxWidth: "600px",
            backgroundImage: `url(${hero})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            maxHeight: "500px",
            border: "1px solid var(--ifaima-border)",
          }}
        />
      </div>
    </div>
  );
};
