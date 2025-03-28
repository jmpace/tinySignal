"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResultsChart } from "@/components/results-chart"
import { ShareDialog } from "@/components/share-dialog"
import { Home, UserPlus } from "lucide-react"
import Link from "next/link"

// Sample results data
const resultsData = {
  Goals: 75,
  Roles: 60,
  Processes: 80,
  Relationships: 70,
}

const categoryDescriptions = {
  Goals: "How aligned your team is on objectives and vision. Strong alignment helps teams work toward common outcomes.",
  Roles:
    "Clarity around responsibilities and expectations. Well-defined roles reduce confusion and increase accountability.",
  Processes: "Effectiveness of your team's workflows and systems. Good processes enable efficient collaboration.",
  Relationships: "Quality of communication and trust within the team. Strong relationships foster better teamwork.",
}

export default function ResultsPage() {
  const [isShareOpen, setIsShareOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">Your Team Collaboration Results</CardTitle>
            <CardDescription className="text-lg mt-2">
              Based on your responses, here's how your team is performing across key areas
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 py-4">
            <div className="mb-8">
              <ResultsChart data={resultsData} />
            </div>

            <Tabs defaultValue="Goals" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
                <TabsTrigger value="Goals">Goals</TabsTrigger>
                <TabsTrigger value="Roles">Roles</TabsTrigger>
                <TabsTrigger value="Processes">Processes</TabsTrigger>
                <TabsTrigger value="Relationships">Relationships</TabsTrigger>
              </TabsList>
              {Object.entries(categoryDescriptions).map(([category, description]) => (
                <TabsContent key={category} value={category} className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CategoryIcon category={category} />
                        {category}: {resultsData[category]}%
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{description}</p>

                      <div className="mt-4 bg-slate-50/80 backdrop-blur-sm dark:bg-slate-800/50 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Recommendations:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {getRecommendations(category, resultsData[category]).map((rec, i) => (
                            <li key={i}>{rec}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 pb-6">
            <Button variant="outline" className="w-full sm:w-auto gap-2" asChild>
              <Link href="/">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button className="w-full sm:w-auto gap-2" onClick={() => setIsShareOpen(true)}>
              <UserPlus className="h-4 w-4" />
              Invite Team Members
            </Button>
          </CardFooter>
        </Card>
      </div>

      <ShareDialog open={isShareOpen} onOpenChange={setIsShareOpen} />
    </div>
  )
}

function CategoryIcon({ category }) {
  const icons = {
    Goals: "🎯",
    Roles: "👥",
    Processes: "⚙️",
    Relationships: "🤝",
  }

  return <span className="text-xl">{icons[category]}</span>
}

function getRecommendations(category, score) {
  // Return different recommendations based on category and score
  if (score < 70) {
    switch (category) {
      case "Goals":
        return [
          "Schedule a team workshop to clarify and align on objectives",
          "Create visual reminders of team goals in shared spaces",
          "Implement regular check-ins on goal progress",
        ]
      case "Roles":
        return [
          "Document clear role descriptions for each team member",
          "Hold one-on-one discussions to clarify expectations",
          "Create a team skills matrix to identify gaps and overlaps",
        ]
      case "Processes":
        return [
          "Review and streamline current workflows",
          "Implement a project management tool",
          "Establish clear decision-making protocols",
        ]
      case "Relationships":
        return [
          "Schedule team-building activities",
          "Create more opportunities for informal interaction",
          "Establish communication norms and expectations",
        ]
      default:
        return []
    }
  } else {
    switch (category) {
      case "Goals":
        return [
          "Continue to reinforce goals in team communications",
          "Consider how to evolve goals as the team progresses",
          "Share your goal-setting approach with other teams",
        ]
      case "Roles":
        return [
          "Look for growth opportunities within current roles",
          "Consider cross-training to increase flexibility",
          "Celebrate role-based achievements",
        ]
      case "Processes":
        return [
          "Regularly review and refine processes",
          "Document successful workflows for future reference",
          "Look for opportunities to automate routine tasks",
        ]
      case "Relationships":
        return [
          "Continue to invest in team relationships",
          "Create mentoring opportunities within the team",
          "Share relationship-building practices with other teams",
        ]
      default:
        return []
    }
  }
}

