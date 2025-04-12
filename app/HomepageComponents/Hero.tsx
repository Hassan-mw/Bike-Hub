
import HeroData from './HeroData'
import Showlarge from './Showlarge'
// import ShowSmall from './ShowSmall'

const Hero = () => {
  return (
  <div  id="section2 " className='z-20'>
    <div className='hidden lg:block max-h-[70vh]'><Showlarge/></div>
    <div className=' lg:hidden '><HeroData/></div>
  </div>
  )
}

export default Hero