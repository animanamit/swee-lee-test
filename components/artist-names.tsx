const ArtistNames = ({
  letter,
  names,
}: {
  letter: string;
  names: string[];
}) => {
  return (
    <div className="flex flex-col bg-white text-black">
      <div className=" space-y-3 py-6 border-b-[0.5px] border-gray-300">
        <h4 className="font-semibold text-orange-400">{letter}</h4>
        <div className="grid  md:grid-cols-5 grid-cols-2 gap-y-2 text-gray-700">
          {names.map((item, index) => (
            <h4 key={index}>{item}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistNames;
