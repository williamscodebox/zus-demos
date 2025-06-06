import { type ReactNode } from "react";

function CardTitle({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
    </div>
  );
}

export default CardTitle;
