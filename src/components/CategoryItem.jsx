
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Info = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  background-color: #a08152;
  color: #fff;
  outline: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`


const CategoryItem = ({ item }) => {
  const categoryPath = `/products/${item && item.cat}`;



  return (
    <div>
      <Container data-aos="fade-up">
        <Link to={categoryPath}>
          <Image src={item && item.img} />
          <Info>
            <Title>{item && item.title}</Title>
            <Button>Shop Now</Button>
          </Info>
        </Link>
      </Container>
    </div>
  );
};


export default CategoryItem;

