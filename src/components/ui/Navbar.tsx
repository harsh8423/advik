"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Truck, Factory, Leaf, ShoppingBag, Hammer, Zap, Utensils, Ship, Plane, Box, ArrowUpRight, Map } from "lucide-react";

const navLinks = [
    { name: "Services", href: "#services", hasMegaMenu: true },
    { name: "Industries", href: "#industries", hasMegaMenu: true },
    { name: "Carriers", href: "#carriers" },
    { name: "About Us", href: "/about" },
    { name: "Resource Hub", href: "#resources" },
];

const services = [
    { name: "Drayage", icon: Ship, href: "/drayage" },
    { name: "Warehousing & Transloading", icon: Box, href: "/warehousing" },
    { name: "Air & Expedited", icon: Plane, href: "#" },
    { name: "Truckload", icon: Truck, href: "#" },
    { name: "Intermodal", icon: Factory, href: "#" },
    { name: "Flatbed", icon: Truck, href: "#" },
    { name: "Reefer", icon: Leaf, href: "#" },
    { name: "LTL", icon: Truck, href: "#" },
    { name: "Cross Border", icon: Map, href: "#" },
];

const industries = [
    { name: "Automotive", icon: Truck, href: "#" },
    { name: "Food & Beverage", icon: Utensils, href: "#" },
    { name: "Produce", icon: Leaf, href: "#" },
    { name: "Renewable Energy", icon: Zap, href: "#" },
    { name: "Retail", icon: ShoppingBag, href: "#" },
    { name: "Manufacturing", icon: Factory, href: "#" },
    { name: "Building Materials", icon: Hammer, href: "#" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const getMegaMenuContent = () => {
        if (activeMegaMenu === "Services") return services;
        if (activeMegaMenu === "Industries") return industries;
        return [];
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
                scrolled || activeMegaMenu ? "bg-dark/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
            onMouseLeave={() => setActiveMegaMenu(null)}
        >
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative w-40 h-12">
                    <Image
                        src="/logo.png"
                        alt="Advik Inc"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative h-24 flex items-center"
                            onMouseEnter={() => link.hasMegaMenu && setActiveMegaMenu(link.name)}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "text-sm font-bold uppercase tracking-wide transition-colors flex items-center gap-1",
                                    activeMegaMenu === link.name ? "text-primary" : "text-gray-300 hover:text-white"
                                )}
                            >
                                {link.name}
                                {link.hasMegaMenu && (
                                    <ChevronDown className={cn("w-4 h-4 transition-transform", activeMegaMenu === link.name ? "rotate-180" : "")} />
                                )}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <button className="px-6 py-3 bg-primary text-white text-sm font-bold rounded-md hover:bg-red-700 transition-colors shadow-lg shadow-primary/20">
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mega Menu */}
            <AnimatePresence>
                {activeMegaMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-0 right-0 pt-2"
                        onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
                        onMouseLeave={() => setActiveMegaMenu(null)}
                    >
                        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-primary/20 relative">
                            {/* Tooltip Arrow */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-primary/20" />

                            <div className="p-3 grid grid-cols-2 gap-2 relative z-10">
                                {getMegaMenuContent().map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="group flex items-center justify-between p-2 rounded-lg border border-primary/20 hover:border-primary bg-white hover:bg-primary/5 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-2">
                                            <item.icon className="w-4 h-4 text-primary" />
                                            <span className="text-dark font-bold text-xs group-hover:text-primary transition-colors">
                                                {item.name}
                                            </span>
                                        </div>
                                        <ArrowUpRight className="w-3 h-3 text-primary transition-opacity" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden bg-dark border-b border-white/10 overflow-hidden"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-300 hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="w-full py-3 bg-primary text-white font-bold rounded-lg mt-4">
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
