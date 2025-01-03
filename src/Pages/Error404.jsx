import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
function Error404() {
    return (
        <>
<div className="flex flex-col min-h-screen">
    <Navbar/>
    <div className="flex-1 flex justify-center items-center">
        <div className="text-white font-inter space-y-5 justify-items-center">
            <p className="text-2xl mb-6">Looks Like you are lost!</p>
            <Link to={'/'} className="outline outline-white mt-4 p-1 outline-1 rounded-sm">Go To Home</Link>
        </div>
    </div>
</div>
        </>
    );
}

export default Error404;