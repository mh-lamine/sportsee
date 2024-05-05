import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const NavbarY = () => {
  return (
    <div className="bg-[#020203] text-white flex flex-col items-center p-4">
      <div className="space-y-3 mt-44">
        <img src={icon1} />
        <img src={icon2} />
        <img src={icon3} />
        <img src={icon4} />
      </div>
      <span className="whitespace-nowrap -rotate-90 absolute bottom-28 text-xs">
        Copiryght, SportSee 2020
      </span>
    </div>
  );
};

export default NavbarY;
