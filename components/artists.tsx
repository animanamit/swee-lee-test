import artistData from "../db/artist-data";
import ArtistNames from "./artist-names";
const Artists = () => {
  return (
    <div className="w-full bg-white text-black pb-4 px-6 md:px-12">
      {artistData.map((item, index) => (
        <ArtistNames key={index} letter={item.letter} names={item.artists} />
      ))}
    </div>
  );
};

export default Artists;
