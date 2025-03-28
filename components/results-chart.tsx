"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface ResultsChartProps {
  data: {
    Goals: number
    Roles: number
    Processes: number
    Relationships: number
  }
}

export function ResultsChart({ data }: ResultsChartProps) {
  // Transform data for the chart
  const chartData = Object.entries(data).map(([name, value]) => ({
    name,
    value,
  }))

  // Define colors for each category
  const getBarColor = (name: string) => {
    switch (name) {
      case "Goals":
        return "hsl(221, 83%, 53%)" // Primary blue
      case "Roles":
        return "hsl(221, 83%, 63%)" // Lighter blue
      case "Processes":
        return "hsl(221, 83%, 73%)" // Even lighter blue
      case "Relationships":
        return "hsl(221, 83%, 83%)" // Lightest blue
      default:
        return "hsl(221, 83%, 53%)"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Collaboration Score</CardTitle>
        <CardDescription>Your team's performance across four key collaboration areas</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "currentColor" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fill: "currentColor" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                formatter={(value) => [`${value}%`, "Score"]}
                contentStyle={{
                  backgroundColor: "white",
                  borderColor: "#e5e7eb",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar
                dataKey="value"
                radius={[4, 4, 0, 0]}
                barSize={60}
                fillOpacity={0.9}
                fill={(entry) => getBarColor(entry.name)}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

