import GameItem from './GameItem';

const GameList = ({ games }) => {
  return (
    <div className='flex flex-wrap justify-center  sm:justify-between mt-8'>
      {games.map((item, index) => (
        <GameItem key={index} item={item} />
      ))}
    </div>
  );
};

export default GameList;
