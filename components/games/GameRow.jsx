import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useRef } from 'react';
import GameItem from './GameItem';

const GameRow = ({ games }) => {
  const sliderRef = useRef();

  const slideLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className='relative flex items-center group mt-3'>
      {/* left */}
      <MdChevronLeft onClick={slideLeft} className='bg-white left-0 top-7 sm:top-10  rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
      {/* games */}
      <ul ref={sliderRef} className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {games.map((item, index) => (
          <GameItem key={index} item={item} />
        ))}
      </ul>
      {/* right */}
      <MdChevronRight onClick={slideRight} className='bg-white right-0 top-7 sm:top-10 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
    </div>
  );
};

export default GameRow;
