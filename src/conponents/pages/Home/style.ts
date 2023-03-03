import styled from "styled-components";

export const HomeContainerWraper = styled.div`
  background-color: ${(porps) => porps.theme.color.primary};

  padding: 20px 0 0 0;
  .logo {
    width: 200px;
    height: 191px;
    margin: 0 auto;
    img {
      width: 200px;
    }
  }
  .scribe {
    text-align: center;
    font-size: 18px;
    color: ${(props) => props.theme.color.textColor};
  }
  .btn-container {
    display: flex;
    justify-content: center;
    padding: 40px 0 30px;
    .btn {
      background-color: #00a2e8;
      padding: 5px 15px;
      cursor: pointer;
      margin: 0 20px;
      border-radius: 0.25rem;
      :hover {
        background-color: #008ae8;
      }
    }
  }

  .content {
    display: flex;
    padding: 0 50px;
    justify-content: center;
    flex-wrap: wrap;
    /*  声明列的宽度  */
    /*  声明行间距和列间距  */
    /* grid-gap: 20px; */
  }
  .item {
    flex: 1 0 16.6%;
  }
`;
