import styled from "styled-components"
import React, { ReactNode } from 'react';

export default function Sidebar({sidebarTitle, sidebarContent}: {sidebarTitle: ReactNode, sidebarContent: ReactNode}){
  return (
    <SidebarWrapper className="sidebar">
      {sidebarTitle}
      {sidebarContent}
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  width: calc(100vw / 4);
  min-width: calc(100vw / 4);
  min-height: 100vh;
  background: #000;
  color: #fff;
`