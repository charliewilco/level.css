import * as React from "react";

const ID = "skip-nav";

export const SkipNav: React.VFC = () => {
  return (
    <a href={`#${ID}`} data-skip-link data-skip-nav-link>
      Skip to content
      <style jsx>{`
        :global([data-skip-nav-link]) {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          position: absolute;
        }

        :global([data-skip-link]:focus) {
          font-weight: 700;
          background: var(--bg);
          padding: 1rem;
          position: fixed;
          top: 10px;
          left: 10px;
          z-index: 1;
          width: auto;
          height: auto;
          clip: auto;
        }
      `}</style>
    </a>
  );
};

export const SkipNavContent: React.FC = ({ children }) => {
  return (
    <main className="Wrapper" role="main" id={ID} data-skip-nav-content>
      {children}
    </main>
  );
};
