import { parentPort } from "worker_threads";

interface Props {
  handleAddToFavourites: React.Dispatch<React.SetStateAction<Baby[]>>;
  favourites: Baby[];
  BabyName: Baby;
  BabyList: Baby[];
  handleAddtoBabyList: React.Dispatch<React.SetStateAction<Baby[]>>;
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
          onClick={() => {
            {
              props.handleAddToFavourites([
                ...props.favourites,
                props.BabyName,
              ]);
            }
            {
              props.handleAddtoBabyList(
                props.BabyList.filter((x) => x.name !== props.BabyName.name)
              );
            }
          }}
        >
          {props.BabyName.name}
        </button>
      ) : (
        <button
          className="boy"
          onClick={() => {
            {
              props.handleAddToFavourites([
                ...props.favourites,
                props.BabyName,
              ]);
            }
            {
              props.handleAddtoBabyList(
                props.BabyList.filter((x) => x.name !== props.BabyName.name)
              );
            }
          }}
        >
          {props.BabyName.name}{" "}
        </button>
      )}
    </>
  );
}
