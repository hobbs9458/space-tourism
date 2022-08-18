document.querySelector(".love").addEventListener("click", (e) => {
  console.log("hello");
  const msg = document.querySelector(".message");
  msg.classList.remove("hidden");
});
