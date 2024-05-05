import PropTypes from "prop-types";

const CountCard = ({ category, count }) => {
  return <div>CountCard</div>;
};

CountCard.propTypes = {
  category: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default CountCard;
