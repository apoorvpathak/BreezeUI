import { Toaster, toast } from 'sonner';

function Buttons() {
    function handleButtonCopy(e){
        navigator.clipboard.writeText(e.target.outerHTML).then(()=>{
            toast.success(`${e.target.innerText} Copied Successfully`)
        })
    }
    return (
        <>
            <div className='text-white font-inter mt-12 md:flex md:items-center md:justify-evenly'>

                <div className="flex justify-center md:block mb-4">
                    
                <p className='text-2xl font-medium text-gray-200 px-4 md:text-3xl md:font-bold'>Buttons</p>
                </div>



                <div className='space-y-4 flex flex-col items-center'>
                    <div className='md:flex space-y-4 md:space-y-0 gap-x-4'>
                        <div  className='w-64 h-32 bg-gray-200 flex items-center justify-center'>
                            <div>
                                <button onClick={handleButtonCopy} className='bg-blue-500 px-6 font-medium text-white py-2 rounded-md hover:bg-blue-600 hover:font-normal'>Button 1</button>
                            </div>
                        </div>
                        <div  className='w-64 h-32 bg-gray-200 flex items-center justify-center'>
                            <div>
                                <button onClick={handleButtonCopy} className='bg-purple-500 text-white px-6 font-medium py-2 rounded-md hover:bg-purple-600 hover:font-normal'>Button 2</button>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex space-y-4 md:space-y-0 gap-x-4'>
                        <div  className='w-64 h-32 bg-gray-200 flex items-center justify-center'>
                            <div>
                                <button onClick={handleButtonCopy} className='text-black font-medium ring-1 ring-black px-6 py-2 rounded-md hover:font-normal hover:bg-black hover:text-white'>Button 3</button>
                            </div>
                        </div>
                        <div  className='w-64 h-32 bg-gray-950 flex items-center justify-center'>
                            <div>
                                <button onClick={handleButtonCopy} className='text-white font-medium ring-1 ring-white px-6 py-2 rounded-md hover:font-normal hover:bg-white hover:text-black'>Button 4</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Toaster />
        </>
    );
}

export default Buttons;