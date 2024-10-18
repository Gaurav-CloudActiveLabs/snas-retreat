"use client"
import Footer from "@/components/pageComponents/footer"
import Header from "@/components/pageComponents/header"
import { Mail, Shield, Database, Lock, Cookie, CheckSquare } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="lg:px-28 px-10 mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Privacy Policy</h1>
        
        <p className="mb-8 text-gray-700">
          At SNAS RETREAT, we value your privacy and are committed to protecting your personal information. 
          This Privacy Policy explains how we collect, use, and safeguard your data.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Database className="mr-2 flex-shrink-0" />
              1. Information We Collect
            </h2>
            <p>
              We collect personal details like name, contact number, email address, and payment information 
              when you make a booking or inquiry. This information is used solely for reservation management 
              and communication purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Shield className="mr-2 flex-shrink-0" />
              2. How We Use Your Information
            </h2>
            <p>
              We use your information to manage your bookings, process payments, send confirmations, and 
              inform you about special offers. We do not share your personal data with third parties except 
              for payment processing and SMS/email notifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Lock className="mr-2 flex-shrink-0" />
              3. Data Security
            </h2>
            <p>
              We take appropriate measures to secure your personal information. All online transactions 
              are protected with secure encryption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Cookie className="mr-2 flex-shrink-0" />
              4. Cookies
            </h2>
            <p>
              We use cookies to improve your experience on our website, such as remembering your preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <CheckSquare className="mr-2 flex-shrink-0" />
              5. Your Consent
            </h2>
            <p>
              By using our website, you consent to the collection and use of your personal information 
              as outlined in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Mail className="mr-2 flex-shrink-0" />
              6. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding our privacy practices, please contact us at{' '}
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