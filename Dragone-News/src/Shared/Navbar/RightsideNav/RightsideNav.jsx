import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qzone1 from '../../../../assets/qZone1.png'
import qzone2 from '../../../../assets/qZone2.png'
import qzone3 from '../../../../assets/qZone3.png'
const RightsideNav = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline w-full mt-3">
          <FaGoogle /> Google
        </button>
        <button className="btn btn-outline w-full mt-3">
          <FaGithub />
          Github
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-2xl">Find Us On</h2>
        <a
          className="p-4 mt-2 flex items-center border rounded-t-lg text-lg"
          href=""
        >
          <FaFacebook />
          Facebook
        </a>
        <a
          className="p-4 mt-2 flex items-center border rounded-t-lg text-lg"
          href="">
          <FaTwitter />
          Twitter
        </a>

       
      </div>


      <div className="p-4">
        <h2 className="text-2xl">Q-Zone</h2>
        
         <img src={qzone1} alt="" />
         <img src={qzone2} alt="" />
         <img src={qzone3} alt="" />
       
      </div>
    </div>
  );
};

export default RightsideNav;
