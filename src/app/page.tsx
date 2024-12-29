import Calculator from "$/components/Calculator";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-300">
            <div className="w-full max-w-md space-y-6 mt-[5rem]">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-500">Pwrlift - Plate Calculator</h1>
                    <p className="text-sm text-gray-600">
                        Enter your target weight to calculate plate configuration
                    </p>
                </div>
                <Calculator />
            </div>
            <footer className="flex mt-auto">
                <p className="text-gray-500">Made by <a className="text-blue-500" href="https://github.com/gogi1337">@gogi1337</a>, source on <a className="text-blue-500" href="https://github.com/gogi1337/pwrlift">GitHub</a></p>
            </footer>
        </div>
    );
}
