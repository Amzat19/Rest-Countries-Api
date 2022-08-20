import { useTheme } from 'next-themes';
import PropTypes from 'prop-types';
import Header from './Header';

const AllPageHeader = ({ children }) => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Header changeTheme={changeTheme} />
      <div>{children}</div>
    </>
  );
};

AllPageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AllPageHeader;
