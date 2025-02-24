const Page = () => {
    return (
        <main className="flex justify-center  items-center p-4">
            <div className="card bg-gray-800 p-6 rounded-xl w-[min(100%,600px)]">
                <h1 className="text-4xl text-gray-500">
                    About The Project
                </h1>
                <p className="mt-4">
                    After seeing the trend on social media, I decided to create the same project using Next.js, React.js and Tailwind CSS.
                </p>
                <p className="mt-4">
                    The project will be updated with new features and improvements. You can also contribute to the project by creating a pull request on GitHub.
                </p>
            </div>
        </main>
    );
};

export default Page;