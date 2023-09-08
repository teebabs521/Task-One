document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();

    // Current Day Of The Week
    const currentDayElement = document.querySelector("[data-testid='currentDayOfTheWeek']");
    currentDayElement.textContent = daysOfWeek[currentDate.getDay()];

    // Current UTC Time
    const currentUTCTimeElement = document.querySelector("[data-testid='currentUTCTime']");
    currentUTCTimeElement.textContent = currentDate.toUTCString();
});
