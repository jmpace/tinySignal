import { Progress } from "@/components/ui/progress"

interface ProgressIndicatorProps {
  currentQuestion: number
  totalQuestions: number
}

export function ProgressIndicator({ currentQuestion, totalQuestions }: ProgressIndicatorProps) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <span className="font-medium">{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}

