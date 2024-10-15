import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FileIcon } from "lucide-react"

export default function FolderComponent() {
  return (
   <div className="lg:py-9 lg:px-9 h-full bg-[#EAEDF5]">
     <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          {/* <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
            B
          </div> */}
          <h1 className="text-2xl font-bold">Folder</h1>
        </div>
        <div className="space-x-2">
          <Button variant="outline">Edit</Button>
          <Button>Add Subfolder</Button>
        </div>
      </div>

      <Card className="p-6 mb-6 h-svh">
        <h2 className="text-lg font-semibold mb-2">Upload Cover</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-sm text-gray-500 mb-2">Click to replace or drag and drop</p>
          <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-6">Folders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="p-4">
            <div className="flex flex-col items-center">
              <FileIcon className="w-16 h-16 text-gray-400 mb-2" />
              <p className="text-sm font-medium text-center">Welcome to Stepping Forward</p>
            </div>
          </Card>
        ))}
      </div>
      </Card>

    </div>
   </div>
  )
}