import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Advik Freight - Logistics Solutions",
    description: "Driven to Provide Optimal Solutions",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(inter.variable, "font-sans bg-dark text-light")}>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
