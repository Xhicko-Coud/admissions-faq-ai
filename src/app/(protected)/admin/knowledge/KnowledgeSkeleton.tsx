import { Skeleton } from "@/components/ui/skeleton";

export function KnowledgeSkeleton() {
  return (
    <div className="grid gap-4">
      <section className="overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm">
        <div className="bg-primary px-6 py-8">
          <Skeleton className="h-4 w-36 bg-white/20" />
          <Skeleton className="mt-3 h-8 w-56 max-w-full bg-white/20" />
          <Skeleton className="mt-3 h-4 w-[32rem] max-w-full bg-white/20" />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <article
            className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm"
            key={index}
          >
            <div className="flex items-center justify-between gap-3">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="size-9 rounded-lg" />
            </div>
            <Skeleton className="mt-3 h-8 w-16" />
            <Skeleton className="mt-2 h-4 w-40" />
          </article>
        ))}
      </section>

      <section className="overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm">
        <div className="border-b border-primary/10 px-4 py-4 sm:px-6">
          <Skeleton className="h-6 w-44" />
          <Skeleton className="mt-2 h-4 w-80 max-w-full" />
        </div>

        <div className="grid gap-3 p-4 sm:p-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton className="h-16 w-full" key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
