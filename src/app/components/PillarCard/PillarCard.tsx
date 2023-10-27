'use client'

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Card, Flex, Heading, Link, Text } from "@radix-ui/themes";

const PersonCard = () => (
  <Card style={{ maxWidth: 240 }}>
    <Flex gap="3" align="center">
      <Avatar
        size="3"
        src="https://www.riotgames.com/darkroom/1280/61ab11790a2e7f00d196198cc763ebbc:17efcdcdd736b8a7aa5d48191bb2b9cf/marc.jpg"
        radius="full"
        fallback="MM"
      />
      <Box>
        <Text as="div" size="2" weight="bold">
          Marc Merrill
        </Text>
        <Text as="div" size="2" color="gray">
          Pillar President
        </Text>
      </Box>
    </Flex>
  </Card>
);

const DocumentLink = () => (
  <Flex>
    <Link>Games Ambition Deck</Link>
    <ArrowTopRightIcon />
  </Flex>
);

const ContactLink = () => (
  <Flex>
   <Link>#ask-game-studios</Link>
   <ArrowTopRightIcon /> 
  </Flex>
);

const PillarCard = () => (
  <Card style={{ maxWidth: 480 }}>
    <Flex gap="6">
      <Flex direction="column" gap="1">
        <Heading as="h6" size="2">Team Leads</Heading>
        <PersonCard />
      </Flex>
      <Flex direction="column" gap="1">
        <Heading as="h6" size="2">Documentation</Heading>
        <DocumentLink />
        <Heading as="h6" size="2">Contact</Heading>
        <ContactLink />
      </Flex>
    </Flex>
  </Card>
);

export default PillarCard;