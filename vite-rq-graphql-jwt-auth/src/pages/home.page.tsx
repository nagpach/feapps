import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
<section className="py-12 bg-white md:py-24">
    <div className="flex flex-col max-w-6xl px-10 mx-auto lg:flex-row">

        <div className="flex flex-col items-start justify-center w-full pr-10 mb-12 lg:w-1/2 lg:mb-0">
            <div className="relative">
                <p className="mb-2 text-base font-bold text-black uppercase">Magical awesomeness</p>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                    <span className="block xl:inline">Code Smarter &amp;</span>
                    <span className="block text-pink-500 xl:inline">Develop Faster</span>
                </h1>
            </div>
            <p className="my-8 text-lg text-gray-600 md:text-xl">Are you ready to see the magical awesomeness of devzcode coding platform.  Now, you can Code smarter and Develop faster, converting your skills into great jobs.</p>
            <div className="relative flex items-center pt-4 space-x-3">
                <Link to="/register" className="relative text-2xl group">
                    <span className="relative z-10 px-5 py-2 font-bold leading-tight text-black bg-white border-4 border-gray-900 rounded-lg group-hover:bg-pink-400 group-hover:text-white">Signup</span>
                    <span className="absolute top-0 right-0 w-full h-14 -mt-2.5 -mr-0.5 bg-black rounded-lg"></span>
                </Link>

                <Link to="/signup" className="relative text-2xl group">
                    <span className="relative z-10 px-5 py-2 font-bold leading-tight text-green-900 bg-green-200 border-4 border-black rounded-lg group-hover:bg-green-400 group-hover:text-white">Learn More</span>
                    <span className="absolute top-0 right-0 w-full h-14 -mt-2.5 -mr-0.5 bg-black rounded-lg"></span>
                </Link>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
            <img src="https://cdn.devdojo.com/images/december2020/greenred-animals.png"/>
        </div>
    </div>
</section>
  )
};

export default HomePage;
