import { FlashcardSetCard } from "~/components/FlashcardSetCard";
import { StudyProgressCard } from "~/components/StudyProgressCard";
import { Button } from "~/components/ui";

import { recommendedSets, weekProgress } from "./MainPage.constants";

export function MainPage() {
  return (
    <div className="grid gap-5">
      <section className="flex h-56 gap-8">
        <StudyProgressCard
          cardsCompleted={400}
          className="flex-1"
          days={weekProgress}
          streakDays={5}
        />
        <div className="flex-1 rounded-3xl bg-sky-100 p-6 shadow-md shadow-sky-950/10">
          <div className="grid h-full grid-rows-[1fr_auto] gap-4">
            <div className="grid content-start gap-2">
              <span className="w-fit rounded-full bg-white/60 px-3 py-1 text-sm font-bold">
                Сегодня
              </span>

              <h2 className="text-xl font-extrabold leading-tight">
                С возвращением!
              </h2>

              <p className="text-base font-medium leading-tight">
                Давайте изучим ещё несколько карточек и продолжим прогресс.
              </p>
            </div>

            <Button
              className="w-[85%] justify-self-center bg-orange-300 shadow-sm hover:bg-orange-400 !text-base !font-bold"
              isSubmit
              variant="unstyled"
            >
              Продолжить обучение
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-7 justify-center">
        <h2 className="text-xl font-extrabold ml-2">Вам может понравиться:</h2>
        <div className="grid grid-cols-[repeat(3,280px)] gap-8">
          {recommendedSets.map((set) => (
            <FlashcardSetCard
              author={set.author}
              cardsCount={set.cardsCount}
              key={set.id}
              title={set.title}
              className="h-28"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
