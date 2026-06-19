import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="grid min-h-svh place-items-center bg-surface px-5">
      <div className="text-center">
        <p className="font-display text-7xl font-semibold text-accent">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Page not found</h1>
        <p className="mt-2 text-sm text-ink-muted">
          The page you are looking for has moved or no longer exists.
        </p>
        <Link href="/" className="btn-primary mt-6">
          Back to home
        </Link>
      </div>
    </section>
  );
}
