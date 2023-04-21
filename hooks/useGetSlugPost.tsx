import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

export default async function UseGetSlugPost(slug: any){
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx' ));
  const {data: frontMatter, content} = matter(markdownWithMeta);
  const mdxSource = await serialize(content)

  return {frontMatter, mdxSource};
}