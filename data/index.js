import slugify from 'react-slugify';

const url = 'https://www.mocky.io/v2/5da99f9f31000036004e0a4e';

// Get games data and add an img
export const getGamesData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const transformedData = data.map((item, index) => {
    const imageUrl = `https://picsum.photos/200/300?random=${index}.webp`;

    return { ...item, img: imageUrl };
  });

  return transformedData;
};

// Get categories from data
export const getCategories = async () => {
  const data = await getGamesData();
  let categories = [];
  data.forEach((item) => {
    categories.push(...item.categories);
  });

  categories = [...new Set(categories)];

  return categories;
};

// get all categories as slugs
export const getCategorySlugs = async () => {
  const categories = await getCategories();
  let categorySlugs = [];
  categories.forEach((item) => {
    categorySlugs.push(slugify(item));
  });

  return categorySlugs;
};

// Get all games for each categorie
export const getGamesAndCategories = async () => {
  const data = await getGamesData();
  const categories = await getCategories(data);

  let gamesAray = [];
  categories.forEach((cat) => {
    gamesAray.push({
      category: cat,

      games: data.filter((game) => game.categories.includes(cat)),
    });
  });

  return gamesAray;
};

// Get all games for 1 category
export const getGamesPerCategory = async (category) => {
  const data = await getGamesAndCategories();
  const gamesPerCategory = data.find((item) => slugify(item.category) === category);

  return gamesPerCategory;
};
