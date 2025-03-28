import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg dark:from-purple-950/30 dark:to-blue-950/30">
          <div className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-full bg-white/80 text-blue-600 dark:bg-slate-800/80 dark:text-blue-400 mb-2">
            <Zap className="h-3.5 w-3.5 mr-1" />
            Introducing Lookout
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Software teams have blind spots. <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">We reveal them daily.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We help software teams identify invisible blockers, prioritize solutions,
            and improve collaboration through one simple question each day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link href="/get-started">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/assessment">
              <Button variant="outline" size="lg" className="gap-2">
                Take Team Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg" className="gap-2">
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Existing Card */}
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

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
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

