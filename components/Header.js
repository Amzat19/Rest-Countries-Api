import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

const Header = ({ changeTheme }) => (
  <header className="py-8 shadow-md dark:bg-darkElem">
    <nav className="flex justify-between w-[88vw] m-auto">
      <div>
        <span className="font-extrabold">Where in the world?</span>
      </div>
      <div className="flex gap-2 justify-center">
        <FontAwesomeIcon icon={faMoon} className="pt-1" />
        <span
          className="font-semibold hover:cursor-pointer hover:text-gray-500 hover:scale-105"
          onClick={changeTheme}
          onKeyDown={changeTheme}
          role="button"
          tabIndex={0}
        >
          Dark Mode
        </span>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

export default Header;
