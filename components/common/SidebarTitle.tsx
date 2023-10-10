import { useRouter } from "next/router"
import { TbArrowNarrowLeft } from "react-icons/tb"
import styled from "styled-components"

export default function SidebarTitle({
  title,
  isDark = false,
  isBack = false,
}: {title: string, isDark?: boolean, isBack?: boolean}){
  const router = useRouter();
  return (
    <SidebarTitlerWrapper isDark={isDark} className="sidebar">
      {isBack && <i onClick={()=> router.push("/")}><TbArrowNarrowLeft /></i>}
      <p className='title'>{title}</p>
    </SidebarTitlerWrapper>
  )
}

const SidebarTitlerWrapper = styled.h2<{isDark: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 1.5rem 0.6rem;
  border-bottom: 2px solid ${[props=> props.isDark ? "#fff" : "#000"]};
  height: calc(100vh / 4);
  color: ${[props=> props.isDark ? "#fff" : "#000"]};
  i{
    display: inline-flex;
    padding: 0.5rem;
    font-size: 3rem; 
    border: 2px solid ${[props=> props.isDark ? "#fff" : "#000"]};;
    border-radius: 50%;
    cursor: pointer;
}
  p{
    margin-top: auto;
    font-size: 3.2rem;
    font-weight: normal;
    word-break: break-all;
  }
`