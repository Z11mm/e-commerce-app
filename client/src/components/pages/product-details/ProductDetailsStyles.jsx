import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90vw;
  height: 90vh;
`

export const ProductImage = styled.div`
  width: 80%;
  height: 95%;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
