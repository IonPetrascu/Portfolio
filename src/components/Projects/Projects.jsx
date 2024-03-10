import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 500px;
  box-sizing: border-box;
  margin-top: 20px;
  position: relative;
`;
const TitleProject = styled.h2`
  color: #ddd;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #000;
  padding: 20px 40px;
  margin: 0px;
  border: 1px solid #ddd;
`;
const BodyProject = styled.div`
  height: 600px;
  padding: 10px;
`;
const ProjectContainer = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 170px;
  flex-direction: column;
`;
const ImageProject = styled.div`
  background: url(${(props) => props.src});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;
const TitleProjects = styled.h2`
  font-size: 4em;
  margin: 0;
  text-align: center;
  color: #ddd;
`;

const Projects = () => {
  return (
    <ProjectContainer id="projects">
      <TitleProjects>Projects</TitleProjects>
      <Section>
        <TitleProject>Movie App</TitleProject>
        <BodyProject>
          <a target="_blank" href="https://main--movie-react-ip.netlify.app/">
            <ImageProject src="1.png"></ImageProject>
          </a>
        </BodyProject>
      </Section>
      <Section>
        <TitleProject>You Meal</TitleProject>
        <BodyProject>
          <a target="_blank" href="https://ionpetrascu.github.io/you-meal/">
            <ImageProject src="2.png"></ImageProject>
          </a>
        </BodyProject>
      </Section>
    </ProjectContainer>
  );
};

export default Projects;
