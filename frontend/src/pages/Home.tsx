import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#fdfaf6] text-neutral-900 px-6 py-16 font-sans">
      {/* Hero */}
      <section className="max-w-xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Predict. Compete. Win with{" "}
          <span className="text-pink-500">Sailfish</span>
        </h1>
        <p className="text-lg text-neutral-600">
          Lock your picks. Challenge friends. Dominate the leaderboard.
        </p>
        <button
          onClick={() => navigate("/auth")}
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all"
        >
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="mt-24 grid gap-8 max-w-4xl mx-auto sm:grid-cols-2">
        {[
          {
            title: "Smart Predictions",
            desc: "Predict entire rounds up front. Think ahead, not just match by match.",
          },
          {
            title: "Friend Integration",
            desc: "Compare picks with friends. Talk trash. Win big.",
          },
          {
            title: "Leaderboard Glory",
            desc: "Every point matters. Compete week-to-week with real-time results.",
          },
          {
            title: "Mobile-First",
            desc: "Designed to look stunning and run smooth on any device.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition border border-neutral-200"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} Sailfish — built for bold predictors.
      </footer>
    </main>
  );
}
