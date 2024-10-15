"use client";

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload } from "lucide-react"


type Props = {}

const Group = (props: Props) => {
  return (
    <>
     <div className="lg:px-9 lg:pb-9 bg-[#EAEDF5]">
    <div>
    <h1 className="text-3xl font-medium pt-5 pb-5 text-[#25324B]">Create new Group</h1>
     <Card className="w-full mx-auto pt-5 shadow-none">
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <Label className="block mb-2">Upload Cover</Label>
            <div className="flex items-center justify-center w-full h-32 bg-gray-100 border-2 border-dashed rounded-lg">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-1 text-sm text-gray-600">Click to replace or drag and drop</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4 w-40">
            <Label className="block mb-2">Upload Thumbnail</Label>
            <div className="flex items-center justify-center w-full h-24 bg-gray-100 border-2 border-dashed rounded-lg">
              <div className="text-center">
                <Upload className="mx-auto h-8 w-8 text-gray-400" />
                <p className="mt-1 text-xs text-gray-500">Click to replace or drag and drop</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="group-name">Group name</Label>
          <Input id="group-name" placeholder="Enter group name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="group-description">Group description</Label>
          <Textarea id="group-description" placeholder="Share something" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="group-type">Group type</Label>
          <Select>
            <SelectTrigger id="group-type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="private">Private</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="show-advanced" />
          <Label htmlFor="show-advanced">Show Advance Settings</Label>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="likes-enabled" />
              <Label htmlFor="likes-enabled">Likes enabled</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="comments-enabled" />
              <Label htmlFor="comments-enabled">Comments enabled</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sharing-enabled" />
              <Label htmlFor="sharing-enabled">Sharing enabled</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="highlight-admins" />
              <Label htmlFor="highlight-admins">Highlight Group admins</Label>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="show-members-count" />
              <Label htmlFor="show-members-count">Show members Count</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="content-filtering" />
              <Label htmlFor="content-filtering">Content filtering</Label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="notification-settings">Notification settings</Label>
            <Select>
              <SelectTrigger id="notification-settings">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All notifications</SelectItem>
                <SelectItem value="mentions">Mentions only</SelectItem>
                <SelectItem value="none">No notifications</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="who-can-post">Who can post?</Label>
            <Select>
              <SelectTrigger id="who-can-post">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="everyone">Everyone</SelectItem>
                <SelectItem value="admins">Admins only</SelectItem>
                <SelectItem value="approved">Approved members</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="url-id">URL id</Label>
          <Input id="url-id" placeholder="Enter group name" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Create Group</Button>
      </CardFooter>
    </Card>
    </div>
   </div>
    </>
  )
}

export default Group