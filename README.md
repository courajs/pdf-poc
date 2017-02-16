# PDFs, Blobs, and Object URLs

This is just a little demo which fetches pdf data via AJAX, and displays
it in an iframe to take advantage of whatever default browser plugin
displays pdfs.

It uses [`URL.createObjectURL`][object-url] and [`Blob`][blob].

[See it in action!](https://courajs.github.io/pdf-poc)

The "Git Internals" pdf is provided under the Creative Commons
Attribution-ShareAlike license by Scott Chacon and Pluralsight, and is
available at https://github.com/pluralsight/git-internals-pdf.

[object-url]: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
[blob]: https://developer.mozilla.org/en-US/docs/Web/API/Blob
