import styled from "styled-components";

export const NavWraper = styled.div`
  background-color: ${(porps) => porps.theme.color.primary};
  height: 80px;
  padding: 0 32px;
  border-bottom: solid 1px #ccc;
  display: flex;
  justify-content: space-between;
  .nav-left {
    width: 200px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${(props) => props.theme.color.textColor};
  }
  .logo {
    width: 54px;
    margin-right: 10px;
  }
  .nav-right {
    display: flex;
    align-items: center;
    .item {
      padding: 0 10px;
      height: 3rem;
      border-radius: 5px;
      cursor: pointer;
      :hover {
        img {
          opacity: 0.8;
          filter: alpha(opacity=20);
        }
      }
      img {
        width: 30px;
      }
    }
  }
`;
