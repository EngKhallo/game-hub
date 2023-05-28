import { Menu, MenuButton, Text, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const setOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: '-name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]

  const currentSortOrder = setOrders.find(order => order.value === selectedOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <Text>Order By: {currentSortOrder?.label || 'relevance'}</Text>
      </MenuButton>
      <MenuList>
        {setOrders.map(order =>
          <MenuItem onClick={() => onSelectSortOrder(order.value)}
            key={order.value} value={order.value}>
            {order.label}
          </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default SortSelector