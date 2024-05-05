import PropTypes from "prop-types";

const Header = ({ name }) => {
  return (
    <h1 className="text-5xl">
      Bonjour <span className="text-[#FF0101]">{name}</span>
    </h1>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
