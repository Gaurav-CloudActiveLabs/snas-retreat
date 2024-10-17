import { Mail, Phone, Globe, Clock, CreditCard, CalendarCheck } from "lucide-react"

export default function BookingPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Booking Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Booking Channels</h2>
            <p className="mb-4">Guests can book their stay through the following channels:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Directly from the hotel counter</li>
              <li>Via telephone</li>
              <li>Through third-party travel marketplaces like Yatra, MakeMyTrip, and others</li>
              <li>Through authorized travel agents</li>
              <li>Directly from our official website: <a href="http://www.snasretreat.com" className="text-blue-600 hover:underline">www.snasretreat.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Booking Confirmation</h2>
            <p>A booking is considered confirmed once a payment deposit or full payment is made through the chosen booking channel, and a confirmation is received via email or SMS.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Payment</h2>
            <p className="flex items-center"><CreditCard className="mr-2 flex-shrink-0" /> Guests can make payments via our secure payment gateway, at the hotel, or through the selected booking platform. Payment requirements vary by booking channel and offer.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Check-in/Check-out</h2>
            <div className="space-y-2">
              <p className="flex items-center"><Clock className="mr-2 flex-shrink-0" /> Check-in time: 2:00 PM</p>
              <p className="flex items-center"><Clock className="mr-2 flex-shrink-0" /> Check-out time: 11:00 AM</p>
              <p>Early check-ins or late check-outs may be accommodated based on availability and could incur additional charges.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Amendments to Bookings</h2>
            <p className="flex items-center"><CalendarCheck className="mr-2 flex-shrink-0" /> Modifications can be made based on availability. Guests are advised to contact the booking channel or hotel directly for any changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Contact Information</h2>
            <p className="mb-4">For queries or assistance regarding bookings, please contact us at:</p>
            <p className="flex items-center"><Mail className="mr-2 flex-shrink-0" /> <a href="mailto:info@snasretreat.com" className="text-blue-600 hover:underline">info@snasretreat.com</a></p>
          </section>
        </div>
      </div>
    </div>
  )
}