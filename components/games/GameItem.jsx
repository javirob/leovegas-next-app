import Image from 'next/image';
import { BsFillPlayFill } from 'react-icons/bs';

const GameItem = ({ item }) => {
  return (
    <li className='inline-block pr-5 pb-5'>
      <div className='flex flex-col justify-center items-center'>
        <a href={item.gamePreviewUrl} target='_blank' rel='noopener noreferrer'>
          <div className=' w-[130px] h-[90px]  sm:w-[150px] sm:h-[110px] inline-block cursor-pointer relative p-2 drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)] '>
            <Image layout='fill' style={{ borderRadius: '10%' }} className='object-cover p-2 cursor-pointer ease-in-out duration-300 hover:scale-[105%]' key={item.gameName} src={item.img} alt='/' />
            <div style={{ borderRadius: '10%' }} className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 transition-opacity text-white'>
              <p className='white-space-normal text-xs md:text-sm font-bold gap-1 flex justify-center items-center h-full text-center px-2'>
                Play <BsFillPlayFill size={20} />
              </p>
            </div>
          </div>
        </a>
        <h4 className=' text-center py-2 text-white tracking-tight text-sm md:text-base '>{item.gameName.length > 22 ? `${item.gameName.slice(0, 20)}...` : item.gameName}</h4>
      </div>
    </li>
  );
};

export default GameItem;
