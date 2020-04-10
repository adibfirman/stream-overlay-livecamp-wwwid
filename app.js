(function generateTime() {
  const formatTime = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const getBox = document.querySelector(".box-time");
  setInterval(() => {
    const time = new Intl.DateTimeFormat("id", formatTime).format(new Date());
    const formatToColon = time.split(".").join(":");

    getBox.innerHTML = formatToColon;
  }, 1000);
})();

(function generateName() {
  const queryParams = window.location.search;
  if (queryParams) {
    const urlParams = new URLSearchParams(queryParams);
    const name = urlParams.get("name");
    const h3 = document.querySelector("h3");
    const span = h3.querySelector("span");

    h3.classList.remove("hide");
    span.innerText = name;
  }
})();
