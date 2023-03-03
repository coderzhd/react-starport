import styled from "styled-components";

export const TransferListWraper = styled.div`
  background-color: ${(porps) => porps.theme.color.primary};

  .btn-container {
    display: flex;
    justify-content: center;
    padding: 40px 0 30px;
    .btn {
      background-color: #767676;
      padding: 5px 15px;
      cursor: pointer;
      border-radius: 0.25rem;
      :hover {
        background-color: #5f5f5f;
      }
    }
  }
  .spanWraper {
    color: ${(props) => props.theme.color.textColor};
  }
`;
