import Badges from '../../Components/Badges';
import Buttons from '../../Components/Buttons';
import Navbar from '../../Components/Navbar';
function ComponentsPage() {
    return (
        <>
            <Navbar />
            <div className='flex-col items-center flex space-y-4 mt-24'>
                <p className='text-white font-inter font-bold  text-center max-w-md text-2xl md:max-w-lg md:text-4xl'> Choose from the following wide varieties of Components.  </p>
                <p className='text-white font-inter'>Click on the component to copy code.</p>
            </div>
            <Buttons/>
            <Badges/>
        </>
    );
}

export default ComponentsPage;