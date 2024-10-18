"use client"
import Footer from "@/components/pageComponents/footer"
import Header from "@/components/pageComponents/header"
import { Mail, DollarSign, Clock, AlertCircle, Percent, HelpCircle } from "lucide-react"

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="lg:px-28 px-10 mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Refund Policy</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <DollarSign className="mr-2 flex-shrink-0" />
              1. Eligibility for Refund
            </h2>
            <p>
              Refunds are processed in line with our Cancellation Policy. Cancellations made within the free cancellation window are eligible for a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Clock className="mr-2 flex-shrink-0" />
              2. Processing Refunds
            </h2>
            <p>
              Refunds will be processed within 7-10 business days from the approval of the cancellation request, depending on the booking channel:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>For bookings made directly with us (via counter, telephone, or our website), refunds will be credited back to the original method of payment.</li>
              <li>For bookings made through third-party platforms or travel agents, refunds will follow their individual refund policies and timelines.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <AlertCircle className="mr-2 flex-shrink-0" />
              3. Non-Refundable Bookings
            </h2>
            <p>
              Certain promotional offers and discounted bookings may be non-refundable, as specified at the time of booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Percent className="mr-2 flex-shrink-0" />
              4. Partial Refunds
            </h2>
            <p>
              In cases of partial cancellations or modifications, a proportional refund may be provided based on the specific situation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <HelpCircle className="mr-2 flex-shrink-0" />
              5. Contact Information
            </h2>
            <p>
              For any refund-related queries or disputes, please contact us at{' '}
              <a href="mailto:info@snasretreat.com" className="text-blue-600 hover:underline">
                info@snasretreat.com
              </a>.
            </p>
          </section>
        </div>
        </main>
      <Footer />
    </div>
  )
}