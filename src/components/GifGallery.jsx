import GifCard from '"./GifCard"'; 


const gifData = [
  { title: 'Gif 1', gifSrc: './download.gif' },
  { title: 'Gif 2', gifSrc: gif2 },

];

const GifGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center">
        {gifData.map((gif, index) => (
          <GifCard key={index} title={gif.title} gifSrc={gif.gifSrc} />
        ))}
      </div>
    </div>
  );
};

export default GifGallery;
