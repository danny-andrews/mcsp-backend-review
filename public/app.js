console.log("hello");
fetch("/api/test")
  .then((res) => res.json())
  .then((res) => {
    console.log("received response", res);
  });
