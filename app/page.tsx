
import Hero from './HomepageComponents/Hero';
import PopularCompany from './HomepageComponents/PopularCompany';
import BikeDetails from './HomepageComponents/BikeDetails';
import Test from './HomepageComponents/Test';
import Testmonials from './HomepageComponents/Testmonials';
import Status from './HomepageComponents/Status';
import Carousels from './HomepageComponents/Carousels';
import HoverCard from './HomepageComponents/HoverCard';
import AppDownload from './HomepageComponents/AppDownload';
import BrowseByStyle from './HomepageComponents/BrowseByStyle';
import AboutWebsite from './HomepageComponents/AboutWebsite';
import PopularBikeSearch from './HomepageComponents/PopularBikeSearch';
import FeaturesBike from './HomepageComponents/FeaturesBike';
import Footer from "./HomepageComponents/Footer";


const Page = () => {

  return (
    <div >
      {/* Sections will scroll smoothly but we will only animate the PopularBikeSearch on scroll */}
      <Hero />
      
      <div 
        className="py-12 w-full bg-transparent flex flex-col space-y-20 items-center justify-center"   data-scroll-section    style={{ backgroundColor: '#fff', position: 'relative',  zIndex: 50, }} >
 
      <PopularBikeSearch />
      <FeaturesBike />
      <AboutWebsite />
      <PopularCompany />
      <Status />
      <Testmonials />
      <AppDownload />
      <Footer/>
    </div>
      </div>
  );
};

export default Page;
