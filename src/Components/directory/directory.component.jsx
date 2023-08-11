import HomePageItem from '../homepageitem/homepageitem';
import './directory.style.scss'

const categories = [
    {
        id: 1,
        title: 'Brands',
        imageUrl: 'https://i.ibb.co/0ZWXmr7/Brands.png',
        route: 'shop/brands'
    },
    {
        id: 2,
        title: 'Accessories',
        imageUrl: 'https://i.ibb.co/w4jcdyj/Accessories.png',
        route: 'shop/accessories'
    },
    {
        id: 3,
        title: 'Men',
        imageUrl: 'https://i.ibb.co/k9krbS8/Men.png',
        route: 'shop/men'
    },
    {
        id: 4,
        title: 'Women',
        imageUrl: 'https://i.ibb.co/FDvdCfQ/Women.png',
        route: 'shop/women'
    },
    {
        id: 5,
        title: 'Kids',
        imageUrl: 'https://i.ibb.co/TRC6XBQ/Kids.png',
        route: 'shop/kids'
    }
]

const Directory = ( ) =>
{
    
    return (
        <div className="directoryContainer">
            { categories.map( ( category ) => (
                <HomePageItem key={ category.id } category={ category } />
            ) ) }
        </div>
    )
}

export default Directory