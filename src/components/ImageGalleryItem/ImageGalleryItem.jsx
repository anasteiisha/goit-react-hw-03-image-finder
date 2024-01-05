import * as s from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  handleClickOnImg,
  largeImageURL,
}) => {
  return (
    <s.ImageGalleryItem>
      <s.ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => handleClickOnImg(largeImageURL, tags)}
      />
    </s.ImageGalleryItem>
  );
};
