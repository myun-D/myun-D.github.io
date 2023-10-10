import { CgMenu } from "react-icons/cg"
import styled from "styled-components"
import MainGraphic from "@/components/MainGraphic"
import { useEffect, useRef, useState } from "react"
import Menu from "@/components/common/Menu"
import SwiperWorks from "@/components/SwiperWorks"
import UseGetAllWorks from "@/hooks/useGetAllWorks"

export default function Home({ allWorks }: { allWorks: any }) {
  const menuBtn = useRef<HTMLDivElement>(null)
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState("")
  let currentScrollTop = 0

  const handleScroll = () => {
    const scT = window.scrollY
    const target = document.querySelector(".swiperMenu")! as HTMLElement
    let compare = scT + window.innerHeight

    if (target) {
      if (currentScrollTop > scT) {
        compare = scT
      } else {
        compare =
          scT + (menuBtn.current?.clientHeight! + menuBtn.current?.offsetTop!)
      }

      if (compare > target.offsetTop) {
        setIsDark(true)
      } else {
        setIsDark(false)
      }

      currentScrollTop = scT
    }
  }

  const handleMenu = (type: string) => {
    if (isMenuOpen === "open") {
      setIsMenuOpen("close")
      return
    }
    setIsMenuOpen("open")
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <HomeWrapper isDark={isDark}>
      <MainGraphic />
      <div className="swiperMenu">
        <SwiperWorks allWorks={allWorks} />
      </div>
      <div ref={menuBtn} onClick={() => handleMenu("open")} className="menuBtn">
        <i>
          <CgMenu />
        </i>
      </div>
      <Menu isMenuOpen={isMenuOpen} handleMenu={(type) => handleMenu(type)} />
    </HomeWrapper>
  )
}

export const getServerSideProps = async () => {
  const allWorks = UseGetAllWorks()

  return {
    props: {
      allWorks,
    },
  }
}

const HomeWrapper = styled.div<{ isDark: boolean }>`
  background: #fff;
  .menuBtn {
    position: fixed;
    top: 2rem;
    left: 1.5rem;
    padding: 0.5rem;
    border: ${(props) => (props.isDark ? "2px solid #fff" : "2px solid #000")};
    border-radius: 50%;
    cursor: pointer;
    color: ${(props) => (props.isDark ? "#fff" : "#000")};
    transition: all ease 0.3s 0s;
    i {
      font-size: 3rem;
    }
  }
  .swiperMenu {
    display: flex;
    justify-content: space-between;
  }
  .menuList {
  }
`
