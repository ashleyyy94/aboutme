import {Link} from 'react-router-dom';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link to="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Ashley's Profile</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link to="/" ><NavLink>Home</NavLink></Link>
      </li>
      <li>
        <Link to="/about" ><NavLink>About</NavLink></Link>
      </li> 
      <li>
        <Link to="/collection" ><NavLink>Collection</NavLink></Link>
      </li>                
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/ashleyyy94">
          <AiFillGithub size="2rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ashley-ong-2816a8105/">
          <AiFillLinkedin size="2rem" />
        </SocialIcons>
        <SocialIcons href="mailto:ashley_2461994@hotmail.com">
          <MdEmail size="2rem"/>
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;