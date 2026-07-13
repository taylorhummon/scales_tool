"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { Burger, Divider, Drawer, Group, ScrollArea } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import styles from "./header.module.scss"
import Logo from "./_images/logo.svg"


const TOOL_LINKS = [
  { url: "/", label: "Scales" },
  { url: "/modes/", label: "Modes" },
  { url: "/triads/", label: "Triads" },
]


export default function Header() {
  const [ opened, { toggle, close } ] = useDisclosure(false)
  const pathname = usePathname()
  const toolLinks = TOOL_LINKS.map(({ url, label }) =>
    <NavigationLink
      key={label}
      url={url}
      label={label}
      isActive={pathname === url}
      close={close}
    />
  )

  return (
    <header className={styles["header"]}>
      <div className={styles["inner"]}>
        <Group>
          <Image
            src={Logo}
            alt="Visual Music Tools"
            width={204}
            height={32}
          />
          <Group
            ml={45}
            gap={5}
            visibleFrom="sm"
          >
            {toolLinks}
          </Group>
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          color="white"
          size="sm"
          hiddenFrom="sm"
          ml={30}
          aria-label="Toggle navigation"
        />
      </div>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Visual Music Tools"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea
          h="calc(100vh - 80px)"
          mx="-md"
          className={styles["drawer-items"]}
        >
          <Divider my="sm" />
          {toolLinks}
        </ScrollArea>
      </Drawer>
    </header>
  )
}

interface NavigationLinkParameters {
  url: string,
  label: string,
  isActive: boolean,
  close: () => void,
}

function NavigationLink({
  url,
  label,
  isActive,
  close,
}: NavigationLinkParameters): React.ReactNode {
  return (
    <a
      href={url}
      className={styles["link"]}
      onClick={
        (event) => {
          if (isActive) {
            event.preventDefault()
            close()
          }
        }
      }
    >
      {label}
    </a>
  )
}
