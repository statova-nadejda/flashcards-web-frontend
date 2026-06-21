import {
  LearningStats,
  ProgressTable,
  TodayCardsSummary,
} from "~/components/StudentCardSet";

const todayCardsGroups = [
  { title: "Английский", count: 23 },
  { title: "История", count: 8 },
  { title: "Французский", count: 8 },
];

const learningStats = [
  { label: "Streak", value: "🔥 12" },
  { label: "Изучено", value: "200 карточек" },
];

const progressRows = [
  { title: "English", cardsCount: 10, progressPercent: 65 },
  { title: "French", cardsCount: 25, progressPercent: 30 },
  { title: "Spanish", cardsCount: 15, progressPercent: 50 },
];

export function StudentCardSet() {
  return (
    <div className="grid w-full gap-10">
      <TodayCardsSummary
        groups={todayCardsGroups}
        repeatedCount={15}
        totalCount={31}
      />

      <LearningStats stats={learningStats} />

      <ProgressTable rows={progressRows} />
    </div>
  );
}
