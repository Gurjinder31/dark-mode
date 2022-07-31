import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='transition duration-500 ease-in-out rounded-full p-2'>
      <nav className='flex justify-center space-x-8 text-gray-500 dark:text-gray-400'>
        <Link to='/'>Home</Link>
        <Link to='/section'>Section</Link>

        {theme === 'dark' ? (
          <FaSun
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='text-gray-500 dark:text-gray-400 text-2xl cursor-pointer'
          />
        ) : (
          <FaMoon
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='text-gray-500 dark:text-gray-400 text-2xl cursor-pointer'
          />
        )
      </nav>
    </div>
  );
};

export default Toggle;
