import './categories.style.scss';

const App = () =>
{
  const categories = [
    {
      id: 1,
      title: 'Brands',
      imageUrl: 'https://i.ibb.co/0ZWXmr7/Brands.png'
    },
    {
      id: 2,
      title: 'Accessories',
      imageUrl: 'https://i.ibb.co/w4jcdyj/Accessories.png'
    },
    {
      id: 3,
      title: 'Men',
      imageUrl: 'https://i.ibb.co/k9krbS8/Men.png'
    },
    {
      id: 4,
      title: 'Women',
      imageUrl: 'https://i.ibb.co/FDvdCfQ/Women.png'
    },
    {
      id: 5,
      title: 'Kids',
      imageUrl: 'https://i.ibb.co/TRC6XBQ/Kids.png'
    }
  ]
  return (
    <div className="categoriesContainer">
      { categories.map( ( { title, id, imageUrl } ) => (
        <div key={ id } className="categoryContainer">
          <div className="backgroundImage" style={ {
            backgroundImage: `url(${ imageUrl })`
          } }/>
          <div className="categoryBodyContainer">
            <h2>{ title }</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;