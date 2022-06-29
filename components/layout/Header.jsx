import Link from 'next/link';

const Header = () => {
  return (
    <header className='h-[80px] w-full bg-gradient-to-r from-gray-800 to-black flex justify-center items-center border-b'>
      <div className='max-w-[780px] mx-auto flex items-center justify-between p-4 w-full'>
        <h1 className='text-white text-2xl font-bold cursor-pointer tracking-widest'>
          <Link href='/'>LeoVegas</Link>
        </h1>
        <nav>
          <Link href='/'>
            <a className='pr-6  lg:pr-8 text-white tracking-wide text-md font-medium hover:opacity-80'>Home</a>
          </Link>
          <Link href='/search'>
            <a className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black  px-4 py-2 rounded cursor-pointer tracking-wide text-md font-medium hover:opacity-90  '>Search</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
