import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const SidebarNav = styled.nav`
  background: #1E266D;
  width: 20vw;
  min-width: 265px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 80px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  box-shadow: rgba(6, 24, 44, 0.3) 6px 4px 4px 0.3px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.05) 0px 1px 0px inset;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
  z-index: 0;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  //   const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
