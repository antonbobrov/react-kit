/** Clean telephone string from extra symbols */
export function cleanTelephone(value: string) {
  return value.replace(/[^0-9+]/g, '');
}
