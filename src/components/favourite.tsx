interface FavouriteItemProps {
  handleAddToFavourites(input: Baby[]): void;
  favourites: Baby[];
  BabyName: Baby;
  handleAddtoBabyList: React.Dispatch<React.SetStateAction<Baby[]>>;
  BabyList: Baby[];
}

type Baby = {
  name: string;
  sex: string;
  id: number;
};

export function FavouriteItem(props: FavouriteItemProps): JSX.Element {
  return (
    <>
      {props.BabyName.sex === "f" ? (
        <button
          className="girl"
          onClick={() => {
            removeFavourites(
              props.BabyName.name,
              props.favourites,
              props.handleAddToFavourites
            );

            props.handleAddtoBabyList([...props.BabyList, props.BabyName]);
          }}
        >
          {props.BabyName.name}
        </button>
      ) : (
        <button
          className="boy"
          onClick={() => {
            removeFavourites(
              props.BabyName.name,
              props.favourites,
              props.handleAddToFavourites
            );

            props.handleAddtoBabyList([...props.BabyList, props.BabyName]);
          }}
        >
          {props.BabyName.name}
        </button>
      )}
    </>
  );
}

export function removeFavourites(
  nameToRemove: string,
  favourites: Baby[],
  setFavourites: (name: Baby[]) => void
): void {
  const favouriteRemoved = favourites.filter(
    (fav) => fav.name !== nameToRemove
  );
  setFavourites(favouriteRemoved);
}
