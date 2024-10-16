-- CreateEnum
CREATE TYPE "UserUserTypeType" AS ENUM ('User', 'Admin');

-- CreateEnum
CREATE TYPE "RoomRoomTypeType" AS ENUM ('Deluxe', 'Premium');

-- CreateEnum
CREATE TYPE "BookingStatusType" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "BookingPaymentStatusType" AS ENUM ('Paid', 'Unpaid');

-- CreateEnum
CREATE TYPE "PaymentPaymentMethodType" AS ENUM ('CARD', 'UPI', 'NET_BANKING');

-- CreateEnum
CREATE TYPE "PaymentStatusType" AS ENUM ('Success', 'Failed', 'Pending');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "phoneNumber" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,
    "userType" "UserUserTypeType" DEFAULT 'User',
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "roomType" "RoomRoomTypeType" NOT NULL DEFAULT 'Premium',
    "roomNumber" TEXT NOT NULL DEFAULT '',
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "breakfastPrice" TEXT,
    "dinnerPrice" TEXT,
    "numberOfAdults" INTEGER,
    "numberOfChildren" INTEGER,
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "user" TEXT,
    "bookingNumber" TEXT NOT NULL DEFAULT '',
    "room" TEXT,
    "checkInDate" TIMESTAMP(3) NOT NULL,
    "checkOutDate" TIMESTAMP(3) NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "status" "BookingStatusType" DEFAULT 'PENDING',
    "payment" TEXT,
    "invoice" TEXT,
    "paymentStatus" "BookingPaymentStatusType" DEFAULT 'Unpaid',
    "bookingType" TEXT,
    "primaryUser" TEXT,
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "paymentMethod" "PaymentPaymentMethodType" NOT NULL DEFAULT 'CARD',
    "requestId" TEXT NOT NULL DEFAULT '',
    "transactionId" TEXT,
    "bookingNumber" TEXT,
    "status" "PaymentStatusType" NOT NULL DEFAULT 'Pending',
    "amount" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "user" TEXT,
    "room" TEXT,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL DEFAULT '',
    "image_id" TEXT,
    "image_filesize" INTEGER,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_extension" TEXT,
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slider" (
    "id" TEXT NOT NULL,
    "image_id" TEXT,
    "image_filesize" INTEGER,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_extension" TEXT,
    "details" TEXT NOT NULL DEFAULT '',
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "Slider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomImage" (
    "id" TEXT NOT NULL,
    "image_id" TEXT,
    "image_filesize" INTEGER,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_extension" TEXT,
    "description" TEXT NOT NULL DEFAULT '',
    "room" TEXT,

    CONSTRAINT "RoomImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL DEFAULT '',
    "answer" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL DEFAULT '',
    "amount" DOUBLE PRECISION NOT NULL,
    "taxDetails" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BreakfastPrice" (
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "BreakfastPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DinnerPrice" (
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "DinnerPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportList" (
    "id" TEXT NOT NULL,
    "type" TEXT,
    "data" JSONB,

    CONSTRAINT "ReportList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL DEFAULT '',
    "type" TEXT,
    "value" DOUBLE PRECISION NOT NULL,
    "isUsed" BOOLEAN NOT NULL DEFAULT false,
    "expirationDate" TIMESTAMP(3),

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingPrimaryUser" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "age" INTEGER,
    "primaryUserGender" TEXT,
    "verificationIdType" TEXT,
    "verificationId" TEXT NOT NULL DEFAULT '',
    "bookingType" TEXT,
    "address" TEXT NOT NULL DEFAULT '',
    "companyName" TEXT NOT NULL DEFAULT '',
    "companyAddress" TEXT NOT NULL DEFAULT '',
    "gstNumber" TEXT NOT NULL DEFAULT '',
    "updatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TEXT,
    "createdBy" TEXT,

    CONSTRAINT "BookingPrimaryUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE INDEX "User_updatedAt_idx" ON "User"("updatedAt");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");

-- CreateIndex
CREATE INDEX "User_updatedBy_idx" ON "User"("updatedBy");

-- CreateIndex
CREATE INDEX "User_createdBy_idx" ON "User"("createdBy");

-- CreateIndex
CREATE INDEX "Room_breakfastPrice_idx" ON "Room"("breakfastPrice");

-- CreateIndex
CREATE INDEX "Room_dinnerPrice_idx" ON "Room"("dinnerPrice");

-- CreateIndex
CREATE INDEX "Room_updatedAt_idx" ON "Room"("updatedAt");

-- CreateIndex
CREATE INDEX "Room_createdAt_idx" ON "Room"("createdAt");

-- CreateIndex
CREATE INDEX "Room_updatedBy_idx" ON "Room"("updatedBy");

-- CreateIndex
CREATE INDEX "Room_createdBy_idx" ON "Room"("createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_bookingNumber_key" ON "Booking"("bookingNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_payment_key" ON "Booking"("payment");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_invoice_key" ON "Booking"("invoice");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_primaryUser_key" ON "Booking"("primaryUser");

-- CreateIndex
CREATE INDEX "Booking_user_idx" ON "Booking"("user");

-- CreateIndex
CREATE INDEX "Booking_room_idx" ON "Booking"("room");

-- CreateIndex
CREATE INDEX "Booking_updatedAt_idx" ON "Booking"("updatedAt");

-- CreateIndex
CREATE INDEX "Booking_createdAt_idx" ON "Booking"("createdAt");

-- CreateIndex
CREATE INDEX "Booking_updatedBy_idx" ON "Booking"("updatedBy");

-- CreateIndex
CREATE INDEX "Booking_createdBy_idx" ON "Booking"("createdBy");

-- CreateIndex
CREATE INDEX "Payment_requestId_idx" ON "Payment"("requestId");

-- CreateIndex
CREATE INDEX "Payment_transactionId_idx" ON "Payment"("transactionId");

-- CreateIndex
CREATE INDEX "Payment_bookingNumber_idx" ON "Payment"("bookingNumber");

-- CreateIndex
CREATE INDEX "Payment_updatedAt_idx" ON "Payment"("updatedAt");

-- CreateIndex
CREATE INDEX "Payment_createdAt_idx" ON "Payment"("createdAt");

-- CreateIndex
CREATE INDEX "Payment_updatedBy_idx" ON "Payment"("updatedBy");

-- CreateIndex
CREATE INDEX "Payment_createdBy_idx" ON "Payment"("createdBy");

-- CreateIndex
CREATE INDEX "Review_user_idx" ON "Review"("user");

-- CreateIndex
CREATE INDEX "Review_room_idx" ON "Review"("room");

-- CreateIndex
CREATE INDEX "Review_updatedAt_idx" ON "Review"("updatedAt");

-- CreateIndex
CREATE INDEX "Review_createdAt_idx" ON "Review"("createdAt");

-- CreateIndex
CREATE INDEX "Review_updatedBy_idx" ON "Review"("updatedBy");

-- CreateIndex
CREATE INDEX "Review_createdBy_idx" ON "Review"("createdBy");

-- CreateIndex
CREATE INDEX "Slider_updatedAt_idx" ON "Slider"("updatedAt");

-- CreateIndex
CREATE INDEX "Slider_createdAt_idx" ON "Slider"("createdAt");

-- CreateIndex
CREATE INDEX "Slider_updatedBy_idx" ON "Slider"("updatedBy");

-- CreateIndex
CREATE INDEX "Slider_createdBy_idx" ON "Slider"("createdBy");

-- CreateIndex
CREATE INDEX "RoomImage_room_idx" ON "RoomImage"("room");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_invoiceNumber_key" ON "Invoice"("invoiceNumber");

-- CreateIndex
CREATE INDEX "BreakfastPrice_updatedAt_idx" ON "BreakfastPrice"("updatedAt");

-- CreateIndex
CREATE INDEX "BreakfastPrice_createdAt_idx" ON "BreakfastPrice"("createdAt");

-- CreateIndex
CREATE INDEX "BreakfastPrice_updatedBy_idx" ON "BreakfastPrice"("updatedBy");

-- CreateIndex
CREATE INDEX "BreakfastPrice_createdBy_idx" ON "BreakfastPrice"("createdBy");

-- CreateIndex
CREATE INDEX "DinnerPrice_updatedAt_idx" ON "DinnerPrice"("updatedAt");

-- CreateIndex
CREATE INDEX "DinnerPrice_createdAt_idx" ON "DinnerPrice"("createdAt");

-- CreateIndex
CREATE INDEX "DinnerPrice_updatedBy_idx" ON "DinnerPrice"("updatedBy");

-- CreateIndex
CREATE INDEX "DinnerPrice_createdBy_idx" ON "DinnerPrice"("createdBy");

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_code_key" ON "Coupon"("code");

-- CreateIndex
CREATE INDEX "BookingPrimaryUser_updatedAt_idx" ON "BookingPrimaryUser"("updatedAt");

-- CreateIndex
CREATE INDEX "BookingPrimaryUser_createdAt_idx" ON "BookingPrimaryUser"("createdAt");

-- CreateIndex
CREATE INDEX "BookingPrimaryUser_updatedBy_idx" ON "BookingPrimaryUser"("updatedBy");

-- CreateIndex
CREATE INDEX "BookingPrimaryUser_createdBy_idx" ON "BookingPrimaryUser"("createdBy");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_breakfastPrice_fkey" FOREIGN KEY ("breakfastPrice") REFERENCES "BreakfastPrice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_dinnerPrice_fkey" FOREIGN KEY ("dinnerPrice") REFERENCES "DinnerPrice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_room_fkey" FOREIGN KEY ("room") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_payment_fkey" FOREIGN KEY ("payment") REFERENCES "Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_invoice_fkey" FOREIGN KEY ("invoice") REFERENCES "Invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_primaryUser_fkey" FOREIGN KEY ("primaryUser") REFERENCES "BookingPrimaryUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_room_fkey" FOREIGN KEY ("room") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slider" ADD CONSTRAINT "Slider_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slider" ADD CONSTRAINT "Slider_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomImage" ADD CONSTRAINT "RoomImage_room_fkey" FOREIGN KEY ("room") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreakfastPrice" ADD CONSTRAINT "BreakfastPrice_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreakfastPrice" ADD CONSTRAINT "BreakfastPrice_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DinnerPrice" ADD CONSTRAINT "DinnerPrice_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DinnerPrice" ADD CONSTRAINT "DinnerPrice_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingPrimaryUser" ADD CONSTRAINT "BookingPrimaryUser_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingPrimaryUser" ADD CONSTRAINT "BookingPrimaryUser_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
