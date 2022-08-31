import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 18px;
  align-items: center;
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutItemDetails = styled.span`
  width: 23%;
`;

export const CheckoutItemQty = styled(CheckoutItemDetails)`
  display: flex;
  align-items: center;
`;

export const CheckoutItemArrow = styled.div`
  cursor: pointer;
`;

export const CheckoutItemValue = styled.span`
  margin: 0 10px;
`;

export const CheckoutRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
