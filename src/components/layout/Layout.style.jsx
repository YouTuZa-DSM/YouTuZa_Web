import styled from "@emotion/styled";

const MainWrap = styled.div`
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.basic.white};
  padding: 0 2.4rem 12rem;
  width: min(480px, 100%);
  min-height: ${(props) => (props.isFooter ? "calc(100vh - 8rem)" : "100vh")};
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterWrap = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  z-index: 100;
  border-top: 0.2rem solid ${(props) => props.theme.colors.grayscale.gray_100};
  background-color: ${(props) => props.theme.colors.basic.white};
  padding: 0 0 2.4rem;
  width: min(480px, 100%);
  height: 8rem;
`;

const BtnWrap = styled.div`
  flex: 1;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
  }

  span {
    margin: 0.4rem 0 0;
    cursor: pointer;
  }
`;

export { MainWrap, FooterWrapper, FooterWrap, BtnWrap };
