import { ChangeEvent, RefObject } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type SupportedEdgeUnit = "px" | "vw" | "vh" | "%";
type EdgeUnit = `${number}${SupportedEdgeUnit}`;
type NamedEdges = "start" | "end" | "center";
type EdgeString = NamedEdges | EdgeUnit | `${number}`;
type Edge = EdgeString | number;
type ProgressIntersection = [number, number];
type Intersection = `${Edge} ${Edge}`;
export type ScrollOffset = Array<Edge | Intersection | ProgressIntersection>;

export interface InputProps {
  type?: "text" | "email" | "password" | "file" | "number";
  label?: string;
  placeholder?: string;
  className?: string;
  error?: FieldError | { message: string | undefined } | undefined | "";
  register?: UseFormRegisterReturn;
  icon?: React.ReactNode;
  onChange?: (
    event:
      | ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  autoComplete?: string;
  disabled?: boolean;
  value?: string;
  rows?: number;
  ref?: RefObject<HTMLInputElement>;
  onClick?: () => void;
}
