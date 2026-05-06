import { BellIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

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

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-stone-700">
      <header className="flex h-[74px] items-center gap-8 border-stone-500 bg-sky-200 px-14">
        <div className="text-4xl font-light">MemoBit</div>

        <div className="flex h-9 max-w-[700px] flex-1 items-center rounded-lg border border-stone-600 bg-white px-3">
          <MagnifyingGlassIcon className="mr-4 size-6 text-stone-900" />
          <input
            className="w-full bg-transparent text-base outline-none placeholder:text-stone-500"
            placeholder="Быстрый поиск групп, курсов, авторов"
            type="search"
          />
        </div>

        <button className="ml-auto text-stone-700" type="button">
          <BellIcon className="size-8" />
        </button>

        <button
          aria-label="Профиль"
          className="size-10 rounded-full border border-stone-700 bg-orange-300"
          type="button"
        />
      </header>

      <div className="grid min-h-[calc(100vh-74px)] grid-cols-[420px_1fr]">
        <aside className="px-14 pt-[270px]">
          <nav className="grid gap-7">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  [
                    "flex h-12 items-center justify-center rounded border border-sky-900 text-2xl shadow-sm",
                    isActive ? "bg-orange-300" : "bg-white",
                  ].join(" ")
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
};

export default AppLayout;
