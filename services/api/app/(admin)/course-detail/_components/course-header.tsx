"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Settings } from "lucide-react"

interface CourseHeaderProps {
  courseName: string
  membersCount: number
  completedCount: number
  remainingCount: number
}

export default function CourseHeader({
  courseName,
  membersCount,
  completedCount,
  remainingCount,
}: CourseHeaderProps = {
  courseName: "Money management",
  membersCount: 35,
  completedCount: 0,
  remainingCount: 0,
}) {
  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardContent className="p-2">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xl font-semibold">M</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{courseName}</h1>
                <p className="text-sm text-muted-foreground">
                  {membersCount} Members | {completedCount} Completed | {remainingCount} left
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="text-indigo-600 border-indigo-600">
                <Settings className="mr-2 h-4 w-4" />
                Course Settings
              </Button>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                Create lesson
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}