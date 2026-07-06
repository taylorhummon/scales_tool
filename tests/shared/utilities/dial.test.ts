import { test, expect } from "vitest"

import { MusicalKey } from "@shared/classes/MusicalKey"
import { buildInclusiveRange } from "@shared/utilities/array"
import { noteAt } from "@shared/utilities/dial"


function exerciseNoteAt(
  musicalKey: MusicalKey,
): Array<string> {
  return getPositions(musicalKey).map(position => noteAt(musicalKey, position).name)
}

function getPositions(
  musicalKey: MusicalKey,
): Array<number> {
  const centerPosition =  musicalKey.mode
  return buildInclusiveRange(centerPosition - 3, centerPosition + 3)
}


test("noteAt() works", () => {
  expect(
    exerciseNoteAt(new MusicalKey({ mode: 0, root: 0 }))
  ).toStrictEqual(
    [ "B", "E", "A", "D", "G", "C", "F" ]
  )
  expect(
    exerciseNoteAt(new MusicalKey({ mode: -2, root: 1 }))
  ).toStrictEqual(
    [ "G♯", "C♯", "F♯", "B", "E", "A", "D" ]
  )
  expect(
    exerciseNoteAt(new MusicalKey({ mode: 1, root: -1 }))
  ).toStrictEqual(
    [ "A", "D", "G", "C", "F", "B♭", "E♭" ]
  )
})
