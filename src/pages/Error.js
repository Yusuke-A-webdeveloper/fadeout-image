import styled from 'styled-components';
import errorImg from '../images/error.svg';

const Error = () => {
  return (
    <Wrapper>
      <div className="img-con">
        <img src={errorImg} alt="error" />
      </div>
      <article>
        <h2>sorry, no page found</h2>
      </article>
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
  flex-direction: column;
  padding: 0 50px;
  .img-con {
    position: relative;
    width: 400px;
    height: 300px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  article {
    margin-top: 30px;
    h2 {
      color: var(--nav-bg);
      text-transform: capitalize;
      font-size: 30px;
    }
  }
`;

export default Error;
