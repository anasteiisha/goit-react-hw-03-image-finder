import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import * as s from './ImageGallery.styled';

export const ImageGallery = ({ hits, handleClickOnImg }) => {
  return (
    <s.Gallery>
      {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          handleClickOnImg={handleClickOnImg}
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        ></ImageGalleryItem>
      ))}
    </s.Gallery>
  );
};
