'use client'

import { DotsVerticalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, Button, DropdownMenu, Flex, Heading, Text, TextField } from "@radix-ui/themes";

const Breadcrumb = () => (
    <Text>
      Riot Games
    </Text>
);

const Search = () => (
  <TextField.Root>
    <TextField.Slot>
      <MagnifyingGlassIcon />
    </TextField.Slot>
    <TextField.Input placeholder="Search in teams..." />
  </TextField.Root>
);

const Profile = () => (
    <Flex gap="2">
      <Avatar
        size="3"
        src="https://avatars.githubusercontent.com/u/6182601?s=400&u=9dceb50fc0452bfca757a77616cea315075cc128&v=4"
        radius="full"
        fallback="JZ"
      />
    </Flex>
);

const KebabMenu = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <Button variant="soft">
        <DotsVerticalIcon />
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
      <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
          <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

          <DropdownMenu.Separator />
          <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>

      <DropdownMenu.Separator />
      <DropdownMenu.Item>Share</DropdownMenu.Item>
      <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
        Delete
      </DropdownMenu.Item>
    </DropdownMenu.Content>
    </DropdownMenu.Root>
);

const Header = () => (
  <Flex direction="column" gap="6">
    <Flex justify="between">
      <Breadcrumb />
      <Flex gap="4">
        <Search />
        <Profile />
      </Flex>
    </Flex>
    <Flex justify="between">
      <Heading as="h1">Teams</Heading>
      <Flex gap="2">
        <Button>Create New Team</Button>
        <KebabMenu />
      </Flex>
    </Flex>
  </Flex>
);

export default Header;