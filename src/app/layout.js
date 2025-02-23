import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Anime Wildcard",
    description: "Wanna Make Your TOP 5 Anime Without Knowing What Will Be The Next Anime?",
    icons: {
        icon: '/Logo.svg',
    },
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