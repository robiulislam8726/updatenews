import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl text-center font-bold">Log in With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Log in With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Log in With GitHub
                </button>
            </div>
            <div className=" p-4 mb-6">
                <h2 className="text-3xl text-center font-bold mb-4">Find Us On</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center border-x " href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
             {/* ℚ Zone*/}
             <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl text-center font-bold">Q Zone</h2>
               <img src={qZone1} alt="" />
               <img src={qZone2} alt="" />
               <img src={qZone3} alt="" />
            </div>
        </div>

    );
};
export default RightSideNav;