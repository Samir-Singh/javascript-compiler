async function batchRequests(apiCalls, chunkSize = 5) {
  let results = [];

  for (let i = 0; i < apiCalls.length; i += chunkSize) {
    const chunk = apiCalls.slice(i, i + chunkSize);

    const response = await Promise.all(
      chunk.map((fn) => fn().catch((err) => err))
    );

    results.push(...response);
  }

  return results;
}

// Example: 100 dummy API functions
const apiCalls = Array.from({ length: 100 }, (_, i) => {
  return () =>
    fetch(`https://dummyjson.com/products/${i + 1}`).then((res) => res.json());
});

batchRequests(apiCalls, 5).then((finalResult) => {
  console.log("All API Calls Done");
  console.log(finalResult);
});
