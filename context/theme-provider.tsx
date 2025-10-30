"use client";

import { createContext, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";

function usePrevious<T>(value: T) {
  const ref = useRef<T>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export const AppThemeContext = createContext<{ previousPathname?: string }>({});

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const previousPathname = usePrevious(pathname);

  return (
    <AppThemeContext.Provider value={{ previousPathname }}>
      {/*
        Force dark theme by default for all users. We disable system preference
        so that the defaultTheme='dark' is used unless the user explicitly
        changes it via the theme toggle (which persists via next-themes).
      */}
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="dark"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}
