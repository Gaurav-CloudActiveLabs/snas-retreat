import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PriceBreakup = ({
    extraRooms,
    numberOfDays,
    basePrice,
    state,
    gstPrice,
    cgst,
    sgst,
    igst,
    gstRate,
    finalPrice
  }: any) => {
  
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Price Breakup</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>
                {extraRooms + 1} Room x {numberOfDays} Night
              </span>
              <span>₹ {basePrice}</span>
            </div>
            {state === "Himachal Pradesh" && (
              <>
                <div className="flex justify-between">
                  <span>Hotel Taxes {gstRate * 100}%</span>
                  <span>₹ {gstPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>CGST</span>
                  <span>₹ {cgst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>SGST</span>
                  <span>₹ {sgst.toFixed(2)}</span>
                </div>
              </>
            )}
            {state !== "Himachal Pradesh" && (
              <>
                <div className="flex justify-between">
                  <span>Hotel Taxes {gstRate * 100}%</span>
                  <span>₹ {gstPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>IGST</span>
                  <span>₹ {igst.toFixed(2)}</span>
                </div>
              </>
            )}
            <div className="flex justify-between font-bold">
              <span>Total Amount to be paid</span>
              <span>₹ {finalPrice.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };
  
  export default PriceBreakup;
  