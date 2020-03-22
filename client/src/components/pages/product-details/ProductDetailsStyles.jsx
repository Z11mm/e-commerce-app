import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100vw;
  height: 90vh;
`

export const ProductImage = styled.div`
  width: 80%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
