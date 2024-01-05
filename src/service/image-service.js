import axios from 'axios';

const API_KEY = '36083608-210db4eaa41b45ddd8228d7c6';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImages(searchQuery, perPage = 1) {
  const { data } = await axios.get(
    `${BASE_URL}?q=${searchQuery}&key=${API_KEY}&page=${perPage}&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log(data);
  return data;
}
