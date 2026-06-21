import { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "~/components/ui";
import { recommendedSets } from "~/pages/MainPage.constants";
import { routePaths } from "~/utils/routePaths";

import { Link, useParams } from "react-router";

export function CardSetInfo() {
  const { setId } = useParams();
  const selectedSet = recommendedSets[Number(setId)];
  const cards = selectedSet
    ? Array.from({ length: selectedSet.cardsCount }, (_, index) => ({
        answer: `Ответ для ${selectedSet.title} — ${selectedSet.author}`,
        id: index + 1,
        question: `Вопрос ${index + 1}: ${selectedSet.title}`,
      }))
    : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  const currentCard = cards[currentIndex];

  if (!selectedSet || !currentCard) {
    return (
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-4 pt-4 text-[#2D3748]">
        <h1 className="text-2xl font-bold text-stone-800">Набор не найден</h1>
        <Link
          className="inline-flex h-10 w-[170px] items-center justify-center rounded-md bg-[#FFB454] text-sm font-medium text-[#2D3748] shadow-sm transition-colors hover:bg-[#F0A53A] focus-visible:ring-2 focus-visible:ring-sky-300"
          to={routePaths.StudentLibrarySets}
        >
          Вернуться к наборам
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 pt-4 text-[#2D3748]">
      <div className="rounded-3xl border border-sky-200 bg-sky-100 p-4 shadow-sm shadow-sky-950/10 md:p-5">
        <div className="grid items-center gap-4 md:grid-cols-[auto_1fr_auto]">
          <Button
            aria-label="Предыдущая карточка"
            className="size-10 rounded-full bg-white text-[#2D3748] shadow-sm hover:bg-[#F4F9FD]"
            onClick={handlePrev}
            size="icon"
            variant="unstyled"
          >
            <ArrowLeftIcon className="size-5" />
          </Button>

          <div className="flex min-h-[220px] items-center justify-center rounded-3xl px-4 py-4 text-center md:min-h-[260px] md:px-6">
            <div className="w-full max-w-[520px]">
              <p className="text-xl font-semibold text-[#2D3748] md:text-2xl">
                {currentCard.question}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#2D3748] md:text-base">
                {currentCard.answer}
              </p>
            </div>
          </div>

          <Button
            aria-label="Следующая карточка"
            className="size-10 rounded-full bg-white text-[#2D3748] shadow-sm hover:bg-[#F4F9FD]"
            onClick={handleNext}
            size="icon"
            variant="unstyled"
          >
            <ArrowRightIcon className="size-5" />
          </Button>
        </div>
      </div>

      <div className="rounded-3xl p-5 shadow-sm shadow-sky-950/10">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-base uppercase tracking-[0.25em] text-[#4A90C2]">
              В этом наборе
            </p>
          </div>
        </div>

        <div className="grid gap-2">
          {cards.map((card) => (
            <div
              className="grid overflow-hidden rounded-xl border border-[#D1E3F0] md:grid-cols-2"
              key={card.id}
            >
              <div className="bg-sky-100 p-3">
                <p className="text-xs uppercase tracking-[0.18em] text-[#4A90C2]">
                  Вопрос
                </p>
                <p className="mt-1 text-sm leading-6 text-[#2D3748]">
                  {card.question}
                </p>
              </div>
              <div className="border-t border-[#D1E3F0] bg-white p-3 md:border-l md:border-t-0">
                <p className="text-xs uppercase tracking-[0.18em] text-[#4A90C2]">
                  Ответ
                </p>
                <p className="mt-1 text-sm leading-6 text-[#2D3748]">
                  {card.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-3">
        <Link
          className="inline-flex h-10 w-[150px] items-center justify-center rounded-md bg-[#FFB454] text-sm font-medium text-[#2D3748] shadow-sm transition-colors hover:bg-[#F0A53A] focus-visible:ring-2 focus-visible:ring-sky-300"
          to={routePaths.CreateUpdateCardSet}
        >
          Редактировать
        </Link>
        <Button
          className="h-10 w-[150px] bg-[#FFB454] text-sm text-[#2D3748] shadow-sm hover:bg-[#F0A53A]"
          variant="unstyled"
        >
          Поделиться
        </Button>
      </div>
    </section>
  );
}
