import {format} from "date-fns";

const Footer = () => {
    return (
        <footer className="p-2">
            <div>
                <p className="text-center text-sm text-balance text-gray-400">
                    &copy; {format(new Date(), "MMM yyyy")} - All Rights Reserved - <a className="text-primary-400 opacity-80 hover:opacity-100" target="_blank" href="https://github.com/NamelessProj">Da Silva Pinto Kevin</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;