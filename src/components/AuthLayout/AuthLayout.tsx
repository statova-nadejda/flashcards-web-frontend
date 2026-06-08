import authIllustration from "~/assets/img/auth-illustration.png";

import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-stone-50 via-sky-50 to-sky-100 text-stone-700">
      <header
        className="absolute left-7 top-5 z-20 text-3xl font-semibold leading-none text-stone-700 sm:left-12 sm:top-8"
        aria-label="MemoBit"
      >
        MemoBit
      </header>

      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 bottom-0 h-[76%] bg-gradient-to-t from-sky-200/80 via-sky-100/45 to-transparent" />
        <img
          alt=""
          className="absolute bottom-[-120px] left-1/2 w-[980px] max-w-none -translate-x-1/2 opacity-80 sm:bottom-[-180px] sm:w-[1180px] lg:bottom-[-245px] lg:w-[1380px]"
          src={authIllustration}
        />
      </div>

      <main className="relative z-10 grid min-h-screen place-items-center px-5 py-24 sm:px-8">
        <section className="grid min-h-[380px] w-full max-w-2xl place-items-center rounded-lg bg-orange-300 px-8 py-10 text-center shadow-2xl shadow-orange-900/15 sm:min-h-[430px] sm:px-12">
          {children}
        </section>
      </main>
    </div>
  );
}
