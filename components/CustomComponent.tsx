import Image from "next/legacy/image";
import styled from "styled-components";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { Fragment, useRef, useState } from "react";
import iconPagination from "/public/img/icon_pagination.svg";

export default function CustomComponent({ img }: { img: Array<string> }) {
  const [currentImg, setCurrentImg] = useState(0);
  const containerW = useRef<HTMLDivElement>(null);

  const onPageMove = (num: number) => {
    if (num < 0) {
      setCurrentImg(img.length - 1);
      return;
    }
    if (num > img.length - 1) {
      setCurrentImg(0);
      return;
    }
    setCurrentImg(num);
  };

  return (
    <ComponentWrapper
      ref={containerW}
      CWidth={containerW.current?.clientWidth!}
      currentImg={currentImg}
      width={100 * img.length}
    >
      {img.length > 1 && (
        <span
          onClick={() => onPageMove(currentImg - 1)}
          className="navBtn prev"
        >
          <i>
            <FiArrowLeftCircle />
          </i>
        </span>
      )}
      <ul className="slide">
        {img.map((item, idx) => (
          <li key={idx}>
            <Image
              src={item}
              width={1941}
              height={959}
              layout="responsive"
              alt={item}
            />
          </li>
        ))}
      </ul>
      {img.length > 1 && (
        <ul className="pagination">
          {img.map((_, idx) => (
            <Fragment key={idx}>
              {currentImg === idx ? (
                <li
                  className={currentImg === idx ? "active" : ""}
                  onClick={() => onPageMove(idx)}
                >
                  <Image
                    src={iconPagination}
                    layout="responsive"
                    alt="페이지네이션 이미지"
                  />
                </li>
              ) : (
                <li
                  className={currentImg === idx ? "active" : ""}
                  onClick={() => onPageMove(idx)}
                >
                  {idx + 1}
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      )}
      {img.length > 1 && (
        <span
          onClick={() => onPageMove(currentImg + 1)}
          className="navBtn next"
        >
          <i>
            <FiArrowRightCircle />
          </i>
        </span>
      )}
    </ComponentWrapper>
  );
}

const ComponentWrapper = styled.div<{
  CWidth: number;
  currentImg: number;
  width: number;
}>`
  position: relative;
  overflow: hidden;
  .navBtn {
    z-index: 2;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.3);
    &.prev {
      left: 1.5rem;
    }
    &.next {
      right: 1.5rem;
    }
    i {
      font-size: 2rem;
      color: rgba(0, 0, 0, 0.3);
    }
  }
  .slide {
    transform: ${(props) =>
      `translateX(-${props.currentImg * props.CWidth}px)`};
    display: flex;
    width: ${(props) => props.width + "%"};
    transition: all ease 0.3s 0s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .pagination {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-50%);
    li {
      width: 0.6rem;
      height: 0.2rem;
      background-color: rgba(0, 0, 0, 0.3);
      text-indent: -999px;
      margin-right: 0.6rem;
      cursor: pointer;
      &.active {
        height: 0.6rem;
        background: none;
      }
    }
  }
`;
