"use client";

import { Phone } from "lucide-react";

export default function FloatingCallButton() {
    return (
        <a
            href="tel:+18009265014"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 group"
            aria-label="Call Advik Freight"
        >
            <Phone className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:animate-pulse" />
        </a>
    );
}
