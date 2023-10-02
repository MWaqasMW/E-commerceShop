
import { useState } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Baner from '../components/Baner';
import Product from '../components/Product';
import NewsLeter from '../components/NewsLeter';
import Footer from '../components/Footer';
import { sub_mobiles } from '../responsive';
import { useLocation } from 'react-router-dom';

const Container = styled.div``;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${sub_mobiles({ flexDirection: 'column-reverse' })}
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 15px;
`;

const Option = styled.option``;

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort,setSort]=useState("newest")
  const location = useLocation();
  const cat = location.pathname.split('/')[2];

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };


  return (
    <div>
      <Container>
        <Navbar />
        <Baner />
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Product:</FilterText>
            <Select name="color" onChange={handleFilter}>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select name="size" onChange={handleFilter}>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>L</Option>
              <Option>M</Option>
              <Option>S</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Product:</FilterText>
            <Select onChange={e=>setSort(e.target.value)}>
              <Option value={"newest"}>
                Newest
              </Option>
              <Option value="asc">Price asc</Option>
              <Option value="desc">Price desc</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Product cat={cat} filters={filters} sort={sort} />
        <NewsLeter />
        <Footer />
      </Container>
    </div>
  );
};

export default ProductList;
