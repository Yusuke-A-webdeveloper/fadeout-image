import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';

const SharedLayout = () => {
  return (
    <>
      <section className="section-main">
        <Wrapper>
          <Outlet />
          <Nav />
        </Wrapper>
      </section>
      <Footer />
    </>
  );
};

const Wrapper = styled.main`
  position: relative;
  max-width: 1000px;
  min-height: 100%;
  margin: 100px auto 0;
  @media (max-width: 415px) {
    margin: 50px auto 0;
  }
`;

export default SharedLayout;
