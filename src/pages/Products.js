import styled from 'styled-components';
import Modal from '../components/Modal';
import { useGlobalContext } from '../context';
import { productList } from '../data';

const Products = () => {
  const { modalOpen, openModal } = useGlobalContext();

  return (
    <Wrapper>
      <header>
        <h1>product list</h1>
      </header>
      <main className="products">
        {productList.map((product) => {
          const { id, img, title } = product;

          return (
            <div className="single-product" key={id}>
              <button type="button" onClick={() => openModal(id)}>
                <img src={img} alt={title} />
              </button>
            </div>
          );
        })}
      </main>
      {modalOpen && <Modal />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  background: var(--hero-bg);
  border-radius: 20px 20px 0 0;
  width: 100%;
  padding-bottom: 40px;
  header {
    text-align: center;
    padding: 20px;
    h1 {
      color: var(--nav-bg);
      font-size: 50px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  .products {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    .single-product {
      position: relative;
      width: 300px;
      height: 200px;
      button {
        cursor: pointer;
        transition: 0.3s ease-out;
        :hover {
          opacity: 0.7;
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export default Products;
