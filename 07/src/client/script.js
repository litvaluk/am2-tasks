window.onload = () => {
  var eventSource = new EventSource('http://localhost:8080/');
  eventSource.onmessage = function(event) {
    let newElement = document.createElement('p')
    newElement.innerText = event.data
    document.getElementById('jokes').appendChild(newElement)
  };
};