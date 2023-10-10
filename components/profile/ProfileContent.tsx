import { HiArrowNarrowLeft } from "react-icons/hi"
import styled from "styled-components"
import SidebarTitle from "../common/SidebarTitle"
import { ReactNode } from "react"

interface IProfileContent{
  title: string,
  text: string
}

export default function ProfileContent({
  profileContent,
  profileTitle
}:{profileTitle: ReactNode, profileContent: Array<IProfileContent>}){
  return (
    <ProfileContentWrapper>
      {profileTitle}
      <ul>
        {profileContent.map((item, key)=> (
          <li key={key}>
            <b>{item.title}</b>
            <p>{item.text}</p>
          </li>
        ))}
        {Array.from({length: 6 - profileContent.length}).map((item,idx)=>(
          <li className="empty" key={idx}>
            <b></b>
            <p></p>
          </li>
        ))}
      </ul>
    </ProfileContentWrapper>
  )
}

const ProfileContentWrapper = styled.div`
  width: calc(100vw / 4);
  min-width: calc(100vw / 4);
  min-height: 100vh;
  background: linear-gradient(to right, rgb(0, 255, 0, 0.3) 20%, rgba(255,255,255,0) 70%);
  color: #000;
  ul{
    height: calc(100vh/4 * 2);
    border-bottom: 2px solid #000;
    li{
      height: calc(100% / 6);
      :nth-child(3){
        border-bottom: 2px solid #000;
        >*{
          :last-child{
            border-bottom: none;
          }
        }
      }
      :nth-child(6){
        >*{
          :last-child{
            border-bottom: none;
          }
        }
      }
      >*{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: calc(100% / 2);
        padding: 4px 1.5rem 0;
        font-size: 1.4rem;
        border-bottom: 1px solid #D9D9D9;
      }
      b{
        font-weight: 700;
      }
    }
  }
`