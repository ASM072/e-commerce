import {HomePageBodyContainer, HomePageItemContainer, BackgroundImage} from './homepageitemstyle.jsx'

const HomePageItem = ( { category } ) => {
    const { imageUrl, title } = category;
    return (
        <HomePageItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <HomePageBodyContainer>
                <h2>{ title }</h2>
                <p>Shop Now</p>
            </HomePageBodyContainer>
        </HomePageItemContainer>
    )
}
export default HomePageItem