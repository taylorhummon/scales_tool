import { TriadsTool } from "@triadsTool/TriadsTool"


export default function Page() {
  return (
    <>
      <h1>
        Triads Tool
      </h1>
      <ul className="instructions">
        <li>
          Rotation buttons select the triad.
        </li>
        <li>
          Sharp and flat buttons change the rank.
        </li>
      </ul>
      <TriadsTool />
    </>
  )
}
