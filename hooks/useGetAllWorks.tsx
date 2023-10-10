import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function UseGetAllWorks(){
  const files = fs.readdirSync(path.join('','works'))
  const allWorks = files.map((filename,idx)=> {
    const works = fs.readFileSync(path.join('works', filename));
    const {data: frontMatter} = matter(works);
    const worksinfo = {filename: files[idx], frontMatter: frontMatter}

    return worksinfo
  })

  return allWorks;
}