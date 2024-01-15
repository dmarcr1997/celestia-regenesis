'use client'

import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import { useWallet } from "@solana/wallet-adapter-react"
import Head from "next/head"
import styles from './page.module.css'
import Connected from "./components/Connected"
import NavBar from "./components/NavBar"
import Disconnected from "./components/Disconnected"

export default function Home() {
  const { connected } = useWallet()
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Celestia Regenesis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected ? "" : "url('/images/CRGBg.png')"}
        backgroundPosition="center"
        color="white"
        fontFamily="Roboto, sans-serif"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
					<NavBar />

          <Spacer />
            <Center>
						  {connected ? <Connected /> : <Disconnected />}
            </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/DamonMRocha"
                target="_blank"
                rel="noopener noreferrer"
              >
                built by @DamonMRocha
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}