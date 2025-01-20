import { Toaster, toast } from 'sonner';

function Badges() {
    function handleBadgeCopy(e){
        navigator.clipboard.writeText(e.target.outerHTML).then(()=>{
            toast.success(`${e.target.innerText} Copied Successfully`)
        })
    }

    return (
        <>
            <div className='text-white font-inter md:flex md:items-center md:justify-evenly my-8'>
                <div className="flex justify-center md:block mb-4 md:mb-0">
                    <p className='text-2xl font-medium text-gray-200 px-4 md:text-3xl md:font-bold'>Badges</p>
                </div>



                <div className='flex flex-col items-center space-y-5 md:space-y-5 md:w-[33rem] md:flex md:justify-center '>
                    <div className='space-x-8'>
                        <span onClick={handleBadgeCopy} className='bg-gray-100 px-3 py-1 text-sm font-medium text-gray-500 rounded-full'>Badge 1</span>
                        <span onClick={handleBadgeCopy} className='bg-red-100 px-3 py-1 text-sm font-medium text-red-500 rounded-full'>Badge 2</span>
                        <span onClick={handleBadgeCopy} className='bg-blue-500 px-3 py-1 text-sm font-medium text-white rounded-full '>Badge 3</span>
                    </div>
                    <div className='space-x-8'>
                        <span onClick={handleBadgeCopy} className='bg-blue-200 px-3 py-1 text-sm font-medium text-blue-500 rounded-full'>Badge 4</span>
                        <span onClick={handleBadgeCopy} className='bg-green-200 px-3 py-1 text-sm font-medium text-green-700 rounded-full'>Badge 5</span>
                        <span onClick={handleBadgeCopy} className='bg-purple-200 px-3 py-1 text-sm font-medium text-purple-700 rounded-full'>Badge 6</span>
                    </div>
                </div>
            </div>
            <Toaster/>
        </>
    );
}

export default Badges;


