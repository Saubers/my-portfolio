import styled from "styled-components";

// Bleeds to the edges of the parent `.project` card (which has 2.4rem
// padding) and rounds only the top corners so it sits flush under the
// card's own border-radius.
export const Container = styled.div`
  position: relative;
  margin: -2.4rem -2.4rem 1.6rem;
  width: calc(100% + 4.8rem);
  height: 22rem;
  border-radius: 1.2rem 1.2rem 0 0;
  overflow: hidden;
  background-color: var(--surface-hover);

  .embla {
    height: 100%;
    overflow: hidden;
  }

  .embla__container {
    display: flex;
    height: 100%;
  }

  .embla__slide {
    position: relative;
    flex: 0 0 100%;
    min-width: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    /* Blurred, zoomed copy of the same image fills the letterboxed
       space behind portrait screenshots so there's never flat empty
       background, regardless of the slide's aspect ratio. */
    .embla__slide__bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: blur(2.4rem) brightness(0.6);
      transform: scale(1.15);
    }

    img {
      position: relative;
      z-index: 1;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      user-select: none;
      cursor: zoom-in;
    }
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  transform: translateY(-50%);
  border: none;
  border-radius: 50%;
  background-color: rgba(15, 23, 42, 0.55);
  color: #fff;
  cursor: pointer;
  opacity: 0;
  /* Only animate opacity/color here — never "transform", otherwise the
     global button:hover rule (src/styles/global.ts) wins the cascade on
     this property (its button:hover selector outranks our base, non-hover
     rule) and silently replaces our translateY(-50%) centering with its
     own translateY(-1px), making the button visibly drop on hover. */
  transition: opacity 0.2s ease, background-color 0.2s ease;

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }

  &:hover {
    background-color: var(--primary);
    /* Re-assert centering so it isn't clobbered by the global
       button:hover { transform: translateY(-1px) } rule. */
    transform: translateY(-50%);
  }

  &:active {
    transform: translateY(-50%);
  }

  ${Container}:hover &,
  ${Container}:focus-within & {
    opacity: 1;
  }

  /* Always visible on touch devices, since there's no hover state. */
  @media (hover: none) {
    opacity: 1;
  }

  @media (max-width: 740px) {
    width: 2.8rem;
    height: 2.8rem;

    &.prev {
      left: 0.6rem;
    }

    &.next {
      right: 0.6rem;
    }

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export const Dots = styled.div`
  position: absolute;
  right: 0;
  bottom: 1rem;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 0.6rem;

  button {
    width: 0.7rem;
    height: 0.7rem;
    padding: 0;
    border: none;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &.active {
      background-color: #fff;
      transform: scale(1.3);
    }
  }
`;
