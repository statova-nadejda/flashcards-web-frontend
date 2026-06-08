import { BellIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { Button, Input } from "~/components/ui";
import { cn } from "~/utils";
import { routePaths } from "~/utils/routePaths";

import type { ReactNode } from "react";
import { NavLink, Outlet } from "react-router";

type AppLayoutProps = {
  children?: ReactNode;
};

const navItems = [
  { label: "Главная", to: routePaths.MainPage },
  { label: "Библиотека", to: "/library" },
  { label: "Мое обучение", to: "/my-learning" },
  { label: "Тесты", to: "/tests" },
];

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen text-stone-700">
      <header className="grid h-[74px] grid-cols-[1fr_minmax(280px,800px)_1fr] items-center gap-8 bg-sky-700/70 px-14 shadow-md shadow-sky-950/10">
        <div className="justify-self-start text-4xl font-light">MemoBit</div>

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

      <div className="grid min-h-[calc(100vh-74px)] grid-cols-[420px_1fr]">
        <aside className="px-14 pt-[270px]">
          <nav className="grid gap-7">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "flex h-12 items-center justify-center rounded border border-sky-800 text-2xl shadow-sm shadow-sky-950/10 transition-colors",
                    isActive ? "bg-orange-300 shadow-md" : "bg-white",
                  )
                }
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="px-10 py-14">{children ?? <Outlet />}</main>
      </div>
    </div>
  );
}
