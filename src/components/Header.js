import Link from "next/link";
import {FaGithub} from "react-icons/fa";

const Header = () => {
    return (
        <header className="p-3 flex justify-start items-center">
            <p className="text-3xl">
                <Link href="/">
                    Anime Wildcard
                </Link>
            </p>
        </header>
    );
};

export default Header;
