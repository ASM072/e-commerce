
import Directory from './Components/directory/directory.component';

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
   <Directory categories={categories}/>
  );
};

export default App;