/**
 * Cleans a telephone string by removing any non-numeric characters.
 *
 * This function takes a telephone number as a string and returns a new string
 * that contains only the numeric characters (0-9) and the plus sign (+)
 * at the beginning, if present. All other characters are stripped away.
 *
 * @param value - The telephone number string to be cleaned.
 *
 * @example
 * const rawTelephone = '+0 (123) 456-7890';
 * const cleanedTelephone = cleanTelephone(rawTelephone);
 * console.log(cleanedTelephone); // Outputs: '+01234567890'
 */
export function cleanTelephone(value: string) {
  return value.replace(/[^0-9+]/g, '');
}
