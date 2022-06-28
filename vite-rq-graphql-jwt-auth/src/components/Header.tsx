import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import graphqlRequestClient from '../clients/graphqlRequestClient';
import { useStateContext } from '../context';
import { LogoutUserQuery, useLogoutUserQuery } from '../generated/graphql';

const Header = () => {
  const stateContext = useStateContext();
  const user = stateContext.state.authUser;

  const queryClient = useQueryClient();
  const { refetch } = useLogoutUserQuery(
    graphqlRequestClient,
    {},
    {
      enabled: false,
      onSuccess(data: LogoutUserQuery) {
        queryClient.clear();
        document.location.href = '/login';
      },
      onError(error: any) {
        error.response.errors.forEach((err: any) => {
          toast(err.message, {
            type: 'error',
            position: 'top-right',
          });
          queryClient.clear();
          document.location.href = '/login';
        });
      },
    }
  );

  const handleLogout = () => {
    refetch();
  };

  return (
    <section className="relative py-2 bg-yellow-200">
    <div className="flex items-center justify-between h-20 px-8 mx-auto max-w-7xl">

        <a href="#_" className="relative z-10 flex items-center w-auto text-2xl font-black leading-none text-gray-900 select-none">DevzCode</a>

        <nav className="items-center justify-center hidden space-x-5 text-gray-200 md:flex lg:space-x-8">
            <Link to='/' className="relative inline-block px-1 text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900">
                <span className="block">Home</span>
                <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                    <span  className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-yellow-200"></span>
                    <svg className="w-auto h-full text-gray-900 fill-current" viewBox="0 0 84 6" ><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-8)" fill-rule="nonzero"><path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path></g></g></svg>
                </span>
            </Link>

            {user && (
            <>
              <Link to="/profile"   className="relative inline-block px-1 text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900">
                <span className="block">Profile</span>
                <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                    <span  className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-yellow-200" ></span>
                    <svg className="w-auto h-full text-gray-900 fill-current" viewBox="0 0 84 6" ><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-8)" fill-rule="nonzero"><path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path></g></g></svg>
                </span>
              </Link>

              <Link to="/cpost"   className="relative inline-block px-1 text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900">
                <span className="block">Create Post</span>
                <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                    <span  className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-yellow-200" ></span>
                    <svg className="w-auto h-full text-gray-900 fill-current" viewBox="0 0 84 6" ><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-8)" fill-rule="nonzero"><path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path></g></g></svg>
                </span>
              </Link>

              <Link to="/logout"  onClick={handleLogout} className="relative inline-block px-1 text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900">
                <span className="block">Logout</span>
                <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                    <span  className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-yellow-200" ></span>
                    <svg className="w-auto h-full text-gray-900 fill-current" viewBox="0 0 84 6" ><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-8)" fill-rule="nonzero"><path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path></g></g></svg>
                </span>
              </Link>
            </>
          )}
          {!user && (
             <>

            <div className="w-0 h-5 border border-r border-yellow-500 opacity-25"></div>
            <Link to="/login"   className="relative inline-block px-0.5 text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900">
                <span className="block">Login</span>
                <span className="absolute bottom-0 left-0 inline-block w-full h-2 -mb-2 overflow-hidden">
                    <span className="absolute inset-0 inline-block w-full h-full transform translate-x-0 bg-yellow-200"  ></span>
                    <svg className="w-auto h-full text-gray-900 fill-current" viewBox="0 0 84 6" ><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-8)" fill-rule="nonzero"><path d="M90.3.9c-1.8 0-2.8.7-3.6 1.4-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9s-1.7-.4-2.4-.9c-.8-.6-1.8-1.4-3.6-1.4s-2.8.7-3.6 1.4c-.7.5-1.2.9-2.4.9-1.1 0-1.7-.4-2.4-.9-.8-.6-1.9 1-1.2 1.5.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9 1.1 0 1.7.4 2.4.9.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9s1.7.4 2.4.9c.8.6 1.8 1.4 3.6 1.4s2.8-.7 3.6-1.4c.7-.5 1.2-.9 2.4-.9.6 0 1-.4 1-1s-.5-1-1-1z"></path></g></g></svg>
                </span>
            </Link>

            <Link to="/register" className="relative h-6 group">
                <span className="relative z-10 px-5 py-2 font-bold leading-tight text-black bg-white border-4 border-gray-900 rounded-lg group-hover:bg-yellow-100">Signup</span>
                <span className="absolute top-0 right-0 w-full h-10 -mr-1 bg-black rounded-lg"></span>
            </Link>

          </>
          )}

        </nav>

     
        <div className="flex items-center justify-center h-full text-black md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
        </div>

    </div>
</section>
  );
};

export default Header;

/*
<header className='bg-white h-20'>
      <nav className='h-full flex justify-between container items-center'>
        <div>
          <Link to='/' className='text-ct-dark-600 text-2xl font-semibold'>
            Ref Apps
          </Link>
        </div>
        <ul className='flex items-center gap-4'>
          <li>
            <Link to='/' className='text-ct-dark-600'>
              Home
            </Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to='/register' className='text-ct-dark-600'>
                  SignUp
                </Link>
              </li>
              <li>
                <Link to='/login' className='text-ct-dark-600'>
                  Login
                </Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <Link to='/profile' className='text-ct-dark-600'>
                  Profile
                </Link>
              </li>
              <li className='cursor-pointer'>Create Post</li>
              <li className='cursor-pointer' onClick={handleLogout}>
                Logout
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
    */






