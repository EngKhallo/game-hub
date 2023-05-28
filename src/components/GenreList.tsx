import { HStack, Image, List, ListItem, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genres } from "../interfaces";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}
const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize='2xl' marginBottom='5'>Genres</Heading>
      <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              objectFit='cover'
              src={getCroppedImageUrl(genre.image_background)} />
            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
          </HStack>
        </ListItem>)}
      </List></>
  )
}

export default GenreList