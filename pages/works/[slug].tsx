import fs from "fs"
import path from "path"
import { MDXRemote } from "next-mdx-remote"
import { Context } from "vm"
import styled from "styled-components"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import CustomComponent from "../../components/CustomComponent"
import Sapcer from "../../components/Spacer"
import DetailNav from "@/components/detail/DetailNav"
import Sidebar from "@/components/common/Sidebar"
import SidebarNav from "@/components/detail/SidebarNav"
import SidebarTitle from "@/components/common/SidebarTitle"
import UseGetAllWorks from "@/hooks/useGetAllWorks"
import UseGetSlugWorks from "@/hooks/useGetSlugWorks"

export default function WorksDetail({
  allWorks,
  frontMatter,
  mdxSource,
}: {
  files: any
  allWorks: any
  frontMatter: any
  mdxSource: any
}) {
  const mainImage = useRef<any>()
  const mainTitle = useRef<any>()
  const description = useRef<any>()
  const descriptionInner = useRef<any>()
  const [isOverlay, setIsOverlay] = useState(false)

  const handleResize = () => {
    const image = mainImage.current
    const title = mainTitle.current
    const titleW = title.clientWidth
    const sidebarW = document.querySelector(".sidebar")?.clientWidth
    if (image) {
      const imageH = image.clientHeight
      document.documentElement.style.setProperty("--imgH", imageH + "px")
    }
    document.documentElement.style.setProperty("--titleW", titleW + "px")
    document.documentElement.style.setProperty("--sideW", sidebarW + "px")
  }

  const handleScroll = () => {
    const scT = description.current.scrollTop
    const descriptionT = descriptionInner.current.offsetTop
    const imageH = mainImage.current?.clientHeight

    if (scT + imageH >= descriptionT) {
      setIsOverlay(true)
    } else {
      setIsOverlay(false)
    }
  }

  useEffect(() => {
    handleResize()
    handleScroll()
    window.addEventListener("resize", handleResize)
    description.current.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [frontMatter])

  return (
    <DetailFormWrapper
      img={frontMatter.img ? true : false}
      isOverlay={isOverlay}
    >
      <Sidebar
        sidebarTitle={<SidebarTitle title="Works" isBack isDark />}
        sidebarContent={<SidebarNav allWorks={allWorks} />}
      />
      <div ref={description} className="content">
        {frontMatter.img && (
          <div ref={mainImage} className="mainImg">
            <Image
              onLoad={handleResize}
              src={frontMatter.img}
              width={1086}
              height={434}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="메인 이미지"
            />
          </div>
        )}
        <div className="descWrapper">
          <div className="frontmatter">
            <h1
              ref={mainTitle}
              className="title"
              dangerouslySetInnerHTML={{
                __html: frontMatter.title.replace(/\\r\\n|\\n|\\r/gm, "<br />"),
              }}
            ></h1>
            <p>{frontMatter.subTitle}</p>
            <em>{frontMatter.date}</em>
            <span>{frontMatter.info}</span>
          </div>

          <div className="description">
            <div className="ptWrapper">
              <div ref={descriptionInner}>
                <MDXRemote
                  {...mdxSource}
                  components={{ CustomComponent, Sapcer }}
                />
              </div>
            </div>
          </div>
        </div>
        <DetailNav allWorks={allWorks} />
      </div>
    </DetailFormWrapper>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("", "works"))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }: Context) => {
  const allWorks = UseGetAllWorks()
  const { frontMatter, mdxSource } = await UseGetSlugWorks(slug)

  return {
    props: {
      allWorks,
      frontMatter,
      slug,
      mdxSource,
    },
  }
}

const DetailFormWrapper = styled.div<{ isOverlay: boolean; img: boolean }>`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    position: relative;
    width: 100%;
    overflow-y: auto;
    .mainImg {
      z-index: -1;
      position: fixed;
      top: 0;
      right: 0;
      width: calc(100% - var(--sideW));
      /* filter: ${(props) => (props.isOverlay ? "grayscale(1)" : "none")}; */
      opacity: ${(props) => (props.isOverlay ? "0.15" : "1")};
      transition: all ease 0.3s 0s;
    }
    .descWrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 3rem 3rem 10rem;
      padding-top: ${(props) =>
        props.img ? "calc(3rem + var(--imgH))" : "3rem"};
      .frontmatter {
        position: sticky;
        top: ${(props) => (props.img ? "calc(3rem + var(--imgH))" : 0)};
        left: 0;
        max-width: calc(100% / 4);
        h1 {
          line-height: 1.2;
          font-size: 2.8rem;
        }
        p {
          margin: 2rem 0 1rem;
          font-size: 2rem;
          font-weight: 900;
          word-break: keep-all;
          line-height: 1.2;
        }
        em,
        span {
          display: block;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 1.2;
          color: #9b9b9b;
        }
      }
      .description {
        display: flex;
        justify-content: flex-end;
        width: calc(100% - var(--titleW) - 3rem);
        margin-top: 0.5rem;
        .ptWrapper {
          width: 100%;
          height: fit-content;
          > div {
            > * {
              font-size: 1.4rem;
              line-height: 1.5;
            }
          }
        }
      }
    }
  }
`
