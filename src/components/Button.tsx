import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: string;
  size: string;
}

export default function Button({ children, type, size }: Props) {
  return <button className={`${type} ${size}`}>{children}</button>;
}
