import "rc-tooltip/assets/bootstrap.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Analytics} from "@vercel/analytics/next";

export const metadata = {
    title: "Anime Wildcard",
    description: "You love anime and want to make a top 6 list, but you don't know what to watch next? Let Anime Wildcard help you!",
    applicationName: "Anime Wildcard",
    icons: {
        icon: '/Logo.png',
        shortcut: '/Logo.ico',
        apple: '/apple-icon.png',
    },
    openGraph: {
        title: "Anime Wildcard",
        description: "Wanna Make Your TOP 6 Anime Without Knowing What Will Be The Next Anime? Let Anime Wildcard Help You!",
        type: 'website',
        locale: 'en_US',
        url: "https://anime-wildcard.vercel.app/",
        site_name: "Anime Wildcard",
        images: [
            {
                url: "/apple-icon.png",
                alt: "Anime Wildcard",
            },
        ],
    },
    manifest: '/manifest.json',
};

export default function RootLayout({children}){
    return(
        <html lang="en">
        <body>
        <div className="App grid grid-rows-layout min-h-svh">
            <Header />
            {children}
            <Footer />
            <Analytics />
        </div>
        </body>
        </html>
    );
}