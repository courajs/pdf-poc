fetch('/peepcode-git.pdf').then(function (response){
  return response.blob();
})
.then(function(blob) {
  document.querySelector('#blob').src = URL.createObjectURL(blob);
});
