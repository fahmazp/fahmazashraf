import { Link } from "react-router-dom";

const GitHubChart = () => {
  return (
    <section
      id="github"
      className="mt-16 w-full flex flex-col items-center justify-center px-4 sm:px-6"
    >
      <h2 className="text-3xl font-semibold mb-4 text-center">
        <span className="bg-gradient-to-b from-slate-950 via-violet-800 to-sky-400 dark:from-zinc-200 dark:via-violet-500 dark:to-lime-500 bg-clip-text text-transparent">Code</span> Streaks
      </h2>

      <div className="w-full overflow-x-auto md:overflow-x-hidden">

        <div className="min-w-[700px] flex justify-center">
        <img
          src="https://ghchart.rshah.org/1e1b4b/fahmazp"
          alt="Contribution Chart"
          className="h-auto w-full max-w-5xl object-contain rounded-sm border-2 border-purple-600 dark:border-purple-500 shadow-lg p-2"
        />
      </div>
      </div>

      <Link
        to="https://github.com/fahmazp"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-primary text-white dark:text-gray-950 px-4 py-2 rounded hover:bg-primary/90 transition"
      >
        View My GitHub
      </Link>
    </section>
  );
};

export default GitHubChart;
