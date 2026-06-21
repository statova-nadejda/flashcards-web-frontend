import { Button } from "~/components/ui";
import { recommendedSets } from "~/pages/MainPage.constants";

import { useParams } from "react-router";

import { CardSetGroupCard } from "./CardSetGroupCard";

export function CardSetGroup() {
  const { tag } = useParams();
  const selectedTag = tag ? decodeURIComponent(tag) : "";
  const cardSets = recommendedSets
    .map((set, index) => ({ ...set, setId: index }))
    .filter((set) => set.tag === selectedTag);

  return (
    <section className="flex h-[calc(100vh-74px)] flex-col rounded-3xl bg-sky-100 p-6 shadow-md shadow-sky-950/10">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-800">
            {selectedTag || "Набор не найден"}
          </h1>
        </div>

        <Button
          className="bg-orange-300 text-stone-800 shadow-sm hover:bg-orange-400"
          variant="unstyled"
        >
          + Создать набор
        </Button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto pr-2">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3">
          {cardSets.map((set) => (
            <CardSetGroupCard
              author={set.author}
              cardsCount={set.cardsCount}
              key={`${set.title}-${set.author}-${set.setId}`}
              setId={set.setId}
              title={set.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
