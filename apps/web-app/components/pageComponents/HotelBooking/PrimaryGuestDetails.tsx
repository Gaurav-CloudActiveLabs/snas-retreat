"use client";
import { useState, useEffect, useContext, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PrimaryGuestDetailsCard({
  primaryUser,
  handleInputChange,
  handleSubmit,
  countriesData,
  statesData,
  errors,
}: any) {
  const [isIndia, setIsIndia] = useState(false); // Track if India is selected
  const [country, setCountry] = useState(""); // Track if India is selected
  const [state, setState] = useState(""); // Track if India is selected

  // Transform countriesData to create options
  const countryOptions = useMemo(
    () =>
      countriesData?.countries?.map((country: any) => ({
        value: country?.id,
        label: country?.name,
      })),
    [countriesData]
  );
  let stateOptions = useMemo(
    () =>
      statesData?.states?.map((state: any) => ({
        value: state?.id,
        label: state?.name,
      })),
    [statesData]
  );

  //   const handleCountryChange = (selectedCountry: any) => {
  //     const { value, label } = selectedCountry;
  //     // Check if the selected country is different from the current country
  //     if (country !== label) {
  //       handleInputChange({
  //         target: { name: "countries", value: value }, // Keep selectedCountry as is
  //       } as any);

  //       console.log(label);
  //       setCountry(label);
  //       // Update state based on selected country
  //       setIsIndia(label === "India");
  //     }
  //   };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Primary Guest Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Name */}
            <div className="space-y-2">
              <Label htmlFor="name">User Name <span className="text-red-500">*</span></Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={primaryUser.name}
                onChange={handleInputChange}
                className={`w-full ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                required
                value={primaryUser.age}
                onChange={handleInputChange}
                className={`w-full ${errors.age ? "border-red-500" : ""}`}
              />
              {errors.age && (
                <p className="text-red-500 text-sm">{errors.age}</p>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                onValueChange={(value) =>
                  handleInputChange({
                    target: { name: "gender", value },
                  } as any)
                }
              >
                <SelectTrigger className="w-full">
                  <span>
                    {primaryUser.gender === "male"
                      ? "Male"
                      : primaryUser.gender === "female"
                        ? "Female"
                        : primaryUser.gender === "non_binary"
                          ? "Non-binary"
                          : "Prefer not to say"}
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="non_binary">Non-binary</SelectItem>
                  <SelectItem value="prefer_not_to_say">
                    Prefer not to say
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Verification ID Type */}
            <div className="space-y-2">
              <Label htmlFor="verificationIdType">Verification ID Type</Label>
              <Select
                onValueChange={(value) =>
                  handleInputChange({
                    target: { name: "verificationIdType", value },
                  } as any)
                }
              >
                <SelectTrigger className="w-full">
                  <span>
                    {primaryUser.verificationIdType === "aadhaar"
                      ? "Aadhaar"
                      : primaryUser.verificationIdType === "voterID"
                        ? "Voter ID"
                        : primaryUser.verificationIdType === "passport"
                          ? "Passport"
                          : primaryUser.verificationIdType === "drivingLicense"
                            ? "Driving License"
                            : "Select Verification ID"}
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aadhaar">Aadhaar</SelectItem>
                  <SelectItem value="voterID">Voter ID</SelectItem>
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="drivingLicense">
                    Driving License
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Government ID */}
            <div className="space-y-2">
              <Label htmlFor="verificationId">Government ID <span className="text-red-500">*</span></Label>
              <Input
                id="verificationId"
                name="verificationId"
                type="text"
                required
                value={primaryUser.verificationId}
                onChange={handleInputChange}
                placeholder="Enter Government ID"
                className={`w-full ${errors.verificationId ? "border-red-500" : ""}`}
              />
              {errors.verificationId && (
                <p className="text-red-500 text-sm">{errors.verificationId}</p>
              )}
            </div>

            {/* Booking Type */}
            <div className="space-y-2">
              <Label htmlFor="bookingType">Booking Type</Label>
              <Select
                onValueChange={(value) =>
                  handleInputChange({
                    target: { name: "bookingType", value },
                  } as any)
                }
              >
                <SelectTrigger className="w-full">
                  <span>
                    {primaryUser.bookingType === "personal"
                      ? "Personal"
                      : primaryUser.bookingType === "corporate"
                        ? "Corporate"
                        : "Select Booking Type"}
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal">Personal Use</SelectItem>
                  <SelectItem value="corporate">Corporate Booking</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="countries">Country <span className="text-red-500">*</span></Label>
              <Select
                onValueChange={(value) => {
                  const selectedCountry = JSON.parse(value);
                  const { label } = selectedCountry;

                  // Check if the selected country is different from the current country
                  if (country !== label) {
                    handleInputChange({
                      target: {
                        name: "countries",
                        value: selectedCountry.value,
                      },
                    } as any);

                    setCountry(label);
                    setIsIndia(label === "India");
                    if (label !== "India") {
                      setState(""); // Reset state if country is not India
                    }
                  }
                }}
              >
                <SelectTrigger
                  className={`w-full ${errors.countries ? "border-red-500" : ""}`}
                >
                  <span>{country || "Select a Country"}</span>
                </SelectTrigger>
                <SelectContent>
                  {countryOptions?.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={JSON.stringify(option)} // Pass the entire object as a JSON string
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.countries && (
                <p className="text-red-500 text-sm">{errors.countries}</p>
              )}
            </div>

            {/* State */}
            <div className="space-y-2">
              <Label htmlFor="state">
                State <span className="text-red-500">*</span>
              </Label>
              {isIndia ? (
                <Select
                  onValueChange={(value) => {
                    const selectedState = JSON.parse(value);
                    const { label } = selectedState;

                    if (state !== label) {
                      handleInputChange({
                        target: {
                          name: "indianState",
                          value: selectedState.value,
                        },
                      } as any);

                      handleInputChange({
                        target: {
                          name: "state",
                          value: label,
                        },
                      } as any);

                      setState(label);
                    }
                  }}
                >
                  <SelectTrigger
                    className={`w-full ${errors.state ? "border-red-500" : ""}`}
                  >
                    <span>{state || "Select a State"}</span>
                  </SelectTrigger>
                  <SelectContent>
                    {stateOptions?.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={JSON.stringify(option)} // Pass the entire object as a JSON string
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  id="state"
                  name="state"
                  type="text"
                  required
                  value={primaryUser.state}
                  onChange={handleInputChange}
                  placeholder="Enter State"
                  className={`w-full ${errors.state ? "border-red-500" : ""}`}
                />
              )}
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
            </div>
            {/* Street Address */}
            <div className="space-y-2">
              <Label htmlFor="streetAddress">Street Address <span className="text-red-500">*</span></Label>
              <Input
                id="streetAddress"
                name="streetAddress"
                type="text"
                required
                value={primaryUser.streetAddress}
                onChange={handleInputChange}
                placeholder="Enter Street Address"
                className={`w-full ${errors.streetAddress ? "border-red-500" : ""}`}
              />
              {errors.streetAddress && (
                <p className="text-red-500 text-sm">{errors.streetAddress}</p>
              )}
            </div>

            {/* Address Line 2 */}
            <div className="space-y-2">
              <Label htmlFor="addressLine2">Address Line 2</Label>
              <Input
                id="addressLine2"
                name="addressLine2"
                type="text"
                value={primaryUser.addressLine2}
                onChange={handleInputChange}
                placeholder="Enter Address Line 2 (optional)"
                className="w-full"
              />
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                type="text"
                required
                value={primaryUser.city}
                onChange={handleInputChange}
                placeholder="Enter City"
                className="w-full"
              />
            </div>

            {/* Postal Code */}
            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code <span className="text-red-500">*</span></Label>
              <Input
                id="postalCode"
                name="postalCode"
                type="text"
                required
                value={primaryUser.postalCode}
                onChange={handleInputChange}
                placeholder="Enter Postal Code"
                className={`w-full ${errors.postalCode ? "border-red-500" : ""}`}
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm">{errors.postalCode}</p>
              )}
            </div>
          </div>

          {primaryUser.bookingType === "corporate" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={primaryUser.companyName}
                  required={primaryUser.bookingType === "corporate"}
                  onChange={handleInputChange}
                  className={`w-full ${errors.companyName ? "border-red-500" : ""}`}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">{errors.companyName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="gstNumber">GST Number <span className="text-red-500">*</span></Label>
                <Input
                  id="gstNumber"
                  name="gstNumber"
                  type="text"
                  value={primaryUser.gstNumber}
                  required={primaryUser.bookingType === "corporate"}
                  onChange={handleInputChange}
                  className={`w-full ${errors.gstNumber ? "border-red-500" : ""}`}
                />
                {errors.gstNumber && (
                  <p className="text-red-500 text-sm">{errors.gstNumber}</p>
                )}
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
