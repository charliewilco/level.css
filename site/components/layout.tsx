const Mark: React.VFC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={53}
    height={16}
    viewBox="0 0 53 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={4} height={16} rx={2} fill="currentColor" />
    <path
      d="M40.586 5.414a2 2 0 112.828-2.828L51.9 11.07A2 2 0 0149.07 13.9l-8.485-8.486z"
      fill="currentColor"
    />
    <rect x={10} y={6} width={24} height={4} rx={2} fill="currentColor" />
  </svg>
);

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header>
        <Mark />
      </header>
      <div>
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  );
};
