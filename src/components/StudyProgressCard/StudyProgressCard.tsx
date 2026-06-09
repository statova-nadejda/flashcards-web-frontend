import { cn } from "~/utils";

type ProgressDay = {
  completed: boolean;
  label: string;
};

type StudyProgressCardProps = {
  cardsCompleted: number;
  className?: string;
  days: ProgressDay[];
  streakDays: number;
};

export function StudyProgressCard({
  cardsCompleted,
  className = "",
  days,
  streakDays,
}: StudyProgressCardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl bg-sky-100 p-6 text-stone-700 shadow-md shadow-sky-950/10",
        className,
      )}
    >
      <div className="grid gap-2">
        <h2 className="text-xl font-bold leading-tight">Мой прогресс</h2>
        <p className="text-base font-light leading-tight">
          Пройдено карточек: {cardsCompleted}
        </p>
      </div>

      <div className="mt-4 grid gap-3">
        <h3 className="text-lg font-extrabold leading-tight">
          {streakDays} дней без перерыва
        </h3>

        <div className="flex items-end gap-2">
          <span className="text-4xl leading-none" aria-hidden="true">
            🔥
          </span>

          <div className="grid flex-1 gap-2">
            <div className="grid grid-cols-7 gap-2 text-center text-sm font-bold uppercase leading-none text-stone-600">
              {days.map((day) => (
                <span key={day.label}>{day.label}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-3">
              {days.map((day) => (
                <span
                  className={cn(
                    "aspect-square rounded-full border-[3px] border-stone-100 shadow-inner shadow-sky-950/10",
                    day.completed ? "bg-sky-400" : "bg-white",
                  )}
                  key={day.label}
                  title={day.completed ? "Повторено" : "Нет повторения"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
