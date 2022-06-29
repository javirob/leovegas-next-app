import { getGamesData, getCategories } from '../data';
import GameList from '../components/games/GameList';
import GameSearch from '../components/games/GameSearch';
import GamesAlert from '../components/games/GamesAlert';
import { useState, useEffect } from 'react';

const SearchPage = (props) => {
  const [searchResults, setSearchResults] = useState(props.games);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', ...props.categories];

  useEffect(() => {
    if (selectedCategory == 'all') {
      setSearchResults(props.games);
      return;
    }
    setSearchResults(props.games.filter((game) => game.categories.includes(selectedCategory)));
  }, [props.games, selectedCategory]);

  const filteredResults = searchResults.filter((game) => game.gameName.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section className='w-full p-4  max-w-[780px] mx-auto '>
      <GameSearch categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <GamesAlert resultsLength={filteredResults.length} />
      <GameList games={filteredResults} />
    </section>
  );
};

export default SearchPage;

export const getStaticProps = async () => {
  const games = await getGamesData();
  const categories = await getCategories();

  return {
    props: {
      games: games,
      categories: categories,
    },
  };
};
