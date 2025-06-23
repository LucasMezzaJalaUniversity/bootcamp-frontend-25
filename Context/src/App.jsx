import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { ImageSizeProvider, useImageSizeContext } from './Context.jsx';

export default function App() {
  return (
    <ImageSizeProvider>
      <Controls />
      <hr />
      <List/>
    </ImageSizeProvider>
  )
}

function Controls() {
  const { isLarge, setIsLarge } = useImageSizeContext();

  return (
    <label>
      <input
        type="checkbox"
        checked={isLarge}
        onChange={(e) => setIsLarge(e.target.checked)}
      />
      Use large images
    </label>
  );
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const { imageSize } = useImageSizeContext();
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
