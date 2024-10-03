/**
 * Removes duplicate slashes from a given URL string.
 *
 * @param value - The URL string from which to remove duplicate slashes.
 *
 * @example
 * const url = 'http://example.com//path//to//resource';
 * const cleanedUrl = removeDublicateSlashes(url);
 * console.log(cleanedUrl); // Outputs: 'http://example.com/path/to/resource'
 */
export function removeDublicateSlashes(value: string) {
  /** Check if a url starts with the protocol */
  function getUrl(protocol: string) {
    if (value.startsWith(protocol)) {
      return {
        protocol,
        url: value.substring(protocol.length),
      };
    }

    return undefined;
  }

  const result = getUrl('https://') ||
    getUrl('http://') ||
    getUrl('://') || {
      protocol: '',
      url: value,
    };

  const urlParts = result.url.split('?');
  const urlNoQuery = urlParts[0].replace(/([^:]\/)\/+/g, '$1');

  return result.protocol + urlNoQuery + (urlParts[1] ? `?${urlParts[1]}` : '');
}
