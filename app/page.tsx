import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart2, Users, Target, Workflow } from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full py-16 md:py-24 flex flex-col items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-2 px-3 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Team Assessment Tool
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Understand Your Team's <br className="hidden md:block" />
            <span className="text-primary">Collaboration Dynamics</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Identify strengths and opportunities in your team's collaboration patterns with our research-backed
            assessment tool.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-4 w-4 text-primary" />
              </div>
              <span>Align on goals</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <span>Clarify roles</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Workflow className="h-4 w-4 text-primary" />
              </div>
              <span>Improve processes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart2 className="h-4 w-4 text-primary" />
              </div>
              <span>Measure progress</span>
            </div>
          </div>
        </div>
      </div>

      {/* Survey Card */}
      <div className="max-w-3xl w-full px-4 pb-16">
        <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">Team Collaboration Survey</CardTitle>
            <CardDescription className="text-lg mt-2">
              Understand your team's dynamics and improve collaboration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 px-6 py-4">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">What you'll discover:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureCard title="Goals" description="How aligned your team is on objectives and vision" icon="🎯" />
                <FeatureCard title="Roles" description="Clarity around responsibilities and expectations" icon="👥" />
                <FeatureCard
                  title="Processes"
                  description="Effectiveness of your team's workflows and systems"
                  icon="⚙️"
                />
                <FeatureCard
                  title="Relationships"
                  description="Quality of communication and trust within the team"
                  icon="🤝"
                />
              </div>
            </div>

            <div className="bg-slate-50/80 backdrop-blur-sm dark:bg-slate-800/50 rounded-lg p-4 text-sm">
              <p className="font-medium mb-2">About this survey:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>8 questions that take approximately 5 minutes to complete</li>
                <li>Your responses are anonymous and confidential</li>
                <li>Results can be shared with your team immediately</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Link href="/survey" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-base">
                Start Survey
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="flex items-start space-x-3 p-4 rounded-lg border bg-card">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

