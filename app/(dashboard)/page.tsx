import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen bg-slate-100 dark:bg-zinc-950 dark:text-zinc-50 text-zinc-950 flex items-center justify-center text-4xl">
      Home Page
      <ThemeSwitcher />
    </div>
  );
};

export default Home;
