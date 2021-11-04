import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useRef,
} from "react";
import { isFunction } from "./utils/assertions";

console.log(React);

interface IDisclosureContext {
  disclosureId: string;
  onSelect(): void;
  open: boolean;
  panelId: string;
}

export const DisclosureContext = createContext<IDisclosureContext>({
  disclosureId: "..",
  open: false,
  panelId: "..",
  onSelect() {},
});

type DisclosureAction = (prev: boolean) => boolean | boolean;

const disclosureReducer: React.Reducer<boolean, DisclosureAction> = (
  state: boolean,
  action?: DisclosureAction
) => {
  return isFunction(action) ? action(state) : action ?? state;
};

export const Root = forwardRef(({ children }) => {
  const [isOpen, dispatch] = useReducer(disclosureReducer, false);

  const handleSelect = useCallback(() => {
    dispatch((prev) => !prev);
  }, [dispatch]);

  const context = useMemo<IDisclosureContext>(() => {
    return {
      disclosureId: "!",
      open: isOpen,
      onSelect: handleSelect,
      panelId: "!",
    };
  }, []);

  return (
    <DisclosureContext.Provider value={context}>
      {children}
    </DisclosureContext.Provider>
  );
});

export const Panel = forwardRef(({ children }) => {
  const { panelId, open } = useContext(DisclosureContext);
  return (
    <div hidden={!open} id={panelId}>
      {children}
    </div>
  );
});

export const Button = forwardRef<HTMLButtonElement>(
  ({ children, ...props }, ref) => {
    const { onSelect, open, panelId } = useContext(DisclosureContext);
    const ownRef = useRef<HTMLElement | null>(null);

    function handleClick(event: React.MouseEvent) {
      event.preventDefault();
      // ownRef.current && ownRef.current.focus();
      onSelect();
    }

    return (
      <button
        aria-controls={panelId}
        aria-expanded={open}
        ref={ref}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
);
