import { TriadsTool } from "@triadsTool/TriadsTool"


export default function Page() {
  return (
    <>
      <h1>
        Triads Tool
      </h1>
      <ul className="instructions">
        <li>
          Rotation buttons select a triad.
        </li>
      </ul>
      <TriadsTool />
    </>
  )
}
