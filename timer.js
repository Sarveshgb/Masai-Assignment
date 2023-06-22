function waitPromise(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

waitPromise(4000).then((time) => {
  console.log(`Promise resolved after ${time}  milliseconds`);
});
