import PropTypes from "prop-types";

const Header = ({name}) => {

  return (
    <header>
      <h1 className="text-5xl mb-10">
        Bonjour <span className="text-[#FF0101]">{name}</span>
      </h1>
      <p className="text-lg">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
