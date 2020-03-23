import styled from "styled-components";
import CustomButton from "../../custom-button/CustomButton";

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

export const AddButton = styled(CustomButton)`
  width: 10%;
  opacity: 0.7;

  ${'' /* @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  } */}
`;