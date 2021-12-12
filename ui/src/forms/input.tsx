import React, { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement>((_props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" />
      <style></style>
    </div>
  );
});
