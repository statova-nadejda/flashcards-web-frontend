type CardSetInfoCardProps = {
  answer: string;
  question: string;
  tag?: string;
};

export function CardSetInfoCard({ answer, question }: CardSetInfoCardProps) {
  return (
    <article className="rounded-2xl border border-[#D1E3F0] bg-white p-4 shadow-sm shadow-sky-950/10">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl bg-[#EAF4FB] p-3">
          <p className="text-xs uppercase tracking-[0.18em] text-[#4A90C2]">
            Вопрос
          </p>
          <p className="mt-1 text-sm leading-6 text-[#2D3748]">{question}</p>
        </div>

        <div className="rounded-xl bg-[#EAF4FB] p-3">
          <p className="text-xs uppercase tracking-[0.18em] text-[#4A90C2]">
            Ответ
          </p>
          <p className="mt-1 text-sm leading-6 text-[#2D3748]">{answer}</p>
        </div>
      </div>
    </article>
  );
}
