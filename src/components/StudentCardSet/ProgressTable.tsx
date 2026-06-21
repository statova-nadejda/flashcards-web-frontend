import { Button } from "~/components/ui";

type ProgressRow = {
  cardsCount: number;
  progressPercent: number;
  title: string;
};

type ProgressTableProps = {
  rows: ProgressRow[];
};

export function ProgressTable({ rows }: ProgressTableProps) {
  return (
    <section className="grid gap-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <h2 className="text-2xl font-bold leading-tight text-stone-800">
          Мой прогресс
        </h2>

        <div className="flex flex-wrap gap-2 md:ml-5">
          <Button
            className="h-5 min-w-[72px] rounded-full bg-sky-500 px-3 py-0 text-xs text-stone-900 hover:bg-sky-600"
            variant="unstyled"
          >
            Фильтр
          </Button>
          <Button
            className="h-5 min-w-24 rounded-full bg-sky-500 px-3 py-0 text-xs text-stone-900 hover:bg-sky-600"
            variant="unstyled"
          >
            Сортировка
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-sky-100 bg-white shadow-sm shadow-sky-950/10">
        <table className="w-full min-w-[620px] border-collapse text-left text-stone-700">
          <thead>
            <tr className="bg-sky-50 text-xs font-bold uppercase text-stone-600">
              <th className="px-5 py-3">Название набора</th>
              <th className="w-36 px-5 py-3 text-center">Кол-во карточек</th>
              <th className="px-5 py-3">Пройдено</th>
              <th className="w-28 px-5 py-3" />
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr
                className="border-t border-sky-100 text-base transition-colors hover:bg-sky-50/60"
                key={row.title}
              >
                <td className="px-5 py-3 font-medium text-stone-800">
                  {row.title}
                </td>
                <td className="px-5 py-3 text-center">{row.cardsCount}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-sky-100">
                      <div
                        className="h-full rounded-full bg-sky-500"
                        style={{ width: `${row.progressPercent}%` }}
                      />
                    </div>
                    <span className="w-10 text-right text-sm font-medium">
                      {row.progressPercent}%
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3 text-center">
                  <Button
                    className="h-auto p-0 text-base font-bold text-orange-500 hover:text-orange-600"
                    variant="unstyled"
                  >
                    Учить
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
