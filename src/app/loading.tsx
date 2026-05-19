import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-16">
      <div className="w-full max-w-xl space-y-4">
        <Skeleton className="mx-auto size-16 rounded-full" />
        <Skeleton className="mx-auto h-7 w-56" />
        <Skeleton className="mx-auto h-4 w-full max-w-md" />
        <Skeleton className="mx-auto h-4 w-72" />
      </div>
    </main>
  );
}
