import Buttons from '../../Components/Buttons';
import Navbar from '../../Components/Navbar';
function ComponentsPage() {
    return (
        <>
            <Navbar />
            <div className='flex justify-center mt-24'>
                <p className='text-white font-inter font-bold  text-center max-w-md text-2xl md:max-w-lg md:text-4xl'> Choose from the following wide varieties of Components.  </p>
            </div>
            <Buttons/>
        </>
    );
}

export default ComponentsPage;