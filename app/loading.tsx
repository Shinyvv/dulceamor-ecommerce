import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
        <div className="grid gap-3">
          <Skeleton className="h-7 w-28 rounded-full" />
          <Skeleton className="h-11 w-3/4" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-11 w-full" />
        </div>
      </div>
    </section>
  );
}

