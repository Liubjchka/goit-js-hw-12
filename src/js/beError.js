import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const noImagesError =
  'Sorry, there are no images matching your search query. Please try again!';
export const writeSomething = 'Please, write something';
export const endSearchesRults =
  'We are sorry, but you have reached the end of search results.';

export function beError(message) {
  iziToast.error({
    position: 'topRight',

    maxWidth: '432',
    backgroundColor: '#ef4040',
    messageColor: '#fafafb',
    messageSize: '16px',
    message: message,
  });
}
