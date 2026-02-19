/* Copyright 2022 Esri – Redesigned for Global IFAIMA, Amman */

import "bootstrap-icons/font/bootstrap-icons.css";

export const CongratsScreen = ({
  className,
  style,
  title,
  score,
  records,
  onDismiss: dismiss,
}) => {
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const tweetText = encodeURI(
    "I scored " +
      score +
      "% on the Global IFAIMA Amman ice breaker: " +
      title +
      ". Try it!",
  );

  className =
    (className || "") + " d-flex justify-content-center align-items-center";

  return (
    <div id="congrats" className={className} style={style}>
      <div
        id="inner"
        className="d-flex flex-column ms-2 me-2 p-0 rounded-3 shadow overflow-hidden"
        style={{
          width: "95%",
          maxWidth: "560px",
          maxHeight: "95%",
          backgroundColor: "var(--ifaima-card)",
          border: "1px solid var(--ifaima-border)",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center px-3 py-2"
          style={{ backgroundColor: "var(--ifaima-primary)", color: "#fff" }}
        >
          <span
            className="small fw-semibold"
            style={{ letterSpacing: "0.06em" }}
          >
            Global AIM Search
          </span>
          <button
            type="button"
            className="btn btn-sm btn-light rounded-circle p-1"
            aria-label="Close"
            onClick={() => dismiss()}
          >
            ×
          </button>
        </div>

        <div className="flex-grow-1 d-flex flex-column overflow-hidden p-3">
          <h1
            className="h4 fw-bold text-center mb-1"
            style={{ color: "var(--ifaima-primary)" }}
          >
            Well done!
          </h1>
          <p
            className="text-center small mb-2"
            style={{ color: "var(--ifaima-text-muted)" }}
          >
            You completed{" "}
            <strong style={{ color: "var(--ifaima-text)" }}>{title}</strong>
          </p>
          <p
            className="text-center display-4 fw-bold mb-3"
            style={{ color: "var(--ifaima-accent)" }}
          >
            {score}%
          </p>

          <ul
            className="list-group list-group-flush overflow-auto rounded mb-3"
            style={{ border: "1px solid var(--ifaima-border)" }}
          >
            {records.map((record) => (
              <li
                key={record.objectid}
                className="list-group-item d-flex align-items-center py-2"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "var(--ifaima-border)",
                }}
              >
                <span
                  className="flex-grow-1"
                  style={{ color: "var(--ifaima-text)" }}
                >
                  {record.location_name}
                </span>
                <i
                  className={
                    record.solved && !record.skipped
                      ? "bi-check-circle-fill text-success"
                      : "bi-x-circle-fill text-danger"
                  }
                  style={{ fontSize: "1.25rem" }}
                />
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <a
              title="Share on Twitter"
              className="btn btn-sm rounded-pill px-3"
              style={{
                backgroundColor: "var(--ifaima-primary)",
                color: "#fff",
              }}
              target="_blank"
              rel="noreferrer"
              href={
                "https://twitter.com/intent/tweet?text=" +
                tweetText +
                "&url=" +
                window.location.href
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>{" "}
              Share
            </a>
            <a
              title="Share on Facebook"
              className="btn btn-sm btn-outline-secondary rounded-pill px-3"
              target="_blank"
              rel="noreferrer"
              href={
                "https://www.facebook.com/sharer/sharer.php?u=" +
                window.location.href
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>{" "}
              Share
            </a>
            <button
              title="Copy link"
              className="btn btn-sm btn-outline-secondary rounded-pill px-3"
              onClick={() => {
                copyToClipBoard();
                alert("Link copied!");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>{" "}
              Copy link
            </button>
          </div>

          <p
            className="small text-center mt-3 mb-0"
            style={{ color: "var(--ifaima-text-muted)" }}
          >
            Thanks for playing. Enjoy the rest of Global IFAIMA in Amman!
          </p>
        </div>
      </div>
    </div>
  );
};
