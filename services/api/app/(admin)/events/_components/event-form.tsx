"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Clock, MapPin, Upload } from "lucide-react"

export default function EventForm() {
  const [thumbnail, setThumbnail] = useState<File | null>(null)

  const handleThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setThumbnail(event.target.files[0])
    }
  }

  return (
    <div className="lg:px-9 lg:pb-9 bg-[#EAEDF5]">
         <CardTitle className="text-[28px] font-medium pt-5 pb-5">Create new Event</CardTitle>
    <Card className="w-full  pt-9 ">
    
      <CardContent className="space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-6 flex-grow mr-4">
            <RadioGroup defaultValue="online" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online">Online event</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="offline" id="offline" />
                <Label htmlFor="offline">Offline event</Label>
              </div>
            </RadioGroup>

            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input id="title" placeholder="Enter title" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Description" />
            </div>
          </div>

          <div className="w-48 h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-center p-4">
            <Label htmlFor="thumbnail" className="cursor-pointer">
              <div className="space-y-2">
                <Upload className="w-10 h-10 text-gray-400 mx-auto" />
                <span className="text-sm font-medium text-gray-600">Upload Thumbnail</span>
                <p className="text-xs text-gray-400">Click to replace or drag and drop</p>
                <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
              </div>
              <Input
                id="thumbnail"
                type="file"
                className="hidden"
                onChange={handleThumbnailChange}
                accept="image/svg+xml,image/png,image/jpeg,image/gif"
              />
            </Label>
            {thumbnail && (
              <p className="mt-2 text-sm text-gray-500">{thumbnail.name}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input id="date" placeholder="Enter Course name" className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input id="time" placeholder="Enter Course name" className="pl-10" />
            </div>
          </div>
        </div>

        <Button variant="outline" className="w-full">Add Livestream</Button>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input id="location" placeholder="Enter Course name" className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="venue">Venue</Label>
            <Input id="venue" placeholder="Enter venue" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="group">Group</Label>
            <Select>
              <SelectTrigger id="group">
                <SelectValue placeholder="Select Groups" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="group1">Group 1</SelectItem>
                <SelectItem value="group2">Group 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="button">Button</Label>
            <Select>
              <SelectTrigger id="button">
                <SelectValue placeholder="Add button" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="button1">Button 1</SelectItem>
                <SelectItem value="button2">Button 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="attendee">Attendee list</Label>
            <Select>
              <SelectTrigger id="attendee">
                <SelectValue placeholder="Add attendee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="attendee1">Attendee 1</SelectItem>
                <SelectItem value="attendee2">Attendee 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="schedule">Schedule</Label>
            <Select>
              <SelectTrigger id="schedule">
                <SelectValue placeholder="Schedule your post" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="schedule1">Schedule 1</SelectItem>
                <SelectItem value="schedule2">Schedule 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Create Event</Button>
      </CardFooter>
    </Card>
    </div>
  )
}