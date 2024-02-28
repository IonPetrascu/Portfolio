import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';
import { MdOutlineMenu } from 'react-icons/md';

export const Menu = styled.nav`
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

const HeaderStyled = styled.header`
  color: #fff;
  padding: 20px;
  border-bottom: 3px solid white;
`;
const Title = styled.h1`
  font-size: 2rem;
  color: transparent;
  -webkit-text-stroke: 1px #ddd;
`;
export const Nav = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const MobileMenu = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ddd;
  @media (min-width: 1000px) {
    display: none;
  }
`;
export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 20px;
`;
export const Number = styled.span`
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 5px 4px;
  text-decoration: none;
  font-size: 20px;
`;
const Header = ({ toggleMenu }) => {
  return (
    <HeaderStyled>
      <Container>
        <Title>PORTFOLIO</Title>
        <Menu>
          <Nav>
            <li>
              <Link href="#aboutMe">About Me</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </Nav>
          <Nav>
            <li>
              <Link target="_blank" href="https://www.linkedin.com/in/ion-petra%C8%99cu-761471288/">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://github.com/IonPetrascu">
                <FaGithubSquare />
              </Link>
            </li>
            <li>
              <Number target="_blank">+373 691 42 010</Number>
            </li>
          </Nav>
          <MobileMenu onClick={toggleMenu}>
            <MdOutlineMenu style={{ fontSize: '2.5em' }} />
          </MobileMenu>
        </Menu>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
