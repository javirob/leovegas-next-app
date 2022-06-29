import { getGamesAndCategories } from '../data';
import GameSection from '../components/games/GameSection';

const HomePage = ({ gamesData }) => {
  return (
    <section className='w-full p-4  max-w-[780px] mx-auto '>
      {gamesData.map((item, index) => (
        <GameSection key={index} {...item} />
      ))}
    </section>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const gamesPerCategory = await getGamesAndCategories();

  return {
    props: {
      gamesData: gamesPerCategory,
    },
  };
};
