import {format} from "date-fns";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="p-2">
            <div className="flex justify-center items-center flex-col mb-4">
                <h3 className="text-2xl text-gray-400">
                    Links
                </h3>
                <ul>
                    <li className="text-center">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="text-center">
                        <Link href="/about">
                            About The Project
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <p className="text-center text-sm text-balance text-gray-400">
                    &copy; {format(new Date(), "MMM yyyy")} - All Rights Reserved - <a className="text-primary-400 opacity-80 hover:opacity-100" target="_blank" href="https://github.com/NamelessProj">Da Silva Pinto Kevin</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;