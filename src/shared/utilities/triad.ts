import { type MusicalKey } from "@shared/classes/MusicalKey"
import { getRemainder, getBalancedMod7 } from "@shared/utilities/math"
import { solfegeLetterFromButterflyIndex } from "@shared/utilities/solfegeLetter"


export function getTriadQuality(
  musicalKey: MusicalKey,
  triadOffset: number,
): string {
  const { diff1, diff2 } = getDiffs(musicalKey, triadOffset)
  if (diff1 === 3 && diff2 === 3) return "Diminished"
  if (diff1 === 3 && diff2 === 4) return "Minor"
  if (diff1 === 4 && diff2 === 3) return "Major"
  if (diff1 === 4 && diff2 === 4) return "Augmented"
  throw Error("Unexpected triad quality")
}

export function getTriadPattern(
  musicalKey: MusicalKey,
  triadOffset: number,
): string {
  const { diff1, diff2 } = getDiffs(musicalKey, triadOffset)
  if (diff1 === 3 && diff2 === 3) return "3, 3, 6"
  if (diff1 === 3 && diff2 === 4) return "3, 4, 5"
  if (diff1 === 4 && diff2 === 3) return "4, 3, 5"
  if (diff1 === 4 && diff2 === 4) return "4, 4, 4"
  throw Error("Unexpected triad pattern")
}

function getDiffs(
  musicalKey: MusicalKey,
  triadOffset: number,
): { diff1: number, diff2: number } {
  const note1 = musicalKey.noteFromSolfegeLetter(solfegeLetterFromButterflyIndex(getBalancedMod7(triadOffset)))
  const note2 = musicalKey.noteFromSolfegeLetter(solfegeLetterFromButterflyIndex(getBalancedMod7(triadOffset + 2)))
  const note3 = musicalKey.noteFromSolfegeLetter(solfegeLetterFromButterflyIndex(getBalancedMod7(triadOffset + 4)))
  const diff1 = getRemainder(7 * (note2.value - note1.value), 12)
  const diff2 = getRemainder(7 * (note3.value - note2.value), 12)
  return { diff1, diff2 }
}
