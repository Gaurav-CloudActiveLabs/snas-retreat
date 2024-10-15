import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Smile, Paperclip } from "lucide-react"

const CreatePost = () => {
  return (
   <div className="lg:px-9 lg:pb-9 bg-[#EAEDF5]">
     <CardTitle className="text-3xl font-medium pt-5 pb-5 text-[#25324B]">Create new Post</CardTitle>
     <Card className="w-full max-w-full mx-auto">
      <CardContent className="space-y-4 pt-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="group" className="text-[#515B6F] text-base font-medium">Group</Label>
            <Select>
              <SelectTrigger id="group" className="border-[#D6DDEB] h-12 rounded-none text-[#A8ADB7]">
                <SelectValue placeholder="Select Groups" className="h-5 text-[#A8ADB7] text-base font-normal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="group1">Group 1</SelectItem>
                <SelectItem value="group2">Group 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="author" className="text-[#515B6F] text-base font-medium">Author</Label>
            <Select>
              <SelectTrigger id="author" className="border-[#D6DDEB] h-12 rounded-none text-[#A8ADB7]">
                <SelectValue placeholder="Select Author" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="author1">Author 1</SelectItem>
                <SelectItem value="author2">Author 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Textarea 
            placeholder="Share something" 
            className="min-h-[150px]"
          />
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center">
              <Smile className="w-5 h-5 mr-2" />
            </div>
            <span>0 / 500</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="gif" className="text-[#515B6F] text-base font-medium">Gif</Label>
            <Select>
              <SelectTrigger id="gif" className="border-[#D6DDEB] h-12 rounded-none text-[#A8ADB7]">
                <SelectValue placeholder="Select Gifs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gif1">Gif 1</SelectItem>
                <SelectItem value="gif2">Gif 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="button" className="text-[#515B6F] text-base font-medium">Button</Label>
            <Select>
              <SelectTrigger id="button" className="border-[#D6DDEB] h-12 rounded-none text-[#A8ADB7]">
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
          <Label htmlFor="poll" className="text-[#515B6F] text-base font-medium">Poll</Label>
          <Select>
            <SelectTrigger id="poll" className="border-[#D6DDEB] h-12 rounded-none text-[#A8ADB7]">
              <SelectValue placeholder="Create poll" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="poll1">Poll 1</SelectItem>
              <SelectItem value="poll2">Poll 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label className="text-[#515B6F] text-base font-medium">Attach your Media</Label>
          <div className="border-2 border-dashed border-[#4640DE] rounded-lg text-center p-3">
            {/* <Button variant="outline" className="w-full"> */}
            <div className="flex items-center">
            <Paperclip className="w-4 h-4 mr-2 text-[#4640DE]" />
            Attach File or media
            </div>
             
            {/* </Button> */}
          </div>
        </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="schedule" className="text-[#515B6F] text-base font-medium">Schedule</Label>
          <Select>
            <SelectTrigger id="schedule" className="border-[#D6DDEB] h-12 rounded-none text-[#A8ADB7]">
              <SelectValue placeholder="Schedule your post" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="now">Post now</SelectItem>
              <SelectItem value="later">Schedule for later</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-4 pb-11">
        <Button variant="outline" className="rounded-none h-11">Cancel</Button>
        <Button className="bg-[#4640DE] rounded-none h-11">Create Post</Button>
      </CardFooter>
    </Card>
   </div>
  )
}

export default CreatePost;