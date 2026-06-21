import { BellIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { Button, Input } from "~/components/ui";
import { cn } from "~/utils";
import { routePaths } from "~/utils/routePaths";

import type { ReactNode } from "react";
import { NavLink, Outlet, useLocation } from "react-router";

type AppLayoutProps = {
  children?: ReactNode;
};

const navItems = [
  { label: "Главная", to: routePaths.StudentPage },
  { label: "Библиотека", to: routePaths.StudentLibrarySets },
  { label: "Мое обучение", to: routePaths.StudentCardSet },
];

export function AppLayout({ children }: AppLayoutProps) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen text-stone-700">
      <header className="fixed inset-x-0 top-0 z-50 grid h-[74px] grid-cols-[1fr_minmax(280px,800px)_1fr] items-center gap-8 bg-sky-700/70 px-14 shadow-md shadow-sky-950/10">
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

      <div className="grid min-h-screen grid-cols-[420px_1fr] pt-[74px]">
        <aside className="px-14 pt-42">
          <nav className="grid gap-7">
            {navItems.map((item) => (
              <NavLink
                className={() => {
                  const isLibraryRoute =
                    pathname === routePaths.StudentLibrarySets ||
                    pathname.startsWith(`${routePaths.StudentLibrarySets}/`);
                  const isActive =
                    item.to === routePaths.StudentLibrarySets
                      ? isLibraryRoute
                      : pathname === item.to && !isLibraryRoute;

                  return cn(
                    "flex h-12 items-center justify-center rounded border border-sky-800 text-2xl shadow-sm shadow-sky-950/10 transition-colors",
                    isActive
                      ? "bg-orange-300 shadow-md hover:bg-orange-400"
                      : "bg-white hover:bg-gray-100",
                  );
                }}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="px-10 py-12">{children ?? <Outlet />}</main>
      </div>
    </div>
  );
}
