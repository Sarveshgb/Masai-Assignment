function submitOTP(enteredOTP) {
  return new Promise((resolve, reject) => {
    if (enteredOTP === "1234") {
      resolve();
    } else {
      reject("Invalid OTP");
    }
  });
}
const enteredOTP = "1234";

submitOTP(enteredOTP)
  .then(() => {
    console.log("OTP is correct");
  })
  .catch((error) => {
    console.error(error);
  });
