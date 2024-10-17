import { FileText, Calendar, DollarSign, Users, Shield, AlertTriangle } from "lucide-react"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Terms and Conditions</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <FileText className="mr-2 flex-shrink-0" />
              1. General
            </h2>
            <p>
              By using this website or making a booking, you agree to comply with these Terms and Conditions. 
              SNAS RETREAT reserves the right to modify these terms at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Calendar className="mr-2 flex-shrink-0" />
              2. Booking
            </h2>
            <p>
              All bookings are subject to availability. We reserve the right to cancel or modify reservations at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <DollarSign className="mr-2 flex-shrink-0" />
              3. Rates and Pricing
            </h2>
            <p>
              All rates are subject to availability and may vary based on dates and room types. 
              Prices are inclusive of applicable taxes, unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Users className="mr-2 flex-shrink-0" />
              4. Guest Conduct
            </h2>
            <p>
              Guests are expected to behave respectfully towards other guests and staff. 
              Any violation of hotel policies may result in immediate cancellation of your stay without refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Shield className="mr-2 flex-shrink-0" />
              5. Liability
            </h2>
            <p>
              SNAS RETREAT is not liable for any loss, damage, or theft of personal property during your stay.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <AlertTriangle className="mr-2 flex-shrink-0" />
              6. Force Majeure
            </h2>
            <p>
              SNAS RETREAT shall not be held responsible for any cancellations or interruptions due to events 
              beyond our control, such as natural disasters, strikes, or government regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}