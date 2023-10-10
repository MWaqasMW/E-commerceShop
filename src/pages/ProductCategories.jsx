
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Baner from '../components/Baner';
import MoreProduct from '../components/moreProduct';
import NewsLeter from '../components/NewsLeter';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Container = styled.div``;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;




const ProductCategories = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];

 


  return (
    <div>
      <Container>
        <Navbar />
        <Baner />
        <Title>Dresses</Title>
        <MoreProduct cat={cat}  />
        <NewsLeter />
        <Footer />
      </Container>
    </div>
  );
};

export default ProductCategories;




