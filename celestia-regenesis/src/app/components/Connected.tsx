'use client'
import { FC } from "react"
import {
    Button,
    Container,
    Heading,
    HStack,
    Text,
    VStack,
    Image,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Connected: FC = () => {
    return (
        <VStack spacing={20}>
        <Container>
            <VStack spacing={8}>
            <Heading
                color="#00FF00"
                as="h1"
                size="2xl"
                noOfLines={1}
                textAlign="center"
            >
                Welcome Celestial.
            </Heading>

            <Text color="bodyText" fontSize="lg" textAlign="center">
                Each planet in Celestia Regenesis is a unique NFT, waiting for rejuvenation. Stake your claim and earn 
                <Text as='b'> $CRG</Text> tokens. Use your <Text as='b'> $CRG </Text> 
                to cleanse and revitalize your planet, unlocking new tools and exclusive community perks in the process!
            </Text>
            </VStack>
        </Container>

        <HStack spacing={10}>
            <Image src="avatar1.png" alt="" />
            <Image src="avatar2.png" alt="" />
            <Image src="avatar3.png" alt="" />
            <Image src="avatar4.png" alt="" />
            <Image src="avatar5.png" alt="" />
        </HStack>

        <Button bgColor="accent" color="white" maxW="380px">
            <HStack>
            <Text>mint planet</Text>
            <ArrowForwardIcon />
            </HStack>
        </Button>
        </VStack>
    )
}

export default Connected