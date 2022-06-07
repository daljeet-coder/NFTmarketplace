import React from "react";

const SectionTwo = () => {
  return (
    <div className="section_two">
      <div className="glass_container">
        <div className="glass_container_main">
          <div className="art_work_details">
            <div className="art_work_details_first">
              <div className="art">Artwork</div>
              <div className="artCount">27K+</div>
            </div>
            <div className="art_work_details_second">
              <div className="art">Auction</div>
              <div className="artCount">20K+</div>
            </div>
            <div className="art_work_details_third">
              <div className="art">Artists</div>
              <div className="artCount">2K+</div>
            </div>
          </div>
          <div className="art_work_detail">
            <div className="art_work">
              Art <span className="art_work_bold">3.4ETH</span>
            </div>
            <div className="circles_div">
              <div className="circle_one circle"></div>
              <div className="circle_two circle"></div>
              <div className="circle_three circle"></div>
              <div className="circle_four circle"></div>
              <div className="circle_five circle"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="secTwo_hero_section">
        <div className="secTwo_hero_imgs">
            <div className="secTwo_imgbox1">
          <div className="secTwo_img box1"></div>
          <div className="secTwo_img box2"></div>
            </div>
            <div className="secTwo_imgbox2">
          <div className="secTwo_img box3"></div>
          <div className="secTwo_img box4"></div>
            </div>
        </div>
        <div className="sectwo_hero_content">
          <p className="sectwo_hero_content_pp">Popular Plans</p>
          <div className="sectwo_hero_content_title">
            <p>Hot Trending</p>
            <p>On This</p>
            <p>Week</p>
          </div>
          <p className="sectwo_hero_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quam at vel eum repudiandae doloribus, totam fuga officia tenetur,
          </p>
          <div className="sectwo_hero_btn">
            <button>{`See All `}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
