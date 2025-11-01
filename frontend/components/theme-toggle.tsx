"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-9 w-auto px-3 text-foreground hover:text-foreground hover:bg-accent flex items-center gap-2 lg:w-9 lg:px-0 lg:text-white lg:hover:text-white lg:hover:bg-white/10"
    >
      <Sun className="hidden lg:block h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 lg:text-white" />
      <Moon className="hidden lg:block absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 lg:text-white" />
      <span className="text-sm font-medium lg:sr-only">{theme === "dark" ? "Dark" : "Light"}</span>
    </Button>
  )
}
