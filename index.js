function register(status, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("registered");
      } else {
        reject("registration failed");
      }
    }, time);
  });
}

function getOtp(status, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("12345");
      } else {
        reject("get otp failed");
      }
    }, time);
  });
}

function verifyOtp(status, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("otp verified");
      } else {
        reject("otp verification failed");
      }
    }, time);
  });
}

function login(status, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("logged in");
      } else {
        reject("login failed");
      }
    }, time);
  });
}

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject("Input must be an array");
    }

    let results = [];
    count = 0;

    promises.forEach((item, idx) => {
      Promise.resolve(item)
        .then((res) => {
          results[idx] = res;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const ans = Promise.all([
  register(true, 1000),
  getOtp(true, 500),
  verifyOtp(true, 1000),
  login(true, 1000),
]);

ans
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const ans2 = Promise.myAll([
  register(true, 1000),
  getOtp(true, 500),
  verifyOtp(true, 1000),
  login(true, 1000),
]);

ans2
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
