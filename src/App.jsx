import React, { useState } from 'react';
import Header from './components/Header/Header';
import { createGlobalStyle } from 'styled-components';
import HeroSection from './components/HeroSection/HeroSection';
import Projects from './components/Projects/Projects';
import Skills from './components/SkillsSection/Skills';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Form from './components/Form/Form';

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
  body {
    background: rgb(1, 2, 31);
background: linear-gradient(90deg, #1D232B 33%, #293665 77%);
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: Roboto,sans-serif;
  }
`;

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  if (mobileMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };
  return (
    <>
      <GlobalStyle />
      <Header toggleMenu={toggleMenu} />
      <HeroSection />
      <Projects />
      <Skills />
      <Form />
      <MobileMenu mobileMenu={mobileMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default App;
