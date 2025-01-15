import {Link} from 'react-router-dom';
import StarSvg from '../assets/StarIcon.svg'

function Home() {
    function handleStarGitHub(){
        const githubUrl = 'https://github.com/apoorvpathak/BreezeUI'
        window.open(githubUrl, '_blank')
    }
    return ( 
<>
    <div className="max-w-4xl mx-auto my-16 text-center px-4 py-16 font-inter">
        <button className='font-inter text-white mt-4 mb-4 bg-gray-700 px-2 rounded-full'>
            <div onClick={handleStarGitHub} className='flex items-center space-x-2 '>
            <img src={StarSvg} className='h-4' alt="" /> <p>Star on GitHub ↗</p>
            </div>
        </button>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter tracking-tight">
        Build Faster with Pre-Made Components.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Designed to integrate effortlessly into your workflow—start building better interfaces today.
        </p>
        <div className='my-3 mt-8 space-x-3'>
        <Link to={'/Components'} className='text-white font-medium bg-blue-500 px-3 py-3 rounded-md hover:bg-blue-600'>Components</Link>
        <Link to={'/Docs'} className='text-white font-medium ring-1 ring-white px-3 py-3 rounded-md hover:font-normal'>Read Docs</Link>
        </div>

    </div>
</>
     );
}

export default Home;