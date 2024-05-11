import PropTypes from "prop-types";

const CountCard = ({ title, count, icon }) => {
  return (
    <div className="flex items-center bg-[#FBFBFB]">
      <img src={icon} alt="count-icon" className="h-2/3 px-6" />
      <div>
        <span className="font-bold text-xl">{count}</span>
        <h3 className="font-medium text-sm text-[#74798C]">{title}</h3>
      </div>
    </div>
  );
};

CountCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default CountCard;
