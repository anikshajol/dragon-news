import FindUs from "../FindUs/FindUs";
import QZone from "../QZone.jsx/QZone";
import SocialLogin from "../SocialLogin/SocialLogin";

const RightAside = () => {
  return (
    <div className="ml-4">
      <SocialLogin />
      <FindUs />
      <QZone />
    </div>
  );
};

export default RightAside;
