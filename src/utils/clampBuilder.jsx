// Takes the viewport widths in pixels and the font sizes in rem
export default function clampBuilder(
  minWidthPx,
  maxWidthPx,
  minFontSize,
  maxFontSize
) {
  const root = document.querySelector('html');
  const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2));

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${slope *
    100}vw, ${maxFontSize}rem )`;
}

// clampBuilder( 360, 840, 1, 3.5 ) -> "clamp( 1rem, -0.875rem + 8.333vw, 3.5rem )"
