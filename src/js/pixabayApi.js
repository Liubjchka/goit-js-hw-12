import axios from 'axios';

export async function pixabayApi(query, currentPage) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const KEY_API = '?key=42447990-17cd7de231c9689be9e26f0f6';
  const PARAMS = `&q=${query}&image_type=photo&page=currentPage&orientation=horizontal&safesearch=true&per_page=15`;

  const URL = BASE_URL + END_POINT + KEY_API + PARAMS;

  const resp = await axios.get(URL);
  return resp.data;
}
