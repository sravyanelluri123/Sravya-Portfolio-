export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="bg-gradient-to-r from-brand to-brand-alt bg-clip-text text-7xl font-extrabold text-transparent">404</p>
      <h1 className="text-2xl font-bold">This page doesn't exist</h1>
      <p className="text-muted">The link may be broken or the page may have moved.</p>
      <a href="/" className="btn-primary">Back to portfolio</a>
    </main>
  );
}
