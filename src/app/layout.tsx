import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

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
            <body className={clsx(inter.variable, "font-sans bg-background text-foreground")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    forcedTheme="light"
                    disableTransitionOnChange
                >
                    <SmoothScroll>
                        {children}
                    </SmoothScroll>
                    <FloatingCallButton />
                </ThemeProvider>
            </body>
        </html>
    );
}
