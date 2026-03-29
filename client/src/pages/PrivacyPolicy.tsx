// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect the following types of personal information when you contact us or book an event:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Event Details (type, date, number of guests)</li>
        <li>Messages or additional instructions</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Respond to your inquiries or requests</li>
        <li>Process event bookings and quotes</li>
        <li>Improve our services</li>
        <li>Communicate updates and special offers (only with your consent)</li>
      </ul>
      <p className="mb-4">We do <strong>not</strong> sell or share your personal information with third parties for marketing purposes.</p>

      <h2 className="text-2xl font-semibold mb-2">3. Data Security</h2>
      <p className="mb-4">
        We take reasonable precautions to protect your information. All communication between your browser and our website is encrypted using SSL.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Cookies and Analytics</h2>
      <p className="mb-4">
        Our website may use cookies or third-party analytics tools (like Google Analytics) to improve user experience. These tools collect anonymous usage data such as pages visited, time spent on site, and browser type.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Request access to your personal data</li>
        <li>Correct any incorrect or outdated information</li>
        <li>Request deletion of your personal data</li>
        <li>Opt-out of marketing communications at any time</li>
      </ul>
      <p className="mb-4">To exercise any of these rights, contact us at: <strong>hometowncateringsc@gmail.com</strong></p>

      <h2 className="text-2xl font-semibold mb-2">6. Cancellation & Rescheduling Policy</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>No cancellation fee</strong> if canceled <strong>at least 5 days before the event</strong></li>
        <li><strong>$50 cancellation fee + restocking fee or the product cost</strong>, if canceled within 5 days</li>
        <li>C<strong>No cancellation fee</strong> if you <strong>reschedule within 2 weeks</strong></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
      <p className="mb-2"><strong>Hometown Catering LLC</strong></p>
      <p className="mb-1">📧 Email: hometowncateringsc@gmail.com</p>
      <p>📞 Phone: (843) 906-0776</p>
    </div>
  );
};

export default PrivacyPolicy;
