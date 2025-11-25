async function asyncFunction(status, d, promiseNumber) {
  console.log(`Promise number ${promiseNumber} is running`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("Promise resolved");
      } else {
        reject("Promise rejected");
      }
    }, d);
  });
}

async function batchPromise(promiseArray = [], chunkSize = 2) {
  let result = [];

  for (let i = 0; i < promiseArray.length; i += chunkSize) {
    let chunk = promiseArray.slice(i, i + chunkSize);
    let res = await Promise.allSettled(chunk.map((fn) => fn()));

    res.forEach((item) => {
      if (item.status === "fulfilled") {
        result.push({
          status: "fulfilled",
          value: item.value,
        });
      } else {
        result.push({
          status: "rejected",
          reason: item.reason,
        });
      }
    });
  }

  return result;
}

const promiseArray = [
  () => asyncFunction(true, 1000, 1),
  () => asyncFunction(false, 500, 2),
  () => asyncFunction(true, 2000, 3),
  () => asyncFunction(true, 1500, 4),
  () => asyncFunction(false, 100, 5),
];

const ans = batchPromise(promiseArray, 3);

ans.then((res) => {
  console.log(res);
});
