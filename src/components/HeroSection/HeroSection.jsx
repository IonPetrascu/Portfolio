import React from 'react';
import styled from 'styled-components';
import { Container } from '../Header/Header';

const Hero = styled.div`
  margin-top: 10%;
`;
const HeroContainer = styled(Container)`
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const CodingEditor = styled.div`
  background-color: #1a212b;
  position: relative;
  min-width: 50%;
  height: 500px;
  border-radius: 20px 20px 0 0;
  border: 1px solid #ada7a7;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Greetings = styled.div``;
export const CodingEditorNav = styled.div`
  color: #ddd;
  text-align: center;
  margin: 10px auto;
  background-color: #212631;
  width: 50%;
  border-radius: 10px;
`;
export const CodingEditorBody = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  padding: 10px;
`;
export const ConstantCSS = styled.div`
  margin-left: 20%;
  @media (max-width: 1300px) {
    margin-left: 5%;
  }
`;
export const ConstantTitle = styled.h3`
  color: #cb852c;
  display: inline;
  margin: 0px;
`;
export const ConstantProperty = styled.h4`
  color: #8adcf2;
  margin: 0;
`;
export const ConstantValue = styled.span`
  color: #ddd;
`;
export const ConstantBody = styled.div`
  display: flex;
  margin-bottom: 5px;
  margin-left: 30px;
  gap: 10px;
`;
export const CodingEditorButtons = styled.div`
  display: flex;
  position: absolute;
  max-width: 500px;
  left: 20px;
  top: 15px;
  gap: 10px;
`;
export const Circle = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;
const Profession = styled.span`
  display: block;
  color: transparent;
  -webkit-text-stroke: 1px #ddd;
  font-size: 4.5em;
`;
const Greeting = styled.span`
  display: block;
  color: #ddd;

  font-size: 4.5em;
`;
const Name = styled.span`
  display: block;
  color: #ddd;
  box-shadow: inset 0 0 0 0 #ffffff;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  font-size: 4.5em;
  &:hover {
    box-shadow: inset 240px 0 0 0 #d654cb;
    color: #ddd;
  }
`;
const Description = styled.p`
  color: #ddd;
  font-size: 1.5em;
`;
const Pixels = styled.span`
  color: #d25450;
`;
const Url = styled.span`
  color: green;
`;

const HeroSection = () => {
  return (
    <Hero>
      <HeroContainer id='aboutMe'>
        <Greetings>
          <Greeting>Hi!</Greeting>
          <Name>I'm Ion,</Name>
          <Profession>frontend developer</Profession>
          <Description>
            I'm a start-up frontend developer, aspiring to professional growth and achieving high
            results. My goal is to build a career in IT by acquiring new skills and applying them to
            developing exciting projects.
          </Description>
        </Greetings>
        <CodingEditor>
          <CodingEditorNav>petrascuion.com</CodingEditorNav>
          <CodingEditorBody>
            <ConstantCSS>
              <ConstantTitle>{'.aboutMe{'}</ConstantTitle>
              <br />
              <ConstantBody>
                <ConstantProperty>name:</ConstantProperty>
                <ConstantValue>Petrascu Ion;</ConstantValue>
              </ConstantBody>
              <ConstantBody>
                <ConstantProperty>age:</ConstantProperty>
                <ConstantValue>
                  21<Pixels>px</Pixels>;
                </ConstantValue>
              </ConstantBody>
              <ConstantBody>
                <ConstantProperty>location:</ConstantProperty>
                <ConstantValue>
                  url(<Url>"./Republic Of Moldova , Chișinău"</Url>);
                </ConstantValue>
              </ConstantBody>
              <ConstantBody>
                <ConstantProperty>studies:</ConstantProperty>
                <ConstantValue>
                  url(<Url>"./Center of Excellence in Energy and Electronics"</Url>);
                </ConstantValue>
              </ConstantBody>
              <br />
              <ConstantTitle>{'}'}</ConstantTitle>
            </ConstantCSS>
            <ConstantCSS>
              <ConstantTitle>{'.licensesAndCerificates{'}</ConstantTitle>
              <br />
              <ConstantBody>
                <ConstantProperty>beetrootAcademy:</ConstantProperty>
                <ConstantValue>Frontend Development</ConstantValue>
              </ConstantBody>
              <ConstantBody>
                <ConstantProperty>freeCodeCamp:</ConstantProperty>
                <ConstantValue>Responsive Web Design</ConstantValue>
              </ConstantBody>
              <ConstantBody>
                <ConstantProperty>zotaTeam:</ConstantProperty>
                <ConstantValue>Wordpress Development</ConstantValue>
              </ConstantBody>
              <ConstantTitle>{'}'}</ConstantTitle>
            </ConstantCSS>
          </CodingEditorBody>
          <CodingEditorButtons>
            <Circle color="#D25450"></Circle>
            <Circle color="#D29F30"></Circle>
            <Circle color="#25A93D"></Circle>
          </CodingEditorButtons>
        </CodingEditor>
      </HeroContainer>
    </Hero>
  );
};

export default HeroSection;
