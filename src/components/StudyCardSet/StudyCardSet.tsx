import { useState } from "react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

import { Button, Input } from "~/components/ui";
import { recommendedSets } from "~/pages/MainPage.constants";
import { cn } from "~/utils";

type Rating = "bad" | "excellent" | "good";

const cards = recommendedSets.map((set, index) => ({
  answer: `Ответ для ${set.title}: ${set.author}`,
  id: index + 1,
  question: `Вопрос ${index + 1}: ${set.title}`,
}));

const ratings: { label: string; value: Rating }[] = [
  { label: "Отлично", value: "excellent" },
  { label: "Хорошо", value: "good" },
  { label: "Плохо", value: "bad" },
];

export function StudyCardSet() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardRatings, setCardRatings] = useState<Record<number, Rating>>({});

  const currentCard = cards[currentIndex];
  const selectedRating = cardRatings[currentCard.id];

  const moveCard = (direction: "next" | "prev") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? cards.length - 1 : prevIndex - 1;
      }

      return prevIndex === cards.length - 1 ? 0 : prevIndex + 1;
    });
    setIsFlipped(false);
  };

  const rateCard = (rating: Rating) => {
    setCardRatings((currentRatings) => ({
      ...currentRatings,
      [currentCard.id]: rating,
    }));
  };

  return (
    <main className="min-h-screen bg-[#F6F6F6] text-[#4F463F]">
      <header className="fixed inset-x-0 top-0 z-50 grid h-[74px] grid-cols-[1fr_minmax(280px,800px)_1fr] items-center gap-8 bg-sky-700/70 px-14 shadow-md shadow-sky-950/10">
        <div className="justify-self-start text-4xl font-light text-stone-700">
          MemoBit
        </div>

        <div className="flex h-9 w-full items-center rounded-lg border border-sky-900/20 bg-white px-3 shadow-sm shadow-sky-950/10">
          <MagnifyingGlassIcon className="mr-4 size-6 text-stone-900" />
          <Input
            className="text-base placeholder:text-stone-500"
            placeholder="Быстрый поиск групп, курсов, авторов"
            type="search"
            variant="unstyled"
          />
        </div>

        <div className="flex items-center gap-3 justify-self-end">
          <Button
            aria-label="Уведомления"
            className="text-stone-700 shadow-sm shadow-sky-950/10 hover:bg-white"
            size="icon"
            variant="unstyled"
          >
            <BellIcon className="size-7" />
          </Button>

          <Button
            aria-label="Профиль"
            className="border border-orange-200 bg-orange-300 shadow-md shadow-sky-950/15 hover:bg-orange-200"
            size="icon"
            variant="unstyled"
          />
        </div>
      </header>

      <section className="flex min-h-screen items-center justify-center px-2 py-6 pt-[90px] sm:px-4 lg:px-6">
        <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-sky-200 bg-white/95 shadow-xl shadow-sky-950/10">
          <div className="relative flex min-h-[clamp(420px,48vh,420px)] flex-1 items-center justify-center px-4 py-8 text-center sm:px-8 lg:px-12">
            <Button
              aria-label="Предыдущая карточка"
              className="absolute left-4 top-1/2 size-12 -translate-y-1/2 bg-transparent text-[#4F463F] shadow-none hover:bg-sky-200"
              onClick={() => moveCard("prev")}
              size="icon"
              variant="unstyled"
            >
              <ArrowLeftIcon className="size-8" />
            </Button>

            <div
              className={cn(
                "max-w-[620px] px-6 py-2 text-[clamp(1.25rem,2.8vw,1.75rem)] font-medium leading-snug text-[#2F2A26]",
              )}
            >
              {isFlipped ? currentCard.answer : currentCard.question}
            </div>

            {isFlipped ? (
              <p className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 px-6 text-center text-[clamp(0.95rem,1.8vw,1.05rem)] text-stone-400">
                Как легко вы вспомнили ответ?
              </p>
            ) : null}

            <Button
              aria-label="Следующая карточка"
              className="absolute right-4 top-1/2 size-12 -translate-y-1/2 bg-transparent text-[#4F463F] shadow-none hover:bg-sky-200"
              onClick={() => moveCard("next")}
              size="icon"
              variant="unstyled"
            >
              <ArrowRightIcon className="size-8" />
            </Button>
          </div>

          {isFlipped ? (
            <div className="grid min-h-16 grid-cols-3 bg-orange-300">
              {ratings.map((rating) => (
                <Button
                  className={cn(
                    "h-full rounded-none bg-transparent text-[clamp(1rem,2.3vw,1.25rem)] font-bold text-[#4F463F] hover:bg-orange-400",
                    selectedRating === rating.value && "bg-orange-400",
                  )}
                  key={rating.value}
                  onClick={() => rateCard(rating.value)}
                  variant="unstyled"
                >
                  {rating.label}
                </Button>
              ))}
            </div>
          ) : (
            <Button
              className="min-h-16 rounded-none bg-orange-300 text-[clamp(1rem,2.3vw,1.25rem)] font-bold text-[#4F463F] hover:bg-orange-400"
              onClick={() => setIsFlipped(true)}
              variant="unstyled"
            >
              Перевернуть
            </Button>
          )}
        </div>
      </section>
    </main>
  );
}
