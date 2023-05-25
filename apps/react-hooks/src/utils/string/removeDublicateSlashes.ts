/**
 * Remove duplicate slashes from string
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
