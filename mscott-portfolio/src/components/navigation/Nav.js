import React from "react";
import { Nav, NavItem, NavLink, Container } from "reactstrap";
import styled from "styled-components";

const NewNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 2 px #49344b;
`;

const Navigation = props => {
  return (
    <Container>
      <NewNav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about-me">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/blog">Blog</NavLink>
        </NavItem>
      </NewNav>
    </Container>
  );
};

export default Navigation;

// import React, { useState } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink
// } from "reactstrap";

// const Navigation = props => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   return (
//     <div>
//       <Navbar color="faded" light>
//         <NavbarBrand href="/" className="mr-auto">
//           Michelle Scott
//         </NavbarBrand>
//         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//         <Collapse isOpen={!collapsed} navbar>
//           <Nav navbar>
//             <NavItem>
//               <NavLink href="/">Home</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/projects">Projects</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/contact">Contact</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/about-me">About me</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/blog">Blog</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/skills">Skills</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default Navigation;
