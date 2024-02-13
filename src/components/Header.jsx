 import logo from '../assets/logo.png';
export default function Header(props) {
  const { darkMode, darkModeSetting } = props;

  const styles = {
    backgroundColor: darkMode ? "#111119" : "#672280"
  }
  return (
    <header className={`header`} style={styles}>
      <img src={logo} alt="troll-face" className="header-image" />
      <div>
        <h4 className="header-project">React Course Project 3</h4>
        <button className="header-button" onClick={darkModeSetting}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

import PropTypes from "prop-types";

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  darkModeSetting: PropTypes.func.isRequired,
};
