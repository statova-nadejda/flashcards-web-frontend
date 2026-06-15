import { useState } from "react";

import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";

import { Button, Input } from "~/components/ui";

const initialCards = Array.from({ length: 2 }, (_, index) => ({
  answer: "",
  id: index + 1,
  question: "",
}));

export function CreateUpdateCardSet() {
  const [cards, setCards] = useState(initialCards);

  const addCard = () => {
    setCards((currentCards) => [
      ...currentCards,
      {
        answer: "",
        id: Date.now(),
        question: "",
      },
    ]);
  };

  const removeCard = (cardId: number) => {
    setCards((currentCards) =>
      currentCards.length === 1
        ? currentCards
        : currentCards.filter((card) => card.id !== cardId),
    );
  };

  const updateCard = (
    cardId: number,
    field: "answer" | "question",
    value: string,
  ) => {
    setCards((currentCards) =>
      currentCards.map((card) =>
        card.id === cardId ? { ...card, [field]: value } : card,
      ),
    );
  };

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 pt-2 text-[#4F463F] md:pt-4">
      <div className="grid gap-4">
        <Input
          className="h-12 rounded-lg border border-stone-700 bg-sky-100 px-5 text-xl font-bold text-[#2F2A26] shadow-md shadow-sky-500/30 placeholder:text-stone-500"
          id="cardSetTitle"
          placeholder="Название набора.."
        />

        <div className="grid min-h-24 rounded-lg bg-sky-100 p-4 shadow-md shadow-sky-500/30">
          <textarea
            className="min-h-12 resize-none bg-transparent text-base text-[#4F463F] outline-none placeholder:text-stone-500"
            id="cardSetDescription"
            placeholder="Добавьте описание..."
          />

          <div className="mt-3 flex items-center gap-2 self-end text-sm font-semibold text-[#4F463F]">
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-orange-300 text-stone-700 shadow-sm">
              <PlusIcon className="size-4" />
            </span>
            <span>Теги</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <p className="text-xl font-medium">
          Добавьте карточки для этого набора:
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <div
              className="relative min-h-[194px] overflow-hidden bg-white px-7 pb-10 pt-8 shadow-md shadow-sky-950/15"
              key={card.id}
            >
              <Button
                aria-label="Удалить карточку"
                className="absolute right-2 top-2 size-8 bg-orange-300 text-stone-800 shadow-sm hover:bg-orange-400 disabled:opacity-40"
                disabled={cards.length === 1}
                onClick={() => removeCard(card.id)}
                size="icon"
                variant="unstyled"
              >
                <TrashIcon className="size-4" />
              </Button>

              <div className="grid gap-2 pr-4">
                <label
                  className="text-sm font-bold text-[#4F463F]"
                  htmlFor={`question-${card.id}`}
                >
                  Вопрос
                </label>
                <Input
                  className="h-11 border-sky-200 bg-white text-sm shadow-sm shadow-sky-500/20"
                  id={`question-${card.id}`}
                  onChange={(event) =>
                    updateCard(card.id, "question", event.target.value)
                  }
                  value={card.question}
                />
              </div>

              <div className="mt-2 grid gap-2 pr-4">
                <label
                  className="text-sm font-bold text-[#4F463F]"
                  htmlFor={`answer-${card.id}`}
                >
                  Ответ
                </label>
                <Input
                  className="h-11 border-sky-200 bg-white text-sm shadow-sm shadow-sky-500/20"
                  id={`answer-${card.id}`}
                  onChange={(event) =>
                    updateCard(card.id, "answer", event.target.value)
                  }
                  value={card.answer}
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-8 bg-sky-700/70" />
            </div>
          ))}
        </div>
      </div>

      <Button
        className="h-11 w-full border border-dashed border-orange-300 bg-white text-lg font-bold text-[#4F463F] hover:bg-orange-50"
        onClick={addCard}
        variant="unstyled"
      >
        + Добавить карточку
      </Button>

      <div className="flex justify-end">
        <Button
          className="h-10 w-48 bg-orange-300 text-base font-bold text-[#4F463F] shadow-md shadow-sky-950/20 hover:bg-orange-400"
          variant="unstyled"
        >
          Сохранить
        </Button>
      </div>
    </section>
  );
}
