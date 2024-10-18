"use client"
import Footer from "@/components/pageComponents/footer"
import Header from "@/components/pageComponents/header"
import { Mail, Calendar, AlertCircle, DollarSign, UserX, LogOut } from "lucide-react"

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="lg:px-28 px-10 mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Cancellation Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Calendar className="mr-2 flex-shrink-0" />
              1. Free Cancellation
            </h2>
            <p>Cancellations can be made free of charge up to 7 days before the check-in date, irrespective of the booking channel used.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <AlertCircle className="mr-2 flex-shrink-0" />
              2. Late Cancellations
            </h2>
            <p>Cancellations made within 7 days of the check-in date will incur a 50% charge of the booking amount.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <UserX className="mr-2 flex-shrink-0" />
              3. No Show
            </h2>
            <p>Guests who do not arrive on the check-in date and fail to notify the hotel or the booking channel will be charged 100% of the booking amount.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <LogOut className="mr-2 flex-shrink-0" />
              4. Early Departures
            </h2>
            <p>If a guest decides to check out early, no refunds will be provided for the unused portion of the stay.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <DollarSign className="mr-2 flex-shrink-0" />
              5. Booking Channels
            </h2>
            <p>For cancellations made through third-party marketplaces (e.g., Yatra, MakeMyTrip) or travel agents, the guest must follow the cancellation process outlined by the respective channel. Refunds or charges will depend on their policies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Mail className="mr-2 flex-shrink-0" />
              6. Contact Information
            </h2>
            <p>For any cancellation-related queries or disputes, please email us at <a href="mailto:info@snasretreat.com" className="text-blue-600 hover:underline">info@snasretreat.com</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}