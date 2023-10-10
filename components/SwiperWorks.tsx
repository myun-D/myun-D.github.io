import styled from "styled-components"
import { IAllworks } from "./types/project"
import Image from "next/image"
import { useRouter } from "next/router"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
export default function SwiperWorks({ allWorks }: { allWorks: IAllworks[] }) {
  const router = useRouter()

  const onClickItem = (e: any) => {
    const target = e.clickedSlide
    if (target.classList.contains("swiper-slide-active")) {
      const path = e.clickedSlide.getAttribute("data-path")
      router.push(`/works/${path.replace(".mdx", "")}`)
    } else {
      const active = e.activeIndex
      const clicked = e.clickedIndex

      if (clicked < active) {
        e.slidePrev()
      } else {
        e.slideNext()
      }
    }
  }

  return (
    <SwiperWorksWrapper>
      <Swiper
        grabCursor={true}
        className="swiper"
        slidesPerView={4.5}
        centeredSlides={true}
        loop={true}
        mousewheel={true}
        onClick={(e) => onClickItem(e)}
      >
        {allWorks.map((project, idx) => (
          <SwiperSlide key={idx} className="slide" data-path={project.filename}>
            <div className="contentWrapper" key={idx}>
              <div className="activeIcon"></div>
              <div className="imgBox">
                {project.frontMatter.img && (
                  <Image
                    src={project.frontMatter.img}
                    sizes="500px"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                    alt="썸네일"
                  />
                )}
              </div>
              <p className="title">
                {project.frontMatter.title.replace(/\\r\\n|\\n|\\r/gm, "")}
              </p>
              <span className="category" style={{ color: "#fff" }}>
                {project.frontMatter.meta}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWorksWrapper>
  )
}

const SwiperWorksWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #000;
  .swiper {
    display: flex;
  }
  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0.85);
    transition: all 0.3s ease 0s;
    width: 100%;
    height: 55rem;
  }
  .contentWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .imgBox {
    position: relative;
    object-fit: cover;
    overflow: hidden;
    background: #fff;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .swiper-slide-prev {
    transform: translateX(-1.4rem) scale(0.85);
  }
  .swiper-slide-next {
    transform: translateX(1.4rem) scale(0.85);
  }
  .swiper-slide-active {
    transform: scale(1);
  }
  .title {
    margin: 2.6rem 0 0.8rem;
    text-decoration: underline;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
  }
  .category {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
  }
  .activeIcon {
    width: 2rem;
    min-width: 2rem;
    height: 2rem;
    min-height: 2rem;
    margin-bottom: 1.5rem;
    background: url("/img/icon_active_work.svg") no-repeat 50% 50%;
    background-size: 100%;
    opacity: 0;
    transition: opacity 0.3s ease 0s;
  }
  .swiper-slide-active .activeIcon {
    opacity: 1;
  }
`
