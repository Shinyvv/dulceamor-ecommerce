"use client";

import { toast as sonnerToast, type ExternalToast } from "sonner";

type ToastVariant = "default" | "success" | "error";

type ToastOptions = ExternalToast & {
  variant?: ToastVariant;
};

export function toast(title: string, options?: ToastOptions): void {
  const variant = options?.variant ?? "default";

  if (variant === "success") {
    sonnerToast.success(title, options);
    return;
  }

  if (variant === "error") {
    sonnerToast.error(title, options);
    return;
  }

  sonnerToast(title, options);
}

export function useToast() {
  return { toast };
}

