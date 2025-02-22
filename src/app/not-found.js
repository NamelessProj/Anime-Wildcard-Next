import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex flex-col justify-center items-center">
            <div className={`grid grid-rows-[1fr_auto_1fr] md:grid-rows-1 md:grid-cols-[1fr_auto_1fr] gap-3 w-full`}>
                <div className="self-end md:self-center">
                    <h1 className="text-7xl text-center md:text-end">404</h1>
                </div>
                <div className="h-[2px] w-[min(100%-20px,240px)] md:h-full md:w-[2px] mx-auto bg-white opacity-40 rounded-full">&nbsp;</div>
                <div className="flex flex-col justify-center items-center md:items-start md:py-2 space-y-3">
                    <h2 className="text-3xl">Not Found</h2>
                    <Link href="/">
                        Go Back To Home
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;