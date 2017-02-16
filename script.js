var html = document.querySelector('#html');
var pdf = document.querySelector('#pdf');

populateIframe(html, 'other.html', [['x-api-version', 'v1.2']]);
populateIframe(pdf, 'peepcode-git.pdf', [['Authorization', 'Bearer abcd1234']]);

function populateIframe(iframe, url, headers) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onreadystatechange = handler;
  xhr.responseType = 'blob';
  headers.forEach(function(header) {
    xhr.setRequestHeader(header[0], header[1]);
  });
  xhr.send();

  function handler() {
    if (this.readyState === this.DONE) {
      if (this.status === 200) {
        // this.response is a Blob, because we set responseType above
        iframe.src = URL.createObjectURL(this.response);
      } else {
        console.error('XHR failed', this);
      }
    }
  }


}

function setPDF(blob) {
  document.querySelector('#blob').src = URL.createObjectURL(blob);
}
