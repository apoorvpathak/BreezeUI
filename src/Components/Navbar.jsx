function Navbar() {
    return (
        <>
            <div className="text-white font-inter m-5">
                <div className="flex space-x-2 justify-around items-center">
                    <p className="font-semibold text-2xl">Breeze UI</p>
                    <div  className="flex space-x-4 items-center md:space-x-12">
                        <p className="font-medium text-lg text-gray-300 hover:text-white hover:cursor-pointer">Docs</p>
                        <p className="font-medium text-lg text-gray-300 hover:text-white hover:cursor-pointer">Components</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;