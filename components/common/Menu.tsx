import { Archivo } from "next/font/google"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { CgClose } from "react-icons/cg"
import styled from "styled-components"

export default function Menu({
  handleMenu,
  isMenuOpen,
}: {
  handleMenu: (type: string) => void
  isMenuOpen: string
}) {
  const list = useRef<any>([])
  const router = useRouter()
  const [currentMenu, setCurrentMenu] = useState(0)
  const [isHover, setIsHover] = useState(false)
  const menuList = ["Main", "Profile", "Works"]

  const handleActive = (e: any) => {
    if (e.type === "mouseenter") {
      if (!e.target.classList.contains("active")) {
        setIsHover(true)
      } else {
        setIsHover(false)
      }
    } else {
      setIsHover(false)
    }
  }

  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setCurrentMenu(0)
        break
      case "/profile":
        setCurrentMenu(1)
        break
      case "/works":
        setCurrentMenu(2)
        break
      default:
        setCurrentMenu(0)
    }

    list.current.map((item: any) => {
      item.addEventListener("mouseenter", handleActive)
      item.addEventListener("mouseleave", handleActive)
    })
  }, [])

  return (
    <MenuWrapper isHover={isHover} isMenuOpen={isMenuOpen}>
      <div onClick={() => handleMenu("close")}>
        <i>
          <CgClose />
        </i>
      </div>
      <ul className="title">
        {menuList.map((item, idx) => (
          <li
            ref={(el) => (list.current[idx] = el)}
            key={idx}
            className={currentMenu == idx ? "active" : ""}
            onClick={() => router.push(`/${item.toLocaleLowerCase()}`)}
          >
            <em>&#40;</em> {item} <em>&#41;</em>
          </li>
        ))}
      </ul>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div<{ isHover: boolean; isMenuOpen: string }>`
  z-index: ${(props) => props.isMenuOpen == "" && -1};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #252525;
  animation: ${(props) => (props.isMenuOpen === "open" ? "open" : "close")} 0.2s
    ease 0s forwards;
  @keyframes close {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    90% {
      transform: scale(1.02);
      opacity: 0;
    }
    100% {
      z-index: -1;
    }
  }
  @keyframes open {
    0% {
      transform: scale(1.02);
      opacity: 0;
    }
    90% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      z-index: 2;
    }
  }
  > div {
    position: absolute;
    top: 2rem;
    left: 1.5rem;
    padding: 0.5rem;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    color: #fff;
    opacity: ${(props) => (props.isMenuOpen === "open" ? 1 : 0)};
    transition: all ease 0.2s
      ${(props) => (props.isMenuOpen === "open" ? "0.1s" : "0s")};
    i {
      font-size: 3rem;
    }
  }
  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate3d(-50%, -50%, 0);
    li {
      padding: 2rem 4rem;
      font-size: 4rem;
      color: #fff;
      cursor: pointer;
      em {
        display: none;
      }
      &:hover {
        em {
          display: inline;
        }
      }
      &.active {
        color: #00ff00;
        em {
          display: ${(props) => (props.isHover ? "none" : "inline")};
        }
      }
    }
  }
`
