'use client';
import { IoMdRocket } from 'react-icons/io';
import { Button } from './ui/button';

const ScrollToTopButton = () => {
  return (
    <button
      onClick={() =>
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }
      className="fixed bottom-8 right-8 dark:bg-blue-500 p-2 rounded-full shadow-lg dark:hover:bg-blue-600 transition-colors"
    >
      <IoMdRocket className="animate-bounce text-black dark:text-white " size={30} />
    </button>
  );
};

export default ScrollToTopButton;
