import { Caption as CaptionCommon } from "@shared/components/caption/Caption"
import { type Derived } from "@shared/utilities/derived"


interface CaptionParameters {
  derived: Derived,
  className?: string,
}

export function Caption({
  derived,
  className,
}: CaptionParameters): React.ReactNode {
  return (
    <CaptionCommon className={className}>
      {getCaptionText(derived)}
    </CaptionCommon>
  )
}

function getCaptionText(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey } = derived
  const { rank } = currentMusicalKey
  if (rank === 0)  return "No sharps or flats."
  if (rank === 1)  return "One sharp."
  if (rank === -1) return "One flat."
  if (rank >= 2)   return `${getWrittenOutNumber(rank)} sharps.`
  if (rank <= -2)  return `${getWrittenOutNumber(- rank)} flats.`
  throw `Unexpected rank ${rank}`
}

function getWrittenOutNumber(
  n: number,
): string {
  if (n < 0) throw Error("Expected non-negative number")
  if (n >= WRITTEN_OUT_NUMBERS.length) return "Many"
  return WRITTEN_OUT_NUMBERS[n]
}

const WRITTEN_OUT_NUMBERS = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
]
