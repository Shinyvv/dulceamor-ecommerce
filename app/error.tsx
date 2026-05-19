"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-4 py-20 text-center sm:px-6">
      <h2 className="font-heading text-3xl font-semibold text-primary">Ups, algo salió mal</h2>
      <p className="text-sm text-foreground/80 sm:text-base">Intenta nuevamente en unos segundos.</p>
      <Button onClick={reset}>Reintentar</Button>
    </section>
  );
}

