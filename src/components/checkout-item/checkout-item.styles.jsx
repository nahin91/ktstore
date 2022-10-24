import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 12px 0px;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  height: 224px;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 100%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  width: fit-content;
  padding: 0px 12px;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 4px;
  color: #2b64d2;
`;

export const InfoContainer = styled.div`
  // flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Price = styled.span`
  width: 10%;
  text-align: end;
`;
