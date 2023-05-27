import { Menu, MenuButton, Text, Button } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const SortSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            <Text>Order By: </Text>
        </MenuButton>
    </Menu>
  )
}

export default SortSelector