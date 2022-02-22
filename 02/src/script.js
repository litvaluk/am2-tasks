const button = document.getElementById('fetch-btn');
const info = document.getElementById('status-text');

const fetchData = async () => {
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = () => {
      console.log(`STATE CHANGED -> ${xhr.readyState}`);
      if (xhr.readyState === xhr.OPENED) {
        info.textContent = 'LOADING';
      } else if (xhr.readyState === xhr.HEADERS_RECEIVED) {
        info.textContent = 'LOADED';
      } else if (xhr.readyState === xhr.LOADING) {
        info.textContent = 'DOWNLOADING';
      } else if (xhr.readyState === xhr.DONE) {
        info.textContent = 'FINISHED DOWNLOADING';
      }
    };

    xhr.open('GET', 'https://cdn.jsdelivr.net/pyodide/v0.16.1/full/scipy.data', true);
    xhr.send();
}

button.addEventListener('click', fetchData);