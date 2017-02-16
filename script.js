var FETCH_METHOD = 'xhr'; // = 'fetch';

var token = 'abcd';

if (FETCH_METHOD === 'fetch') {

  req = fetch('peepcode-git.pdf', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then(function (response){
      return response.blob();
  }).then(setPDF);

} else if (FETCH_METHOD === 'xhr') {

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'peepcode-git.pdf');
  xhr.onreadystatechange = handler;
  xhr.responseType = 'blob';
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  xhr.send();

  function handler() {
    if (this.readyState === this.DONE) {
      if (this.status === 200) {
        // this.response is a Blob, because we set responseType above
        setPDF(this.response);
      } else {
        console.error('no pdf :(');
      }
    }
  }
}




function setPDF(blob) {
  document.querySelector('#blob').src = URL.createObjectURL(blob);
}
