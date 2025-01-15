import Navbar from '../../Components/Navbar'
function DocsPage() {
    function sendToGitHub() {
        const githubUrl = 'https://github.com/apoorvpathak/BreezeUI'
        window.open(githubUrl, '_blank')
    }
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-1 flex items-center justify-center">
                    <div className='flex flex-col items-center space-y-4'>
                        <p className='text-white font-inter'>
                            This project is still underdevelopment. If you'd like to contribute, please headover to the github repo
                        </p>
                        <button onClick={sendToGitHub} className='text-white font-medium ring-1 ring-white px-6 py-2 rounded-md hover:font-normal hover:bg-white hover:text-black transition-colors duration-200'>
                            GitHub
                        </button>
                    </div>
                </main>
            </div>
        </>
    );
}

export default DocsPage;