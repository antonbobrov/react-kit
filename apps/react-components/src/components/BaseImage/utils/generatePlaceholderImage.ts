import { isUndefined } from '@anton.bobrov/react-hooks';

const defaultPlaceholderImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAAAAAKVnuc8AAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAFFJREFUaEPtzTEBADAMBKG+f9PVwJLpMMDbgRJSQkpICSkhJaSElJASUkJKSAkpISWkhJSQElJCSkgJKSElpISUkBJSQkpICSkhJaSElJASsH3mMicR4O5sFAAAAABJRU5ErkJggg==';

export function generatePlaceholderImage(
  width: string | number | undefined,
  height: string | number | undefined
) {
  if (isUndefined(width) && isUndefined(height)) {
    return defaultPlaceholderImage;
  }

  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" fill="transparent"/></svg>`;
  const svgBase64 = btoa(svg);

  return `data:image/svg+xml;base64,${svgBase64}`;
}
