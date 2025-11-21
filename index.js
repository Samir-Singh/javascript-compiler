function myPromise(executor) {
  let onResolve, onReject;

  this.myThen = function (cb) {
    if (typeof cb === "function") {
      cb(onResolve);
    }
  };

  this.myCatch = function (cb) {
    if (typeof cb === "function") {
      cb(onReject);
    }
  };

  function myResolve(data) {
    onResolve = data;
    return this;
  }

  function myReject(error) {
    onReject = error;
    return this;
  }

  executor(myResolve, myReject);
}

const ans = new myPromise((myResolve, myReject) => {
  console.log("My Promise is running");
  if (true) {
    myResolve("My Promise is resolved");
  } else {
    myReject("My Promise is rejected");
  }
});

ans.myThen((data) => {
  console.log(data);
});

const promise = new Promise((resolve, reject) => {
  console.log("Promise is running");
  if (true) {
    resolve("Promise is resolved");
  } else {
    reject("Promise is rejected");
  }
});

promise.then((data) => {
  console.log(data);
});
