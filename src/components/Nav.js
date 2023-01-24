import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Wrapper>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Products
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        About
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  top: 10px;
  margin-bottom: 40px;
  a {
    background: var(--nav-bg-fade);
    text-decoration: none;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    transition: 0.3s ease-out;
    :hover {
      background: var(--nav-bg);
    }
  }
  a.active {
    background: var(--nav-bg);
  }
`;

export default Nav;
