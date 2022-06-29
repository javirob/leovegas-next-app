import { getGamesPerCategory, getCategorySlugs } from '../data';
import GameList from '../components/games/GameList';
import Link from 'next/link';

const CategoryPage = ({ gamesData }) => {
  return (
    <section className='w-full p-4  max-w-[780px] mx-auto '>
      <h2 className='border text-4xl lg:text-5xl font-bold tracking-wide capitalize flex justify-center items-center w-full  mx-auto mt-4 rounded-md h-[150px] lg:h-[200px] text-white bg-gradient-to-r from-blue-400  to-violet-600 mb-6'>
        {gamesData.category}
      </h2>
      <Link href='/'>
        <a className='text-white  bg-gradient-to-r from-pink-600 to-purple-600  rounded-md text-sm font-semibold px-3 py-2 hover:opacity-80'>Back Home</a>
      </Link>
      <GameList games={gamesData.games} />
    </section>
  );
};

export default CategoryPage;

export const getStaticProps = async (context) => {
  const category = context.params.category;
  const games = await getGamesPerCategory(category);

  return {
    props: {
      gamesData: games,
    },
  };
};

export const getStaticPaths = async () => {
  const categorySlugs = await getCategorySlugs();
  const allPaths = categorySlugs.map((item) => ({ params: { category: item } }));

  console.log(allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
};
