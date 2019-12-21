import React from 'react';
import { slide as Menu } from "react-burger-menu";

export default function Nav(props) {
  return (
    <Menu {...props}>
    <div id="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="https://docdro.id/4DYu8on" target="_blank" rel="noopener noreferrer"> Resumé</a>
    </div>
    </Menu>
  )
}
