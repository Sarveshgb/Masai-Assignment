function checkCount(count) {
  return new Promise((resolve, reject) => {
    if (count > 0) {
      resolve("Positive count");
    } else {
      reject("Negative count");
    }
  });
}
console.log(
  checkCount(0)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    })
);
