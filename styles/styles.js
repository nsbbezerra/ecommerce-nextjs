import styled from "@emotion/styled";
import configs from "../configs/configs";
import colors from "../configs/configs";

export const ContainerNonFixed = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.main`
  width: 100%;
  max-width: 1380px;
  overflow-x: hidden;
`;

export const CenterLayourt = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.section`
  width: 100%;
`;

export const HeaderApp = styled.header`
  width: 100%;
  height: 60px;
  background: ${colors.colors.primary};
  display: flex;
  align-items: center;
  z-index: 100;
  @media (min-width: 320px) {
    height: 45px;
  }
  @media (min-width: 768px) {
    height: 55px;
  }
  @media (min-width: 1024px) {
    height: 60px;
  }
`;

export const ContainerMenu = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 500px;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  @media (min-width: 320px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 834px) {
    grid-template-columns: 1fr 500px;
  }
`;

export const MenuApp = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 834px) {
    display: flex;
  }
`;

export const MenuItens = styled.span`
  display: block;
  color: ${(props) => props.color || "white"};
  user-select: none;
  cursor: pointer;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  &:hover {
    border-bottom: 1.5px solid ${(props) => props.color || "white"};
  }
  @media (min-width: 320px) {
    font-size: 12px !important;
  }
  @media (min-width: 1024px) {
    font-size: 15px !important;
  }
  @media (min-width: 1380px) {
    font-size: 16px !important;
  }
`;

export const MenuItensPanel = styled.span`
  display: block;
  color: ${(props) => props.color || "white"};
  user-select: none;
  cursor: pointer;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  margin-left: 15px;
  &:hover {
    border-bottom: 1.5px solid ${(props) => props.color || "white"};
  }
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${configs.colors.dark};
  color: ${configs.colors.light};
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 9px;
  font-weight: 600;
  position: absolute;
`;

export const LabelTwo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${configs.colors.dark};
  color: ${configs.colors.light};
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 9px;
  font-weight: 600;
  position: fixed;
  top: 10px;
  right: 102px;
`;

export const LabelThree = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${configs.colors.dark};
  color: ${configs.colors.light};
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 9px;
  font-weight: 600;
  position: fixed;
  top: 10px;
  right: 47px;
`;

export const MenuLogo = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 20px;
  height: 60px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 50px;
  padding-left: 50px;
  position: absolute;
  max-width: 1380px;
  top: 60px;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 834px) {
    display: grid;
  }
`;

export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  align-items: center;
`;

export const ContainerInfoLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
`;

export const ShippingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1.5px solid ${configs.colors.dark};
`;

export const ContentFixed = styled.div`
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 30px;
  @media (max-width: 400px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const FixedPanel = styled.div`
  width: 100%;
  background-color: ${(props) => props.bg || "white"};
  color: ${(props) => props.color || "#000"};
  height: 60px;
  position: fixed;
  top: ${(props) => (props.display === 1 ? 0 : -60)}px;
  opacity: ${(props) => props.display || 0};
  z-index: 1000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding-left: 50px;
  padding-right: 25px;
  transition: all 0.8s;
`;

export const GridFixedPanel = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 120px;
  height: 60px;
`;

export const LogoContainerPanel = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
`;
