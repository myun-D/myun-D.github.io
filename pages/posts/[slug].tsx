import fs from 'fs';
import path from 'path';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { MDXRemote } from 'next-mdx-remote';
import { Context } from 'vm';
import styled from 'styled-components';
import DetailNav from '@/components/detail/DetailNav';
import UseGetAllPosts from '@/hooks/useGetAllPosts';
import UseGetSlugPost from '@/hooks/useGetSlugPost';
import Image from 'next/legacy/image';
import { useEffect, useRef, useState } from 'react';
import { grayscale } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const components = {SyntaxHighlighter}

function PostDetail({ allPosts, frontMatter, mdxSource }: {files: any, allPosts:any,frontMatter: any, mdxSource: any}){

  const mainImage = useRef<any>();
  const mainTitle = useRef<any>();
  const description = useRef<any>();
  const descriptionInner = useRef<any>();
  const [isOverlay, setIsOverlay] = useState(false);

  const handleResize = () => {
    const image = mainImage.current;
    const title = mainTitle.current;
    const titleW = title.clientWidth;
    if(image){
      const imageH = image.clientHeight;
      document.documentElement.style.setProperty('--imgH', imageH+'px')
    } 
    document.documentElement.style.setProperty('--titleW', titleW+'px')
  }

  const handleScroll = () => {
    const scT = description.current.scrollTop;
    const descriptionT = descriptionInner.current.offsetTop;
    const imageH = mainImage.current?.clientHeight;

    if((scT + imageH) >= descriptionT){
      setIsOverlay(true)
    }else{
      setIsOverlay(false)
    }
  }

  useEffect(() => {
    handleResize();
    handleScroll();
    window.addEventListener('resize', handleResize);
    description.current.addEventListener('scroll', handleScroll);
    
    return(()=>{
      window.removeEventListener('resize', handleResize);
    })
  }, [frontMatter]);

  return(
    <>
      <DetailFormWrapper img={frontMatter.img} isOverlay={isOverlay}>
        <DetailNav allPosts={allPosts}/>
        <div className='content'>
          {frontMatter.img && 
            <div ref={mainImage} className='mainImg'>
              <Image
                src={frontMatter.img}
                width={1086}
                height={434}
                layout="responsive"
                alt="메인 이미지"
              />
            </div>
          }
          <div className='descWrapper'>
            <div className='frontmatter'>
              <h1 ref={mainTitle} className='title' dangerouslySetInnerHTML={{__html: frontMatter.title.replace(/\\r\\n|\\n|\\r/gm,"<br />")}}></h1>
              <p>{frontMatter.subTitle}</p>
              <em>{frontMatter.date}</em>
              <span>{frontMatter.info}</span>
            </div>

            <div ref={description} className='description'>
              <div className='ptWrapper'>
                <div ref={descriptionInner}>
                  <MDXRemote {...mdxSource} components={components} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DetailFormWrapper>
    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('','posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params: {slug}}: Context) => {
  const allPosts = UseGetAllPosts();
  const { frontMatter, mdxSource } = await UseGetSlugPost(slug);

  return {
    props: {
      allPosts,
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export default PostDetail;

const DetailFormWrapper = styled.div<{isOverlay: boolean, img: Element}>`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  .content{
    position: relative;
    width: 100%;
    .mainImg{
      width: 100%;
      /* filter: ${props=> props.isOverlay ? 'grayscale(1)' : 'none'}; */
      opacity: ${props=> props.isOverlay ? '0.15' : '1'};
      transition: all ease 0.3s 0s;
    }
    .descWrapper{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 3rem;
      .frontmatter{
        max-width: calc(100% / 4);
        h1{
          line-height: 1.2;
          font-size: 2.8rem;
        }
        p{
          margin: 2rem 0 1rem;
          font-size: 2rem;
          font-weight: 900;
        }
        em,span{
          display: block;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 1.2;
          color: #9b9b9b;
        }
      }
      .description{
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 100vh;
        margin-top: 0.5rem;
        overflow-y: auto;
        .ptWrapper{
          width: calc(100% - var(--titleW) - 3rem);
          height: fit-content;
          margin: ${props => props.img ? 'var(--imgH) 0 0' : 0};
          padding: 3rem;
          >div{
            >*{
              font-size: 1.4rem;
              line-height: 1.5;
            }
          }
        }
      }
    }
  }
`