import { ModesTool } from "@modesTool/ModesTool"

import styles from "./page.module.scss"


export default function Page() {
  return (
    <>
      <h1>
        Modes Tool
      </h1>
      <ul className={styles["instructions"]}>
        <li>
          Arrow buttons change the mode.
        </li>
      </ul>
      <ModesTool />
    </>
  )
}
