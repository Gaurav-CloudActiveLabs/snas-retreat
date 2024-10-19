import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tag } from 'lucide-react';

export default function CouponCard({ couponCode, setCouponCode, applyCoupon }:any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Coupon Codes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <Button onClick={applyCoupon}>
            <Tag className="w-4 h-4 mr-2" />
            Apply
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
