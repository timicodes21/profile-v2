import Link from "next/link";

const NotFound = () => (
  <main id="main" className="container-x flex min-h-[80svh] flex-col justify-center pt-[var(--nav-h)]">
    <p className="text-meta text-accent">404</p>
    <h1 className="text-section mt-6">
      Nothing here.
      <br />
      <span className="text-mute">Even geologists can&apos;t find it.</span>
    </h1>
    <Link href="/" className="text-meta link-u mt-10 self-start text-paper">
      ← Back home
    </Link>
  </main>
);

export default NotFound;
