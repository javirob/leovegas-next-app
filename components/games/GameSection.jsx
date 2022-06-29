import GameRow from './GameRow';
import Link from 'next/link';
import slugify from 'react-slugify';

const GameSection = ({ category, games }) => {
  const slug = slugify(category);

  return (
    <section className='my-8'>
      <h2 className='mb-4 capitalize tracking-wide  font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-80 text-white inline-block  rounded-sm'>
        <Link href={`/category/${slug}`}>
          <a className='px-2 py-1 inline-block text-sm'>{`${category} (${games.length})`}</a>
        </Link>
      </h2>
      <GameRow games={games} />
    </section>
  );
};

export default GameSection;
