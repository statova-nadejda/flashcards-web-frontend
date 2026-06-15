import { routePaths } from "~/utils/routePaths";

import { Link } from "react-router";

type CardSetGroupCardProps = {
  author: string;
  cardsCount: number;
  title: string;
};

export function CardSetGroupCard({
  author,
  cardsCount,
  title,
}: CardSetGroupCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-950/10">
      <div className="flex flex-col items-center space-y-1.5 text-center">
        <h2 className="text-xl font-bold text-stone-800">{title}</h2>
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-stone-600">
          <span>Карточек: {cardsCount}</span>
          <span className="text-stone-400">•</span>
          <span>На сегодня: {cardsCount}</span>
        </div>
        <p className="text-sm text-stone-500">Автор: {author}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <Link
          className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-orange-300 px-5 py-2 text-sm font-medium text-stone-800 transition-colors outline-none hover:bg-orange-400 focus-visible:ring-2 focus-visible:ring-sky-300"
          to={routePaths.StudyCardSet}
        >
          Учить
        </Link>
        <Link
          className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-orange-300 px-5 py-2 text-sm font-medium text-stone-800 transition-colors outline-none hover:bg-orange-400 focus-visible:ring-2 focus-visible:ring-sky-300"
          to={routePaths.CreateUpdateCardSet}
        >
          Редактировать
        </Link>
      </div>
    </article>
  );
}
