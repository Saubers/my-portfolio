import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Overlay, ModalContent, CloseButton, NavButton } from "./styles";

interface ImageModalProps {
  images: string[];
  initialIndex: number;
  alt: string;
  onClose: () => void;
}

// Rendered via a portal into document.body so it always covers the full
// viewport, regardless of transformed/positioned ancestors (e.g. the
// project card's hover transform, which would otherwise clip a
// position: fixed child to the card's own bounds).
export const ImageModal: React.FC<ImageModalProps> = ({
  images,
  initialIndex,
  alt,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const hasMultiple = images.length > 1;

  const goToPrev = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft" && hasMultiple) {
        goToPrev();
      } else if (event.key === "ArrowRight" && hasMultiple) {
        goToNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goToPrev, goToNext, hasMultiple]);

  return createPortal(
    <Overlay onClick={onClose}>
      <CloseButton onClick={onClose} aria-label="Close image preview" type="button">
        <X size={24} aria-hidden="true" />
      </CloseButton>

      {hasMultiple && (
        <>
          <NavButton
            className="prev"
            onClick={(event) => {
              event.stopPropagation();
              goToPrev();
            }}
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft size={26} aria-hidden="true" />
          </NavButton>
          <NavButton
            className="next"
            onClick={(event) => {
              event.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
            type="button"
          >
            <ChevronRight size={26} aria-hidden="true" />
          </NavButton>
        </>
      )}

      <ModalContent onClick={(event) => event.stopPropagation()}>
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} — screenshot ${currentIndex + 1}`}
          decoding="async"
        />
      </ModalContent>
    </Overlay>,
    document.body
  );
};
