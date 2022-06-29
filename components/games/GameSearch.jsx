const GameSearch = (props) => {
  const { categories, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = props;
  return (
    <div className='border flex flex-col justify-center items-center w-full  mx-auto mt-4 rounded-md h-[150px] lg:h-[200px]  bg-gradient-to-r from-rose-400  to-violet-600 mb-6'>
      <h1 className='text-4xl lg:text-5xl font-bold tracking-wide capitalize text-white mb-5'>Search Games</h1>
      <div className='max-w-[90%]  md:max-w-[90%] mx-auto flex justify-center gap-2 rounded-md'>
        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type='search' placeholder='Search by title' className='w-[70%] p-2 rounded-md text-sm md:text-md' />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className='p-1 rounded-md capitalize text-xs md:text-md'>
          {categories.map((category) => (
            <option key={category} className='p-1 capitalize text-xs md:text-md'>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default GameSearch;
