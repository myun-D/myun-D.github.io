interface IFrontmatter {
  date: string
  img: string
  info: string
  meta: string
  relation: string
  subTitle: string
  title: string
}
export interface IAllworks {
  filename: string,
  frontMatter: IFrontmatter
}