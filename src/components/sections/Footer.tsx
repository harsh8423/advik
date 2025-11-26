"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-20 pb-10">
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
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-colors cursor-pointer">
                                <Facebook className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-colors cursor-pointer">
                                <Twitter className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-colors cursor-pointer">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-colors cursor-pointer">
                                <Instagram className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="space-y-4 text-muted-foreground text-sm">
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
                        <h4 className="text-foreground font-bold mb-6">Ship With Us</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {["Drayage", "Warehousing & Transloading", "Air & Expedited", "Truckload", "Intermodal", "Flatbed", "Reefer", "LTL", "Cross Border"].map((item) => (
                                <li key={item} className="hover:text-primary cursor-pointer transition-colors">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries */}
                    <div className="lg:col-span-2">
                        <h4 className="text-foreground font-bold mb-6">Industries</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {["Automotive", "Food & Beverage", "Produce", "Renewable Energy", "Retail", "Manufacturing", "Building Materials"].map((item) => (
                                <li key={item} className="hover:text-primary cursor-pointer transition-colors">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <ul className="space-y-6">
                            <li>
                                <Link href="/about" className="text-foreground font-bold hover:text-primary transition-colors cursor-pointer">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#carriers" className="text-foreground font-bold hover:text-primary transition-colors cursor-pointer">
                                    Carriers
                                </Link>
                            </li>
                            <li>
                                <Link href="#resources" className="text-foreground font-bold hover:text-primary transition-colors cursor-pointer">
                                    Resource Hub
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© 2025 Advik Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
