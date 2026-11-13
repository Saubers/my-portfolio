import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(1.2rem);
  -webkit-backdrop-filter: blur(1.2rem);
  animation: fade-in 0.2s ease;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 1.2rem;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 90vw;
    max-height: 90vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 0.8rem;
    box-shadow: var(--shadow-lg);
    animation: fade-in 0.2s ease;
  }
`;

export const NavButton = styled.button`
  position: fixed;
  top: 50%;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.8rem;
  height: 4.8rem;
  transform: translateY(-50%);
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  cursor: pointer;
  /* Only transition opacity/color-ish props — "transform" is intentionally
     left out so it never competes with the global button:hover rule (see
     ProjectCarousel/styles.ts for the full explanation). */
  transition: background-color 0.2s ease;

  &.prev {
    left: 2.4rem;
  }

  &.next {
    right: 2.4rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    /* Re-assert centering so the global button:hover transform doesn't
       knock this off-center. */
    transform: translateY(-50%);
  }

  &:active {
    transform: translateY(-50%);
  }

  @media (max-width: 600px) {
    width: 3.6rem;
    height: 3.6rem;

    &.prev {
      left: 0.8rem;
    }

    &.next {
      right: 0.8rem;
    }

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 2.4rem;
  right: 2.4rem;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    top: 1.2rem;
    right: 1.2rem;
    width: 3.6rem;
    height: 3.6rem;

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;
