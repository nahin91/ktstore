import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: contents;
  align-items: center;
  position: relative;
  border: 1px solid black;
  padding-bottom: 20px;

  button {
    width: 94%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 450px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  height: 20%;
  padding: 12px;
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.span`
  // width: 80%;
  font-size: 16px;
`;

export const ProductTitle = styled.span`
  // width: 80%;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const Price = styled.span`
  width: 30%;
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  align-items: end;
  justify-content: right;
`;
