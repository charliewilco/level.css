import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" />
      <style></style>
    </div>
  );
});
