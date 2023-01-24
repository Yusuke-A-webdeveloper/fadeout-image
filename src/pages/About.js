import styled from 'styled-components';
import aboutImg from '../images/about.jpg';

const About = () => {
  return (
    <Wrapper>
      <div className="title">
        <h1>hi, i'm john doe</h1>
        <h2>my job title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error
          consequatur voluptate nisi laborum nobis minima consectetur numquam ut
          tenetur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam hic
          officia quos itaque alias unde dolor blanditiis facere doloremque
          tempore.
        </p>
      </div>
      <div className="img-con">
        <img src={aboutImg} alt="main" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 65vh;
  background: var(--hero-bg);
  border-radius: 20px 20px 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  .title {
    width: 50%;
    h1 {
      width: 100%;
      font-size: 45px;
      text-transform: capitalize;
      color: var(--nav-bg);
    }
    h2 {
      margin-top: 20px;
      color: var(--nav-bg);
      text-transform: capitalize;
    }
    p {
      color: #fff;
      padding: 10px 20px 10px 0;
    }
  }
  .img-con {
    position: relative;
    width: 450px;
    height: 400px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    .title {
      width: 100%;
      margin: 30px 0 20px;
    }
    .img-con {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 415px) {
    padding: 0px 25px;
    .title h1 {
      font-size: 35px;
    }
    .img-con {
      height: 290px;
    }
  }
`;

export default About;
