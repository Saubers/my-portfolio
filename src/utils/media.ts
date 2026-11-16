// Tiny helper shared by ProjectCarousel and ImageModal: both accept a flat
// list of media paths (images and, optionally, one video) and need to know
// which native tag to render for a given entry. Detection is based purely on
// file extension, so no extra "type" field has to travel alongside each path.
const VIDEO_EXTENSIONS = /\.(webm|mp4|mov)$/i;

export function isVideoSrc(src: string): boolean {
  return VIDEO_EXTENSIONS.test(src);
}
