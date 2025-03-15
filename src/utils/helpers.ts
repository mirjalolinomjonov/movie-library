export function turncate(text: string, length: number, suffix: string | null) {
  if (text?.length > length) {
    return text.substring(0, length) + suffix
  } else {
    return text
  }
}
