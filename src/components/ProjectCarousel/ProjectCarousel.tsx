import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container, Dots, NavButton } from "./styles";
import { ImageModal } from "../ImageModal/ImageModal";

interface ProjectCarouselProps {
  // Image paths, e.g. "/assets/projects/root-track/1.jpg". Mixed portrait
  // (mobile) and landscape (desktop) images are supported in the same list.
  images?: string[];
  // Used for accessible alt text on each slide.
  title: string;
}

// Renders nothing when a project has no screenshots, so the parent card
// falls back to its icon-only header without any extra markup or crashes.
export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  title,
}) => {
  const hasMultiple = !!images && images.length > 1;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: hasMultiple,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Container>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, index) => (
            <div className="embla__slide" key={src}>
              <div
                className="embla__slide__bg"
                style={{ backgroundImage: `url(${src})` }}
                aria-hidden="true"
              />
              <img
                src={src}
                alt={`${title} — screenshot ${index + 1}`}
                loading="lazy"
                decoding="async"
                draggable={false}
                onClick={() => setLightboxIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {hasMultiple && (
        <>
          <NavButton
            className="prev"
            onClick={scrollPrev}
            aria-label="Previous screenshot"
            type="button"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </NavButton>
          <NavButton
            className="next"
            onClick={scrollNext}
            aria-label="Next screenshot"
            type="button"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </NavButton>

          <Dots>
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === selectedIndex ? "active" : ""}
                onClick={() => scrollTo(index)}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </Dots>
        </>
      )}

      {lightboxIndex !== null && (
        <ImageModal
          images={images}
          initialIndex={lightboxIndex}
          alt={title}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </Container>
  );
};
