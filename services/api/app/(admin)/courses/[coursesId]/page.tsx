import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Upload } from "lucide-react"
import Link from "next/link"

export default function CourseSettings() {
  return (
   <>
    <div className="lg:px-9 lg:pb-9 bg-[#EAEDF5]">
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Course Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upload Cover</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">Click to replace or drag and drop</p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <Label htmlFor="course-name">Course name</Label>
          <Input id="course-name" placeholder="Enter Course name" />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select>
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-6">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Enter description" />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <Label htmlFor="completion-button">Completion button</Label>
          <Select>
            <SelectTrigger id="completion-button">
              <SelectValue placeholder="Select button" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="complete">Complete</SelectItem>
              <SelectItem value="finish">Finish</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="assign-badge">Assign a badge</Label>
          <Select>
            <SelectTrigger id="assign-badge">
              <SelectValue placeholder="Select badge" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <Label htmlFor="course-type">Course type</Label>
          <Select>
            <SelectTrigger id="course-type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="video">Video</SelectItem>
              <SelectItem value="text">Text</SelectItem>
              <SelectItem value="mixed">Mixed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="group-setting">Group Setting</Label>
          <Input id="group-setting" placeholder="Enter Group setting" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <Label htmlFor="social-proof">Social proof</Label>
          <Input id="social-proof" placeholder="Enter Social proof" />
        </div>
        <div>
          <Label htmlFor="monetization">Monetization</Label>
          <Select>
            <SelectTrigger id="monetization">
              <SelectValue placeholder="Select monetization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="subscription">Subscription</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <Button variant="destructive">Delete Course</Button>
        <div>
          <Button variant="outline" className="mr-2">Cancel</Button>
          <Button>Publish</Button>
        </div>
      </div>
    </div>
    </div>
   </>
  )
}