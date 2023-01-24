import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Home = () => {
  const { mainImg, value } = useGlobalContext();
  const { id, img } = mainImg;

  return (
    <Wrapper>
      <div className="title">
        <h1>welcome to sample website</h1>
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor culpa
          est laborum esse at magnam temporibus nihil amet exercitationem
          architecto.
        </h4>
      </div>
      <div className="images-box">
        <div className="img-con">
          <img
            src={img}
            alt="main"
            className={id === value + 1 ? 'active' : null}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 65vh;
  background: var(--hero-bg);
  border-radius: 20px 20px 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  .title {
    width: 50%;
    h1 {
      width: 100%;
      font-size: 30px;
      text-transform: capitalize;
      color: var(--nav-bg);
    }
    h4 {
      margin-top: 20px;
      color: #fff;
    }
  }
  .images-box {
    position: relative;
    width: 450px;
    height: 400px;
  }
  .img-con {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: 0.3s ease-out;
    }
    img.active {
      opacity: 1;
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    .title {
      width: 100%;
      margin: 40px 0;
      h1 {
        text-align: center;
      }
    }
    .images-box {
      margin-bottom: 40px;
    }
  }
  @media (max-width: 415px) {
    .title h1 {
      font-size: 22px;
    }
    .images-box {
      width: 100%;
      height: 280px;
    }
  }
`;

export default Home;
