import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react";
import { BsSearch } from "react-icons/bs"

interface Props{
    onSearch: (search: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    if (ref.current) console.log(ref.current.value)
    return (
        <form style={{ width: '100%' }}
            onSubmit={(e) => {
                e.preventDefault();
                if (ref.current) onSearch(ref.current.value);
            }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={5} placeholder="Search Games" variant="filled" />
            </InputGroup>
        </form>
    )
}

export default SearchInput