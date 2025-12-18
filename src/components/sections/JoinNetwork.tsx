"use client";

import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";


export default function JoinNetwork() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const serviceId = EMAILJS_CONFIG.SERVICE_ID;
    const templateId = EMAILJS_CONFIG.TEMPLATE_ID;
    const publicKey = EMAILJS_CONFIG.PUBLIC_KEY;

    console.log(serviceId, templateId, publicKey);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS environment variables are missing.', { serviceId, templateId, publicKey });
            setStatus({ type: 'error', message: 'Configuration error. Please check console.' });
            setLoading(false);
            return;
        }

        if (form.current) {
            emailjs.sendForm(
                serviceId,
                templateId,
                form.current,
                publicKey
            )
                .then((result) => {
                    setLoading(false);
                    setStatus({ type: 'success', message: 'Message sent successfully!' });
                    form.current?.reset();
                }, (error) => {
                    setLoading(false);
                    setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
                    console.error('EmailJS Error:', error);
                });
        }
    };

    return (
        <section className="pt-8 md:pt-16 pb-16 md:pb-24 bg-black relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-50">
                <Image
                    src="/background.webp"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority={false}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                <div className="lg:w-1/2">
                    {/* <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Join Our Network <br />
                        <span className="text-primary">of Carriers</span>
                    </motion.h2> */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg mb-8"
                    >
                        Partner with a logistics leader that values your contribution. We offer consistent loads, quick payments, and a supportive technology platform.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                <ArrowRight className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Consistent Volume</h4>
                                <p className="text-sm text-gray-500">Access to thousands of loads daily</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                <ArrowRight className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Quick Payment</h4>
                                <p className="text-sm text-gray-500">Industry-leading payment terms</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="lg:w-1/2 w-full relative">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                        {status && (
                            <div className={`mb-4 p-3 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                {status.message}
                            </div>
                        )}
                        <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="full_name"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                    placeholder="Tell us about your fleet and lanes..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 group mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
