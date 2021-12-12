import * as React from "react";

interface IAutoGrid {
  columns: number;
  smColumns?: number;
  mdColumns?: number;
  lgColumns?: number;
}

export const AutoGrid: React.FC<IAutoGrid> = ({
  columns,
  children,
  smColumns,
  mdColumns,
  lgColumns
}) => {
  return (
    <div className="grid">
      {children}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(${columns}, minmax(0, 1fr));
          gap: var(--gap);
        }

        @media (min-width: 640px) {
          .grid {
            grid-template-columns: repeat(
              ${smColumns ?? columns},
              minmax(0, 1fr)
            );
          }
        }

        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(
              ${mdColumns ?? smColumns ?? columns},
              minmax(0, 1fr)
            );
          }
        }

        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(
              ${lgColumns ?? mdColumns ?? smColumns ?? columns},
              minmax(0, 1fr)
            );
          }
        }
      `}</style>
    </div>
  );
};
