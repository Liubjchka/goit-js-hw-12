import axios from 'axios';
import { searchImages } from 'pixabay-api';
import { offBtnLoadMore } from './switchBtn';

export async function pixabayApi(query, pageCount) {
  offBtnLoadMore();
  const API_KEY = '42447990-17cd7de231c9689be9e26f0f6';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  const params = {
    page: pageCount,
    per_page: 15,
  };

  const res = await axios.get(url, { params });
  return res.data;
}
