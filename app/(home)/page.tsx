import Feed from "@/components/feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Share Notes
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Notes</span>
      </h1>
      <p className="desc text-center">
        Next.js Creates Share Notes. Create and share useful notes.
      </p>

      <Feed />
    </section>
  );
}
