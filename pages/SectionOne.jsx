import Image from 'next/image';
import Navbar from './Navbar';
const SectionOne = () => {
    return (
        <>
        <div className="section_One" id='section_One'>
        <Navbar/>
    <div className='hero_section'>
        <div className="hero_title"><p>Discover</p><p>Digital Art and </p>
        <p>Collect NFTs.</p></div>
        <div className="hero_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit deleniti nesciunt numquam? Iste optio dicta nam dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit.  </div>
        <div className="hero_btns">
            <div className="btn get_started"><button>Get Started</button></div>
            <div className="btn learn_more"><button>Learn More</button></div>
        </div>
    </div>
        <div className='hero_img'>
        <Image src='/house.svg' width={800}height={800}/>
        </div>
        </div>
        </>
  )
}

export default SectionOne;