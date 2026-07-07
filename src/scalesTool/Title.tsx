import { Title as TitleCommon } from "@shared/components/title/Title"
import { type Derived } from "@shared/utilities/derived"


interface TitleParameters {
  derived: Derived,
  className?: string,
}

export function Title({
  derived,
  className,
}: TitleParameters): React.ReactNode {
  return (
    <TitleCommon className={className}>
      {getText(derived)}
    </TitleCommon>
  )
}

function getText(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey } = derived
  const rootNoteName = currentMusicalKey.rootNote.name

  return (
    <>
      The <tspan className="fixed-width-font bold">{rootNoteName}</tspan> {currentMusicalKey.modeName} Scale
    </>
  )
}
