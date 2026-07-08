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
      {getTitleText(derived)}
    </TitleCommon>
  )
}

function getTitleText(
  derived: Derived,
): React.ReactNode {
  const { currentMusicalKey } = derived
  if (currentMusicalKey.mode === -2) {
    return <>The Major Mode</>
  }
  if (currentMusicalKey.mode === 1) {
    return <>The Minor Mode</>
  }
  return <>The {currentMusicalKey.modeName} Mode</>
}
