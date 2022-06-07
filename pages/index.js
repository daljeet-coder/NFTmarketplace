import React from 'react';
import Image from 'next/image';
import SectionThree from './SectionThree';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionFooter from './SectionFooter';

const index = () => {
  return (
    <div className='main_div'>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFooter/>
    </div>
  )
}
export default index;