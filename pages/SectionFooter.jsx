import Image from 'next/image'
const SectionFooter = () => {
  return (
    <div className="footer_section">
      <div className="footer_heroSec">
        <div className="footer_title">
          <p>Subscribe To get Fresh</p> <p>News Update about </p> <p>NFTs.</p>
        </div>
        <div className="footer_subscribe_btn">
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer_container">
        <div className="footer_content_one">
          <a href='#section_One' className="footer_logo footer_content">
            <Image  style={{'cursor':'pointer'}} src='/Logo.png' layout='fill' />
          </a>
          <p className="footer_logo_desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            eos commodi quis, pariatur quia
          </p>
        </div>
        <div className="footer_content_two footer_box">
          <div className="footer_explore footer_content">Explore</div>
          <ul className="footer_explore_list footer_list">
            <li>Art</li>
            <li>Collectibels</li>
            <li>Domain Name</li>
            <li>utility</li>
          </ul>
        </div>
        <div className="footer_content_three footer_box">
          <div className="footer_static footer_content">Static</div>
          <ul className="footer_static_list footer_list">
            <li>Ranking</li>
            <li>Activity</li>
          </ul>
        </div>
        <div className="footer_content_four footer_box">
          <div className="footer_resource footer_content">Resource</div>
          <ul className="footer_resorce_list footer_list">
            <li>Help Center</li>
            <li>Plateform Status</li>
            <li>Parterners</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer_content_five footer_box">
          <div className="footer_company footer_content">Company</div>
          <ul className="footer_company_list footer_list">
            <li>About Us</li>
            <li>Career</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionFooter;
