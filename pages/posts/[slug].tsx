import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import {serialize} from 'next-mdx-remote/serialize';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { MDXRemote } from 'next-mdx-remote';
import { Context } from 'vm';

const components = {SyntaxHighlighter}

function PostDetail({frontMatter, mdxSource}: {frontMatter: any, mdxSource: any}){

  return(
    <div>
      <h1 className='archivo'>{frontMatter.title}</h1>
      <h1>{frontMatter.date}</h1>
      <h1>{frontMatter.subTitle}</h1>
      <h1>{frontMatter.info}</h1>

      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('','posts'))

  console.log(files)

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

const getStaticProps = async ({params: {slug}}: Context) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx' ));

  const {data: frontMatter, content} = matter(markdownWithMeta);
  console.log(frontMatter)
  const mdxSource = await serialize(content)


  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticPaths, getStaticProps }
export default PostDetail