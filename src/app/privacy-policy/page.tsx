"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-400">
                        <strong>Effective Date:</strong> January 13, 2026<br />
                        <strong>Last Updated:</strong> January 12, 2026
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 pb-24">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                    <p className="text-gray-300 leading-relaxed mb-8">
                        This Privacy Policy explains how Advik Freight (&quot;Advik Freight&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, discloses, and protects personal information collected through our website{" "}
                        <a href="https://www.advikfreight.com" className="text-primary hover:underline">https://www.advikfreight.com</a>{" "}
                        (the &quot;Site&quot;) and in connection with the logistics and freight services we provide (&quot;Services&quot;). Your privacy matters. Please read this policy carefully.
                    </p>

                    {/* Section 1 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Information We Collect</h2>
                    <p className="text-gray-300 mb-4">We collect the following types of data:</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">A. Information You Provide Directly</h3>
                    <p className="text-gray-300 mb-4">
                        When you contact us, request a quote, sign up for services, or otherwise interact with the Site, we may collect:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                        <li>Full name</li>
                        <li>Company name</li>
                        <li>Business address</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Shipment or logistical details</li>
                        <li>Billing and payment information when required</li>
                        <li>Other information you choose to provide to us</li>
                    </ul>
                    <p className="text-gray-300 mb-6">
                        This information is necessary to respond to requests, provide Services, communicate with you, and fulfill contractual obligations.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">B. Optional Communications Information</h3>
                    <p className="text-gray-300 mb-4">
                        If you sign up for newsletters or SMS alerts, we may collect:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                        <li>Consent preferences</li>
                        <li>Message and data usage confirmation</li>
                    </ul>
                    <p className="text-gray-300 mb-6">
                        You agree to receive communications when you opt in. Message and data rates may apply.
                    </p>

                    {/* Section 2 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. How We Use Your Information</h2>
                    <p className="text-gray-300 mb-4">We use collected information for the following purposes:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                        <li>To provide logistics and freight services</li>
                        <li>To respond to inquiries and support requests</li>
                        <li>To provide quotes and process service requests</li>
                        <li>To communicate updates, offers, and service information</li>
                        <li>To improve the Site and Services</li>
                        <li>To comply with legal and regulatory requirements</li>
                        <li>To administer our internal business operations</li>
                    </ul>

                    {/* Section 3 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Legal Basis for Processing (where applicable)</h2>
                    <p className="text-gray-300 mb-4">
                        Where applicable under privacy laws (e.g., GDPR for EU residents or other international data protection laws), we process personal data based on:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                        <li>Your consent</li>
                        <li>Performance of a contract</li>
                        <li>Compliance with legal obligations</li>
                        <li>Our legitimate business interests</li>
                    </ul>

                    {/* Section 4 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Sharing Your Personal Information</h2>
                    <p className="text-gray-300 mb-4">We may share your information:</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">A. With Service Providers</h3>
                    <p className="text-gray-300 mb-4">Third parties who help us provide Services, such as:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                        <li>IT and hosting providers</li>
                        <li>Analytics and marketing partners</li>
                        <li>Logistics partners and carriers</li>
                        <li>Payment processors</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">B. For Legal Reasons</h3>
                    <p className="text-gray-300 mb-6">
                        When required by law, court order, or regulation, or to protect our rights.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">C. With Your Consent</h3>
                    <p className="text-gray-300 mb-6">
                        Where you have expressly authorized such disclosure.
                    </p>
                    <p className="text-gray-300 mb-6 font-medium">
                        We do not sell your personal information for marketing purposes to unrelated third parties.
                    </p>

                    {/* Section 5 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. International Data Transfers</h2>
                    <p className="text-gray-300 mb-6">
                        As a global logistics provider, we may transfer data to countries where we operate, including countries without the same data protection laws as your home country. When we do so, we protect your information in accordance with applicable law.
                    </p>

                    {/* Section 6 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Data Retention</h2>
                    <p className="text-gray-300 mb-4">We retain personal information only as long as reasonably necessary to:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                        <li>Fulfill the purposes described</li>
                        <li>Comply with legal and regulatory requirements</li>
                        <li>Resolve disputes</li>
                        <li>Enforce our agreements</li>
                    </ul>

                    {/* Section 7 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Your Rights and Choices</h2>
                    <p className="text-gray-300 mb-4">
                        Depending on your location and applicable privacy law, you may have the right to:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                        <li>Access or request a copy of your personal data</li>
                        <li>Correct inaccurate or incomplete data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to or restrict processing</li>
                        <li>Withdraw consent where processing is based on consent</li>
                    </ul>
                    <p className="text-gray-300 mb-6">
                        To exercise rights, contact us at the address below.
                    </p>

                    {/* Section 8 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">8. Data Security</h2>
                    <p className="text-gray-300 mb-6">
                        We implement administrative, technical, and physical safeguards designed to protect personal information. However, no security system is completely secure, and we cannot guarantee absolute protection.
                    </p>

                    {/* Section 9 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">9. Third-Party Links</h2>
                    <p className="text-gray-300 mb-6">
                        Our Site may contain links to third-party websites. Those sites have their own privacy practices, and this Policy does not apply to them.
                    </p>

                    {/* Section 10 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">10. Children&apos;s Privacy</h2>
                    <p className="text-gray-300 mb-6">
                        Our Services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have, please contact us so we can delete it.
                    </p>

                    {/* Section 11 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">11. Changes to This Policy</h2>
                    <p className="text-gray-300 mb-6">
                        We may update this Privacy Policy from time to time. The updated version will be posted with a revised &quot;Last Updated&quot; date. Continued use of the Site after changes indicates acceptance.
                    </p>

                    {/* Section 12 */}
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">12. How to Contact Us</h2>
                    <p className="text-gray-300 mb-4">
                        If you have questions, concerns, or requests regarding this Privacy Policy, please contact:
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-gray-300">
                        <p className="font-semibold text-white mb-2">Advik Freight</p>
                        <p>4400 E Washington Blvd, Commerce, CA 90023, USA</p>
                        <p>Phone: <a href="tel:+18009265014" className="text-primary hover:underline">+1-800-926-5014</a></p>
                        <p>Email: <a href="mailto:info@advikfreight.com" className="text-primary hover:underline">info@advikfreight.com</a></p>
                        <p>Website: <a href="https://www.advikfreight.com" className="text-primary hover:underline">www.advikfreight.com</a></p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
