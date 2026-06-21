import { Button } from "~/components/ui";

type TodayCardsGroup = {
  count: number;
  title: string;
};

type TodayCardsSummaryProps = {
  groups: TodayCardsGroup[];
  repeatedCount: number;
  totalCount: number;
};

export function TodayCardsSummary({
  groups,
  repeatedCount,
  totalCount,
}: TodayCardsSummaryProps) {
  const progressPercent =
    totalCount > 0 ? Math.round((repeatedCount / totalCount) * 100) : 0;

  return (
    <section className="grid gap-8 rounded-3xl bg-sky-100 px-6 py-5 shadow-md shadow-sky-950/10 md:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold leading-tight text-stone-800">
          Карточки на сегодня: {totalCount}
        </h1>

        <Button
          className="w-full bg-orange-300 shadow-md shadow-sky-950/15 hover:bg-orange-400 !text-base !font-bold md:w-56"
          variant="unstyled"
        >
          Начать повторение
        </Button>
      </div>

      <p className="text-xl italic leading-tight text-stone-800">
        {groups.map((group) => `${group.title}: ${group.count}`).join(" | ")}
      </p>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-white">
          <div
            className="h-full rounded-full bg-sky-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <span className="text-sm font-bold text-stone-900 md:w-36">
          {repeatedCount} / {totalCount} повторено
        </span>
      </div>
    </section>
  );
}
