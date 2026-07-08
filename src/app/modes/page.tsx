import { ModesTool } from "@modesTool/ModesTool"


export default function Page() {
  return (
    <>
      <h1>
        Modes Tool
      </h1>
      <ul className="instructions">
        <li>
          Arrow buttons change the mode.
        </li>
      </ul>
      <ModesTool />
    </>
  )
}
