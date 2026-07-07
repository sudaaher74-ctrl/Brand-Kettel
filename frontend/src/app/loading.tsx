export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        {/* Simple elegant spinner using the accent color */}
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-r-2 border-accent border-solid" />
        <p className="font-sans text-sm font-light tracking-[0.2em] text-ink-muted uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
