import axios from 'axios';

const API_KEY = '50366360-a8ee66cb63e3deacadb68e28f';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  };
  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(() => {
      throw new Error('Failed to fetch images from Pixabay');
    });
}
