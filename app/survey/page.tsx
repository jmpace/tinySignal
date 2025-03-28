"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { LikertScale } from "@/components/likert-scale"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Sample questions for the survey
const questions = [
  {
    id: 1,
    text: "Our team has a clear understanding of our shared goals and objectives.",
    category: "Goals",
  },
  {
    id: 2,
    text: "Team members understand their roles and responsibilities clearly.",
    category: "Roles",
  },
  {
    id: 3,
    text: "Our team has effective processes for making decisions.",
    category: "Processes",
  },
  {
    id: 4,
    text: "Team members communicate openly and honestly with each other.",
    category: "Relationships",
  },
  {
    id: 5,
    text: "Our team regularly reviews progress toward our goals.",
    category: "Goals",
  },
  {
    id: 6,
    text: "Team members have the skills and resources needed to fulfill their roles.",
    category: "Roles",
  },
  {
    id: 7,
    text: "Our workflows and systems help us work efficiently together.",
    category: "Processes",
  },
  {
    id: 8,
    text: "There is a high level of trust among team members.",
    category: "Relationships",
  },
]

export default function SurveyPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))
  const [selectedValue, setSelectedValue] = useState(null)
  const router = useRouter()

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleNext = () => {
    // Save the current answer
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedValue
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedValue(answers[currentQuestion + 1])
    } else {
      // Calculate results and navigate to results page
      const results = calculateResults(newAnswers)
      // In a real app, you'd pass these results to the results page
      router.push("/results")
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedValue(answers[currentQuestion - 1])
    }
  }

  const calculateResults = (answers) => {
    // This would calculate the actual results by category
    // For now, we'll just return placeholder data
    return {
      Goals: 75,
      Roles: 60,
      Processes: 80,
      Relationships: 70,
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <div className="text-sm font-medium text-primary">{questions[currentQuestion].category}</div>
            </div>
            <Progress value={progress} className="h-2" />
            <CardTitle className="text-xl mt-6">{questions[currentQuestion].text}</CardTitle>
          </CardHeader>
          <CardContent className="px-6 py-4">
            <LikertScale value={selectedValue} onChange={setSelectedValue} />
          </CardContent>
          <CardFooter className="flex justify-between pb-6 px-6">
            <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0} className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
            <Button onClick={handleNext} disabled={selectedValue === null} className="gap-2">
              {currentQuestion < questions.length - 1 ? (
                <>
                  Next <ArrowRight className="h-4 w-4" />
                </>
              ) : (
                "See Results"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

