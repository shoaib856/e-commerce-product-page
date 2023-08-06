import PropTypes from 'prop-types';

const NavLink = ({children}) => {
  return (
    <li>
      <a
        className="block pt-9 pb-7 max-md:py-px max-md:pl-5 max-md:font-bold md:border-b-4 border-transparent hover:border-orange-500 hover:text-orange-500"
        href="#"
      >
        {children}
      </a>
    </li>
  );
};

export default NavLink;

NavLink.propTypes = {
    children: PropTypes.node.isRequired,
}
