/* Copyright 2022 Esri – Redesigned for Global IFAIMA, Amman */

export const Instructions = ({ onDismiss: dismiss }) => {
  return (
    <div
      className="position-fixed w-100 h-100 d-flex flex-column justify-content-center align-items-center p-3"
      style={{ zIndex: 2000, backgroundColor: "rgba(13, 61, 71, 0.5)" }}
    >
      <div
        className="rounded-3 shadow overflow-hidden align-self-center"
        style={{
          width: "90%",
          maxWidth: "500px",
          backgroundColor: "var(--ifaima-card)",
          border: "1px solid var(--ifaima-border)",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center px-3 py-2"
          style={{ backgroundColor: "var(--ifaima-primary)", color: "#fff" }}
        >
          <span className="fw-semibold">How to play</span>
          <button
            type="button"
            className="btn btn-sm btn-light rounded-circle p-1"
            aria-label="Close"
            onClick={() => dismiss()}
            style={{ opacity: 0.9 }}
          >
            ×
          </button>
        </div>
        <div className="card-body p-3">
          <ul
            className="list-unstyled mb-0"
            style={{ color: "var(--ifaima-text)" }}
          >
            <li className="mb-2">
              Use the map’s pan and zoom to place your guess inside the
              viewfinder circle.
            </li>
            <li className="d-flex flex-column my-3">
              <img
                className="align-self-center rounded"
                alt="Viewfinder"
                src="./viewfinder.png"
                style={{ maxWidth: "120px" }}
              />
            </li>
            <li className="mb-2">
              The circle changes color:{" "}
              <strong style={{ color: "var(--ifaima-primary)" }}>warmer</strong>{" "}
              when you’re close,{" "}
              <strong style={{ color: "var(--ifaima-accent)" }}>colder</strong>{" "}
              when you’re far.
            </li>
            <li className="mb-2">You can ask for a hint anytime—no penalty.</li>
            <li className="mb-0">
              “Reveal the answer” skips the question but counts against your
              score.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
