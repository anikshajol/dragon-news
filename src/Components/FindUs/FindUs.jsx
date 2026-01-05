import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="mt-8">
      <h2 className="py-3 text-xl font-semibold">Find Us On</h2>
      <section className="">
        <button className="flex btn bg-white justify-start items-center gap-2 w-full">
          <FaFacebookF className="text-blue-800" />
          <span>Facebook</span>
        </button>
        <button className="flex bg-white justify-start w-full btn py-2 items-center gap-2">
          <FaTwitter className="text-blue-400" />
          <span>Twitter</span>
        </button>
        <button className="flex bg-white justify-start w-full btn items-center gap-2">
          <FaInstagram className="text-red-800" />
          <span>Instagram</span>
        </button>
      </section>
    </div>
  );
};

export default FindUs;
