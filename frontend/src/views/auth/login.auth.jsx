export default function Login() {
  return (
    <main className="w-full flex items-center justify-center p-50">
      <section className="grid grid-cols-2">
        <section className="flex flex-col bg-linear-to-tr from-secondary-900/20 to-secondary-700/20 p-10">
          <h1>Join the Elite.</h1>
          <p>
            Experience a premium, technically robust environment designed for
            professional precision. Obsidian indigo offers the tools you need to
            excel
          </p>
        </section>
        <section className="flex flex-col bg-neutral-900/20 p-10">
          <h1>Register</h1>
          <p>Start your journey with us today.</p>
        </section>
      </section>
    </main>
  );
}
