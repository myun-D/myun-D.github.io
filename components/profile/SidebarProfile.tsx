import Image from "next/image"
import styled from "styled-components"
import ImgMe2 from "@/public/img/img_me2.png"

export default function SidebarProfile() {
  return (
    <SidebarProfileWrapper>
      <div className="ProfileImg">
        <span></span>
        <span></span>
        <div>
          <em>Kim Hyun Ji</em>
          <div>
            <Image src={ImgMe2} layout="responsive" alt="프로필 사진" />
          </div>
          <em>김현지</em>
        </div>
      </div>
      <ul className="profileInfo">
        <li>
          <b>날카로운 시선과 통통 튀는 아이디어로</b>
        </li>
        <li>
          <b>색다른 가치를 만듭니다.</b>
        </li>
        <li>
          <span>#꼼꼼한 #아이디어 #다방면의 #긍정적인 #책임감</span>
        </li>
        <li>
          <a href="tel:01000000000">
            <em>+82 10-0000-0000</em>
          </a>
        </li>
        <li>
          <a href="mailto:kim.design@gamil.com">
            <em>kim.design@gmail.com</em>
          </a>
        </li>
        <li></li>
      </ul>
    </SidebarProfileWrapper>
  )
}

const SidebarProfileWrapper = styled.div`
  .ProfileImg {
    position: relative;
    height: calc(100vh / 4 * 2);
    border-bottom: 2px solid #fff;
    span {
      display: block;
      height: calc(100% / 2);
      :first-child {
        border-bottom: 2px solid #fff;
      }
    }
    > div {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      > div {
        width: 75%;
      }
      em {
        display: block;
        margin-top: 0.4rem;
        font-size: 1.4rem;
        :first-of-type {
          margin-top: 0;
          margin-bottom: 0.4rem;
        }
      }
    }
  }
  .profileInfo {
    height: calc(100vh / 4);
    li {
      width: 100%;
      height: calc(100% / 6);
      font-weight: 500;
      font-size: 1.4rem;
      border-bottom: 1px solid #454545;
      > * {
        display: flex;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 4px 1.5rem 0;
      }
      b {
        color: #00ff00;
        font-weight: 500;
      }
      a {
        em {
          opacity: 0.5;
        }
        :hover {
          em {
            text-decoration: underline;
            text-underline-offset: 2px;
          }
        }
      }
    }
  }
`
