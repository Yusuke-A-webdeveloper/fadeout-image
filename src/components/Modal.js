import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const Modal = () => {
  const { closeModal, modalItem } = useGlobalContext();
  const { title, img, desc } = modalItem;

  return (
    <Wrapper>
      <div className="img-con">
        <img src={img} alt="main" />
      </div>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
      <button className="close-btn" onClick={closeModal}>
        <AiOutlineClose />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  .img-con {
    position: relative;
    width: 450px;
    height: 400px;
    border: 5px solid var(--nav-bg);
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
    max-width: 600px;
    margin-top: 20px;
    h2 {
      color: var(--nav-bg);
      font-size: 30px;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
      margin-bottom: 10px;
    }
    p {
      color: #fff;
    }
  }
  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    svg {
      font-size: 45px;
      color: #fff;
      transition: 0.3s ease-out;
      :hover {
        color: var(--nav-bg);
      }
    }
  }
  @media (max-width: 415px) {
    .img-con {
      width: 100%;
      height: 250px;
    }
    article p {
      padding: 0 20px;
    }
  }
  @media (max-width: 670px) and (max-height: 414px) {
    .img-con {
      width: 400px;
      height: 200px;
    }
  }
`;

export default Modal;
