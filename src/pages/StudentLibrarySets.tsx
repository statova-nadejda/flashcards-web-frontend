import { FlashcardSetCard } from "~/components/FlashcardSetCard";
import { Button } from "~/components/ui";
import { routePaths } from "~/utils/routePaths";

import { recommendedSets } from "./MainPage.constants";

export function StudentLibrarySets() {
  return (
    <div className="flex flex-wrap gap-10">
      <section className="grid h-56 w-full grid-rows-[auto_1fr] gap-2 overflow-hidden rounded-3xl bg-sky-100 p-6 shadow-md shadow-sky-950/10">
        <h1 className="px-3 py-1 text-xl font-bold">Мои наборы</h1>

        <div className="min-h-0 overflow-y-auto pr-2">
          <div className="grid grid-cols-[repeat(3,280px)] gap-8">
            {recommendedSets.map((set) => (
              <FlashcardSetCard
                author={set.author}
                cardsCount={set.cardsCount}
                className="h-28"
                key={set.id}
                title={set.title}
                to={routePaths.getCardSetGroup(set.tag)}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="flex w-full justify-start">
        <Button
          className="w-56 justify-center bg-orange-300 shadow-sm hover:bg-orange-400 !text-base !font-bold"
          isSubmit
          variant="unstyled"
        >
          + Добавить набор
        </Button>
      </div>

      <section className="grid h-56 w-full grid-rows-[auto_1fr] gap-2 overflow-hidden rounded-3xl bg-sky-100 p-6 shadow-md shadow-sky-950/10">
        <h1 className="px-3 py-1 text-xl font-bold">Сохраненные наборы</h1>

        <div className="min-h-0 overflow-y-auto pr-2">
          <div className="grid grid-cols-[repeat(3,280px)] gap-8">
            {recommendedSets.map((set) => (
              <FlashcardSetCard
                author={set.author}
                cardsCount={set.cardsCount}
                className="h-28"
                key={`saved-${set.id}`}
                title={set.title}
                to={routePaths.getCardSetGroup(set.tag)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
