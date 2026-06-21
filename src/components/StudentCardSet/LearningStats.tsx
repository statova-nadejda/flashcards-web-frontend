type LearningStat = {
  label: string;
  value: string;
};

type LearningStatsProps = {
  stats: LearningStat[];
};

export function LearningStats({ stats }: LearningStatsProps) {
  return (
    <section className="grid overflow-hidden rounded-2xl bg-orange-300 text-center shadow-sm shadow-sky-950/10 md:auto-cols-fr md:grid-flow-col">
      {stats.map((stat) => (
        <article
          className="grid min-h-16 content-center gap-1 border-b border-stone-700/40 px-5 py-3 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0"
          key={stat.label}
        >
          <h2 className="text-base leading-tight text-stone-900">
            {stat.label}
          </h2>
          <p className="text-base leading-tight text-stone-900">{stat.value}</p>
        </article>
      ))}
    </section>
  );
}
