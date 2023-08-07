import './homepageitem.scss'

const HomePageItem = ( { category } ) => {
    const { imageUrl, title } = category;
    return (
        <div className="homePageItemContainer">
            <div className="backgroundImage" style={ {
                backgroundImage: `url(${ imageUrl })`
            } } />
            <div className="homePageBodyContainer">
                <h2>{ title }</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}
export default HomePageItem