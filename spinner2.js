/* eslint-disable no-plusplus */
const spinnerChars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let i = 0; i < spinnerChars.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinnerChars[i]);
  }, i * 200);
}
