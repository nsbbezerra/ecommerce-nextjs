import styled from "@emotion/styled";
import configs from "../configs/configs";

export const ContainerApp = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerNonFixed = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
`;

export const Fixed = styled.section`
  width: 100%;
  max-width: 1380px;
  display: block;
`;

export const FixedPanel = styled.div`
  width: 100%;
  margin-top: ${(props) => (props.display === 1 ? 0 : -50)}px;
  opacity: ${(props) => props.display || 0};
  transition: all 0.8s;
  position: fixed;
  z-index: 1000;
  height: 55px;
  top: 0;
  background-color: rgba(212, 175, 55, 0.9);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  max-width: 100%;
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
  right: ${(props) => props.right || 0};
`;
