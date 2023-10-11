import Image from "next/image"
import styled from "styled-components"

export default function MainGraphic() {
  return (
    <MainGraphicWrapper>
        <section>
          <div>
            <Image 
              width={486}
              height={119}
              src={"/img/img_text1.svg"}
              alt="하트"
              style={{
                width: "100%",
                height: "auto"
              }}
            />
          </div>
        </section>
        <section>
          <div>
            <Image 
              width={718}
              height={142}
              src={"/img/img_text2.svg"}
              alt="(graphic)"
              style={{
                width: "100%",
                height: "auto"
              }}
            />
          </div>
        </section>
        <section>
          <div>
            <Image 
              width={729}
              height={132}
              src={"/img/img_text3.svg"}
              alt="designer"
              style={{
                width: "100%",
                height: "auto"
              }}
            />
          </div>
        </section>
        <section>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <div className="heart">
          <Image 
            width={620}
            height={292}
            src={"/img/icon_main_heart.svg"}
            alt="하트"
            style={{
              width: "100%",
              height: "auto"
            }}
          />
        </div>
        <div className="clova">
          <Image 
            width={250}
            height={250}
            src={"/img/icon_main_clova.svg"}
            alt="클로버"
            style={{
              width: "100%",
              height: "auto"
            }}
          />
        </div>
      <div className="scroll"></div>
    </MainGraphicWrapper>
  )
}

const MainGraphicWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: url("/img/img_main_bg.svg") no-repeat 50% 50%;
  background-size: cover;

  section{
    display: flex;
    align-items: center;
    padding: 0 10rem;
    width: 100%;
    height: calc(100vh / 4);
    border-bottom: 1px solid #000;
    :nth-of-type(2){
      justify-content: center;
    }
    :nth-of-type(3){
      justify-content: flex-end;
    }
    &:last-of-type{
      border-bottom: none;
    }
    div{
      max-width: 900px;
    }

    span{
      width: 30rem;
      height: 2rem;
      background: #000;
      border-radius: 20rem;
      margin: 0 3.5rem;

      :first-child{
        width: 20rem;
        margin: 0;
      }
      :last-child{
        width: 8rem;
        margin: 0;
      }
    }
  }
 
  .heart{
    width: 35rem;
    position: absolute;
    top: 40%;
    left: 0;
  }
  .clova{
    width: 20rem;
    position: absolute;
    top: 4rem;
    right: 4rem;
  }

  .scroll {
    position: absolute;
    bottom: 0rem;
    left: 50%;
    width: 2rem;
    height: 3rem;
    border: 2px solid #000;
    transform: translateX(-50%);
    border-radius: 30px;
    opacity: 0;
    animation: scrollVisible 0.3s linear 1s forwards;
  }
  .scroll::after {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 50%;
    display: block;
    width: 2px;
    height: 0.8rem;
    background: #000;
    transform: translateX(-50%);
    border-radius: 20px;
    animation: scrollAni 1.4s linear 0s infinite;
  }

  @keyframes scrollVisible {
    0% {
      bottom: 0;
      opacity: 0;
    }
    100% {
      bottom: 3rem;
      opacity: 0.6;
    }
  }
  @keyframes scrollAni {
    0% {
      top: 0.3rem;
      opacity: 0;
    }
    50% {
      top: 1rem;
      opacity: 1;
    }
    100% {
      top: 1.5rem;
      opacity: 0;
    }
  }
`
