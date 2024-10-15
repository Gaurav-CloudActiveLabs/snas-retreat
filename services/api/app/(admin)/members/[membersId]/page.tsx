import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Edit, Users, Award } from "lucide-react"
import { BackgroundImage } from '@/Components/BackComponent'

type Props = {}

const SingleMember = (props: Props) => {
  return (
    <>
    <BackgroundImage>
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium text-[#25324B]">Members Details</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Notify
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            {/* <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Jerome Bell" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar> */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">Jerome Bell 🇺🇸</h2>
                  <p className="text-sm text-muted-foreground">jeromeBell45@email.com</p>
                </div>
                <Button size="sm" className="flex items-center gap-2">
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">21</Badge>
                  <span className="text-sm text-muted-foreground">Posts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">21</Badge>
                  <span className="text-sm text-muted-foreground">Comments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">21</Badge>
                  <span className="text-sm text-muted-foreground">Projects</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Last Seen: 2 month ago · Activity in 07 days: 1 times · Activity in 30 days: 1 times
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Groups</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-6">
          <img src="/placeholder.svg?height=200&width=200" alt="Groups illustration" className="mb-4" />
          <Button className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Add Groups
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-6">
          <img src="/placeholder.svg?height=100&width=100" alt="Badges illustration" className="mb-4" />
          <Button className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            Add badges
          </Button>
        </CardContent>
      </Card>
    </div>
    </BackgroundImage>
    </>
  )
}

export default SingleMember;