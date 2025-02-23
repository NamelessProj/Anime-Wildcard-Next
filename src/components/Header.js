import Link from "next/link";
import {FaGithub} from "react-icons/fa";

const Header = () => {
    return (
        <header className="p-3 flex justify-between items-center">
            <p className="text-3xl">
                <Link href="/">
                    Anime Wildcard
                </Link>
            </p>

            <a href="https://github.com/NamelessProj/Anime-Wildcard-Next" target="_blank">
                <FaGithub size={27} color="white" />
            </a>
        </header>
    );
};

export default Header;