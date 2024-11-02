function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Abhi", url: "https://google.com" });
    }, 3000);
  });
}
