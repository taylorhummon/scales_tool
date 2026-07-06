import { ScalesTool } from "@scalesTool/ScalesTool"

import styles from "./page.module.scss"


export default function Page() {
  return (
    <>
      <h1>
        Scales Tool
      </h1>
      <ul className={styles["instructions"]}>
        <li>
          Plus and minus buttons change keys within a mode.
        </li>
        <li>
          Blue dot buttons move between relative keys.
        </li>
        <li>
          Sharp and flat buttons move between parallel keys.
        </li>
      </ul>
      <ScalesTool />
    </>
  )
}
