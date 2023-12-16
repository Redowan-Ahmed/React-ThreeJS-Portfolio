import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="max-container select-none">
            <div className="flex flex-col justify-center items-center align-middle h-[60vh] gap-8">
                <h1 className="text-white text-4xl font-bold text-center">Page Not Found</h1>
                <Link to="/">
                    <button className="border py-2 px-3 rounded-lg bg-black-500 text-white border-gray-700 ">Go Back Home</button>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound