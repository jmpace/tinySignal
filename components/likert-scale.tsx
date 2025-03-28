"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const options = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
]

interface LikertScaleProps {
  value: number | null
  onChange: (value: number) => void
}

export function LikertScale({ value, onChange }: LikertScaleProps) {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  return (
    <div className="w-full py-6">
      <div className="grid grid-cols-5 gap-2 mb-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={cn(
              "flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 hover:border-primary",
              value === option.value
                ? "border-primary bg-primary/10 dark:bg-primary/20"
                : hoveredValue === option.value
                  ? "border-primary/50 bg-primary/5"
                  : "border-border",
            )}
            onClick={() => onChange(option.value)}
            onMouseEnter={() => setHoveredValue(option.value)}
            onMouseLeave={() => setHoveredValue(null)}
          >
            <span className={cn("text-2xl mb-2", value === option.value ? "text-primary" : "text-muted-foreground")}>
              {getEmoji(option.value)}
            </span>
            <span
              className={cn(
                "text-sm text-center font-medium",
                value === option.value ? "text-primary" : "text-muted-foreground",
              )}
            >
              {option.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex justify-between text-xs text-muted-foreground mt-2 px-1">
        <span>Strongly Disagree</span>
        <span>Strongly Agree</span>
      </div>
    </div>
  )
}

function getEmoji(value: number): string {
  switch (value) {
    case 1:
      return "😞"
    case 2:
      return "🙁"
    case 3:
      return "😐"
    case 4:
      return "🙂"
    case 5:
      return "😀"
    default:
      return "😐"
  }
}

