import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genres } from "../interfaces";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
}
const GenreList = ({onSelectedGenre}: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />

  return (
    <List>
      {data.map(genre =>
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={() => onSelectedGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button >
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList