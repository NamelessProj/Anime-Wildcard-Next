import "rc-tooltip/assets/bootstrap.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Anime Wildcard",
    description: "Wanna Make Your TOP 6 Anime Without Knowing What Will Be The Next Anime?",
    applicationName: "Anime Wildcard",
    icons: {
        icon: '/Logo.svg',
        shortcut: '/Logo.svg',
        apple: '/apple-icon.png',
    },
    openGraph: {
        title: "Anime Wildcard",
        description: "Wanna Make Your TOP 6 Anime Without Knowing What Will Be The Next Anime?",
        type: 'website',
        locale: 'en_US',
        url: "https://anime-wildcard.vercel.app/",
        site_name: "Anime Wildcard",
        images: [
            {
                url: "/Logo.svg",
            },
        ],
    },
    manifest: 'https://anime-wildcard.vercel.app/manifest.json',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <div className="App grid grid-rows-layout min-h-svh">
            <Header/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    );
}