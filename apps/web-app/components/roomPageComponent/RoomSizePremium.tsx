import { Card, CardContent } from "@/components/ui/card"
import { RoomVector1, RoomVector2 } from '@/assets/svg'

export default function RoomSizePremium() {
  return (
    <div className="lg:px-28 px-6 mx-auto lg:-mt-20 md:-mt-20 mt-10 relative z-8">
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 rounded-lg p-4">
            {/* Room Size Section */}
            <div className="flex items-start space-x-4 flex-1">
              <div className="bg-orange-100 p-2 rounded flex justify-center items-center">
                <RoomVector1 /> {/* SVG Scaling */}
              </div>
              <div>
                <p className="font-medium text-[#A1A1A1] text-[15px] lg:text-[17px]">Room Size</p>
                <p className="font-bold text-[#A75F37] text-[30px] lg:text-[35px]">367 sq ft</p>
                <p className="text-black text-[16px] lg:text-[18px]">Designed to provide a larger and more comfortable livingarea</p>
              </div>
            </div>

            {/* Bed Section */}
            <div className="flex items-start space-x-4 flex-1">
              <div className="bg-orange-100 p-2 rounded flex justify-center items-center">
                <RoomVector2 /> {/* SVG Scaling */}
              </div>
              <div>
                <p className="font-medium text-[#A1A1A1] text-[15px] lg:text-[17px]">Bed</p>
                <p className="font-bold text-[#A75F37] text-[30px] lg:text-[35px]">King-sized</p>
                <p className="text-black text-[16px] lg:text-[18px] whitespace-normal lg:whitespace-nowrap">
                Bed with deluxe bedding for enhanced comfort.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
