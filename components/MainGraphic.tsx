import styled from "styled-components"

export default function MainGraphic() {
  return (
    <MainGraphicWrapper>
      <div>
        <p className="text">새단장 중입니다.</p>
      </div>
      <div className="scroll"></div>
    </MainGraphicWrapper>
  )
}

const MainGraphicWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .text {
    font-size: 1.6rem;
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
