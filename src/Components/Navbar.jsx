import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="text-white font-inter m-5">
                <div className="flex space-x-2 justify-around items-center">
                    <Link to={'/'} className="font-semibold text-2xl">Breeze UI</Link>
                    <div  className="flex space-x-4 items-center md:space-x-12">
                        <Link to={'/Docs'} className="font-medium text-lg text-gray-300 hover:text-white hover:cursor-pointer">Docs</Link>
                        <Link to={'/Components'} className="font-medium text-lg text-gray-300 hover:text-white hover:cursor-pointer">Components</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;