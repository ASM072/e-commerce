export const selectCategoriesMap = (state) => {
  const categoriesMap = state.categories.categories.reduce(
    (acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return categoriesMap;
};
// export const selectCategoriesMap = ( state ) => state.categories.categories.reduce( ( accumulator, category ) =>
//     {
//         const { title, items } = category;

//         // let filteredItems = items;
//         // if ( searchTerm )
//         // {
//         //     filteredItems = items.filter( item =>
//         //         item.name.toLowerCase().includes( searchTerm.toLowerCase() )
//         //     );
//         // }

//         accumulator[ title.toLowerCase() ] = items;
//         return accumulator;
//     }, {} );