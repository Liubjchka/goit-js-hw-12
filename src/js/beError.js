import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function beError() {
  iziToast.error({
    position: 'topRight',
    maxWidth: '432',
    backgroundColor: '#ef4040',
    messageColor: '#fafafb',
    messageSize: '16px',
    message:
      'Sorry, there are no images matching your search query.Please try again!',
  });
}
