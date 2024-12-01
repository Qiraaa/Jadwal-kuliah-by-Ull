document.getElementById("day-filter").addEventListener("change", function () {
  const selectedDay = this.value;
  const rows = document.querySelectorAll("#schedule-body tr");
  rows.forEach((row) => {
    if (selectedDay === "all" || row.getAttribute("data-day") === selectedDay) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
