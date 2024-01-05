export const makeNormalizeDataImg = arr => {
  return arr.map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
};
