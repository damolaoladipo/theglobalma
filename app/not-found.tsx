import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-100 dark:bg-neutral-900 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl">
          404
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Oops — the page you were looking for doesn’t exist.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90"
          >
            Go back home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-transparent bg-muted px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/90"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
