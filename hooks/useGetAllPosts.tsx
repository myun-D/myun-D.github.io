import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function UseGetAllPosts(){
  const files = fs.readdirSync(path.join('','posts'))
  const allPosts = files.map((filename,idx)=> {
    const postTitle = fs.readFileSync(path.join('posts', filename));
    const {data: frontMatter} = matter(postTitle);
    const postinfo = {filename: files[idx], frontMatter: frontMatter}

    return postinfo
  })

  return allPosts;
}