"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                    {/* Brand - takes up left side */}
                    <div className="lg:col-span-3">
                        <Link href="/" className="block relative w-60 h-20 mb-6">
                            <Image
                                src="/logo.png"
                                alt="Advik Inc"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <div className="flex gap-4 mb-8">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white text-gray-400 transition-colors cursor-pointer">
                                <Facebook className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white text-gray-400 transition-colors cursor-pointer">
                                <Twitter className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white text-gray-400 transition-colors cursor-pointer">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white text-gray-400 transition-colors cursor-pointer">
                                <Instagram className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>125 S Wacker Dr,<br />Chicago, IL - 60606</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>1 (855) 779-2378</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>Fax: (323) 544-0726</span>
                            </div>
                        </div>
                    </div>

                    {/* Empty spacer to push columns right */}
                    <div className="hidden lg:block lg:col-span-3"></div>

                    {/* Ship With Us */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6">Ship With Us</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {[
                                { name: "Drayage", href: "/drayage" },
                                { name: "FTL & LTL", href: "/ftl-ltl" },
                                { name: "Flatbed", href: "/flatbed" },
                                { name: "Intermodal", href: "/intermodal" },
                                { name: "OTR", href: "/otr" },
                                { name: "Power-Only", href: "/power-only" },
                                { name: "Reefer", href: "/reefer" },
                                { name: "Warehousing", href: "/warehousing" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-primary cursor-pointer transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6">Industries</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {[
                                { name: "Automotive", href: "/automotive" },
                                { name: "Retail", href: "/retail" },
                                { name: "Food & Beverage", href: "/food-beverage" },
                                { name: "Manufacturing", href: "/manufacturing" },
                                { name: "Produce", href: "/produce" },
                                { name: "Building Materials", href: "/building-materials" },
                                { name: "Renewable Energy", href: "/renewable-energy" },
                                { name: "Electronics", href: "/electronics" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-primary cursor-pointer transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <ul className="space-y-6">
                            <li>
                                <Link href="/about" className="text-white font-bold hover:text-primary transition-colors cursor-pointer">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#carriers" className="text-white font-bold hover:text-primary transition-colors cursor-pointer">
                                    Carriers
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-white font-bold hover:text-primary transition-colors cursor-pointer">
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© 2025 Advik Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
