// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");
const attendeeList = document.getElementById("attendeeList");

// Track attendance
const maxCount = 50;
const savedAttendance = JSON.parse(localStorage.getItem("attendance")) || {};
let count = savedAttendance.total || 0;
let waterCount = savedAttendance.water || 0;
let zeroCount = savedAttendance.zero || 0;
let powerCount = savedAttendance.power || 0;
let attendees = savedAttendance.attendees || [];

const waterCountElement = document.getElementById("waterCount");
const zeroCountElement = document.getElementById("zeroCount");
const powerCountElement = document.getElementById("powerCount");

function updateAttendanceDisplay() {
  attendeeCount.textContent = count;

  const percentage = Math.round((count / maxCount) * 100) + "%";
  progressBar.style.width = percentage;

  waterCountElement.textContent = waterCount;
  zeroCountElement.textContent = zeroCount;
  powerCountElement.textContent = powerCount;

  return percentage;
}

function saveAttendance() {
  const attendance = {
    total: count,
    water: waterCount,
    zero: zeroCount,
    power: powerCount,
    attendees: attendees,
  };

  localStorage.setItem("attendance", JSON.stringify(attendance));
}

function displayAttendees() {
  attendeeList.innerHTML = "";

  attendees.forEach(function (attendee) {
    const listItem = document.createElement("li");
    listItem.textContent = `${attendee.name} - ${attendee.team}`;
    attendeeList.appendChild(listItem);
  });
}

updateAttendanceDisplay();
displayAttendees();

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  // Increment count
  count++;
  const percentage = updateAttendanceDisplay();
  console.log("Total check-ins: ", count);

  // Update progress bar
  console.log(`Progress: ${percentage}`);

  // Update the selected team's counter
  if (team === "water") {
    waterCount++;
    waterCountElement.textContent = waterCount;
  } else if (team === "zero") {
    zeroCount++;
    zeroCountElement.textContent = zeroCount;
  } else if (team === "power") {
    powerCount++;
    powerCountElement.textContent = powerCount;
  }

  attendees.push({ name: name, team: teamName });
  displayAttendees();
  saveAttendance();

  // Show welcmoe message
  let message = `Welcome, ${name} from ${teamName}`;

  if (count >= maxCount) {
    const highestCount = Math.max(waterCount, zeroCount, powerCount);
    const winningTeams = [];

    if (waterCount === highestCount) {
      winningTeams.push("Team Water Wise");
    }
    if (zeroCount === highestCount) {
      winningTeams.push("Team Net Zero");
    }
    if (powerCount === highestCount) {
      winningTeams.push("Team Renewables");
    }

    message = `Celebration! We reached ${maxCount} attendees. Highest attendance: ${winningTeams.join(", ")}.`;
  }

  greeting.textContent = message;
  greeting.className = "success-message";
  greeting.style.display = "block";
  console.log(message);

  form.reset();
});
