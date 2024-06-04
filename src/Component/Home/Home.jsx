import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import CategorySlider from '../CategorySlider/CategorySlider';
import MainSlider from '../MainSlider/MainSlider';
import { Helmet } from 'react-helmet';






export default function Home() {


  return (
    <>
      <MainSlider/>
      <CategorySlider/>
      <FeaturedProducts/>
      <Helmet>
        <title>Fresh Cart Home</title>
      </Helmet>
    </>

  )
}
