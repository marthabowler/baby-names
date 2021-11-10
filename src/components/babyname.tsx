interface Props {
  handleAddToFavourites: React.Dispatch<React.SetStateAction<Baby[]>>;
  favourites: Baby[];
  BabyName: Baby;
}
type Baby = {
  name: string;
  sex: string;
  id: number;
};

export function BabyButton(props: Props): JSX.Element {
  return (
    <>
      {props.BabyName.sex === "f" ? (
        <button
          className="girl"
          onClick={() =>
            props.handleAddToFavourites([...props.favourites, props.BabyName])
          }
        >
          {props.BabyName.name}
        </button>
      ) : (
        <button
          className="boy"
          onClick={() =>
            props.handleAddToFavourites([...props.favourites, props.BabyName])
          }
        >
          {props.BabyName.name}{" "}
        </button>
      )}
    </>
  );
}
