export async function pixabayApi(input) {
  const API_KEY = '42447990-17cd7de231c9689be9e26f0f6';
  const BASE_URL = 'https://pixabay.com/api/';
  const param = `q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;

  const URL = `${BASE_URL}?key=${API_KEY}&${param}`;

  return await fetch(URL).then(answer => {
    if (!answer.ok) {
      throw new Error(answer.status);
    }
    return answer.json();
  });
}
