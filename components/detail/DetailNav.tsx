import { useRouter } from "next/router";
import styled from "styled-components";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import Image from "next/legacy/image";

export default function DetailNav({ allWorks }: { allWorks: any }) {
  const router = useRouter();
  const curWorks = allWorks?.findIndex(
    (item: any) => item.filename == router.query.slug + ".mdx"
  );
  const prevWorks = allWorks[curWorks - 1 < 0 ? "" : curWorks - 1];
  const nextWorks =
    allWorks[curWorks + 1 > allWorks.length - 1 ? "" : curWorks + 1];
  const navWorks = [prevWorks, nextWorks];

  return (
    <ContentNavWrapper>
      {navWorks.map((item, idx) => {
        if (item) {
          return (
            <li
              key={idx}
              className={idx === 0 ? "even" : "odd"}
              onClick={() =>
                router.push(`/works/${item.filename.replace(".mdx", "")}`)
              }
            >
              <div>
                <i>{idx == 0 ? <CgArrowLeft /> : <CgArrowRight />}</i>
                {item.frontMatter.img && (
                  <div className="imgWapper">
                    <Image
                      src={item.frontMatter.img}
                      width={2263}
                      height={905}
                      alt={item.frontMatter.description}
                    />
                  </div>
                )}
              </div>
              <div>
                <em>{idx == 0 ? "이전" : "다음"} 프로젝트</em>
                <p>{item?.frontMatter.title.replace(/\\n/g, " ")}</p>
              </div>
            </li>
          );
        } else {
          return (
            <li
              key={idx}
              style={{
                color: "#d9d9d9",
                cursor: "default",
                alignSelf: "flex-end",
                fontSize: "1.2rem",
              }}
              className={idx === 0 ? "even" : "odd"}
            >
              {idx === 0 ? "첫번째" : "마지막"} 프로젝트 입니다.
            </li>
          );
        }
      })}
    </ContentNavWrapper>
  );
}

const ContentNavWrapper = styled.ul`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: ${(props) => `1.5rem 3rem 5rem calc(var(--titleW) + 6rem)`};
  border-top: 1px solid #d9d9d9;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;
    i {
      font-size: 2.4rem;
    }
    .imgWapper {
      width: 16rem;
      height: 6rem;
      margin: 0.4rem 0 1.5rem;
      background: #d9d9d9;
    }
    em {
      display: block;
      margin-bottom: 0.2rem;
      font-size: 1.2rem;
    }
    p {
      max-width: 16rem;
      word-break: keep-all;
      font-size: 1.2rem;
      text-align: left;
    }
    &.odd {
      justify-content: flex-end;
      align-items: flex-end;
      margin-left: auto;
      text-align: right;
      > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
      }
      p {
        text-align: right;
      }
    }
  }
`;
