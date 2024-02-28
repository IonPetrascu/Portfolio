import React from 'react';
import styled from 'styled-components';
import { Link } from '../Header/Header';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Number } from '../Header/Header';

const MobileContainer = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) => (props.visible ? 'translateX(0)' : 'translateX(-100%)')};
  position: fixed;
  width: 300px;
  height: 100%;
  transition: all 1s ease-in-out;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.904);
  padding: 10px;
  z-index: 100;
`;
const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;
const BodyMenu = styled.div``;
const NavMobile = styled.nav`
  display: flex;
  list-style: none;
  flex-direction: column;
  padding: 0px;
  gap: 50px;
  margin-top: 20px;
`;
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px;
`;
const LinkMobile = styled(Link)`
  color: black;
  font-size: 30px;
`;
const NumberMobile = styled(Number)`
  color: #fff;
  background: #000;
  font-size: 20px;
`;
const ButtonExit = styled.button`
  padding: 0px;
  background: transparent;
  border: none;
  font-size: 40px;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #33333365;
`;
const MobileMenu = ({ mobileMenu, toggleMenu }) => {
  return (
    <>
      <MobileContainer visible={mobileMenu}>
        <HeaderMenu>
          <ButtonExit onClick={toggleMenu}>
            <IoMdClose />
          </ButtonExit>
          <NavLinks>
            <li>
              <LinkMobile
                target="_blank"
                href="https://www.linkedin.com/in/ion-petra%C8%99cu-761471288/"
              >
                <FaLinkedin />
              </LinkMobile>
            </li>
            <li>
              <LinkMobile target="_blank" href="https://github.com/IonPetrascu">
                <FaGithubSquare />
              </LinkMobile>
            </li>
            <li>
              <NumberMobile target="_blank">+373 691 42 010</NumberMobile>
            </li>
          </NavLinks>
        </HeaderMenu>
        <BodyMenu>
          <NavMobile>
            <li>
              <LinkMobile href="#aboutMe">About</LinkMobile>
            </li>
            <li>
              <LinkMobile href="#projects">Projects</LinkMobile>
            </li>
            <li>
              <LinkMobile href="#skills">Skills</LinkMobile>
            </li>
            <li>
              <LinkMobile href="#contact">Contact</LinkMobile>
            </li>
          </NavMobile>
        </BodyMenu>
      </MobileContainer>
      {mobileMenu && <Overlay onClick={toggleMenu}></Overlay>}
    </>
  );
};

export default MobileMenu;
