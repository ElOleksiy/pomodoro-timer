const timeOption = document.getElementById("time-option");

timeOption.addEventListener("change", (e) => {
  const val = e.target.value;
  if (val < 1 || val > 60) {
    timeOption.value = 25;
  }
});

const saveBtn = document.getElementById("save-option");
saveBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    timeOption: timeOption.value,
    timer: 0,
    isRunning: false,
  });
});

chrome.storage.local.get(["timeOption"], (res) => {
  timeOption.value = res.timeOption;
});
