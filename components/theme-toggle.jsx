"use client";

import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const themes = ["light", "dark", "system"];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentIndex = themes.findIndex((t) => t === theme);
    if (currentIndex !== -1) setIndex(currentIndex);
  }, [theme]);

  const toggleTheme = () => {
    const nextIndex = (index + 1) % themes.length;
    setTheme(themes[nextIndex]);
    setIndex(nextIndex);
  };

  const icon =
    themes[index] === "light" ? (
      <Sun className="h-[1.2rem] w-[1.2rem]" />
    ) : themes[index] === "dark" ? (
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    ) : (
      <Laptop className="h-[1.2rem] w-[1.2rem]" />
    );

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {icon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
