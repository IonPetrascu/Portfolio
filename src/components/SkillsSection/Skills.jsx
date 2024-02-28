import React from 'react';

import {
  CodingEditorNav,
  CodingEditorBody,
  ConstantCSS,
  ConstantTitle,
  CodingEditorButtons,
  Circle,
} from '../HeroSection/HeroSection.jsx';
import {
  SkillsCodingEditor,
  Title,
  SkillsSection,
  Constant,
  String,
  Equal,
} from './Skills.styles.js';

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Title>Skills</Title>
      <SkillsCodingEditor>
        <CodingEditorNav>petrascuion.com</CodingEditorNav>
        <CodingEditorBody>
          <ConstantCSS>
            <Constant>constant</Constant>
            <ConstantTitle>{' skills '}</ConstantTitle>
            <Equal>=</Equal>
            <ConstantTitle>{' [ '}</ConstantTitle>

            <String>"HTML5",</String>

            <String>"CSS / SCSS",</String>

            <String>"Java Script (ES5,ES6)",</String>

            <String>"React JS",</String>

            <String>"Redux Toolkit",</String>

            <String>"BEM methodology",</String>

            <String>"Git / GitHub",</String>

            <String>"Vite / Gulp",</String>

            <String>"TypeScript",</String>

            <String>"Figma",</String>

            <String>"Tailwind CSS",</String>

            <String>"Styled Components"</String>

            <ConstantTitle>{' ]'}</ConstantTitle>
          </ConstantCSS>
        </CodingEditorBody>
        <CodingEditorButtons>
          <Circle color="#D25450"></Circle>
          <Circle color="#D29F30"></Circle>
          <Circle color="#25A93D"></Circle>
        </CodingEditorButtons>
      </SkillsCodingEditor>
    </SkillsSection>
  );
};

export default Skills;
