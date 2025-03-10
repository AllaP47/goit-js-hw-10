import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const delay = parseInt(form.elements.delay.value, 10); 
    const state = form.elements.state.value; 

    createPromise(delay, state)
      .then((delay) => {
        
        iziToast.success({
          title: '✅ OK',
          message: `Fulfilled promise in ${delay}ms`,
          position: 'topRight',
          backgroundColor: '#28a745',
          color: `#ffffff`,
        });
      })
      .catch((delay) => {
       
        iziToast.error({
          title: '❌ Error',
          message: `Rejected promise in ${delay}ms`,
          position: 'topRight',
          backgroundColor: '#dc3545',
          color: `#ffffff`,
        });
      });
  });
});


function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay); 
      } else {
        reject(delay); 
      }
    }, delay); 
  });
}
