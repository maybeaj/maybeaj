const monthLabel = document.getElementById("month-label");
const grid = document.getElementById("date-grid");
const goalBox = document.getElementById("goalBox");
const quoteBox = document.getElementById("quoteBox");

let current = new Date();
let currentYear = current.getFullYear();
let currentMonth = current.getMonth();

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const quotes = [
	"The best way to get started is to quit talking and begin doing.",
	"Don't watch the clock; do what it does. Keep going.",
	"Start where you are. Use what you have. Do what you can.",
	"Dream big and dare to fail.",
	"Small deeds done are better than great deeds planned.",
];

function showRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	quoteBox.textContent = quotes[randomIndex];
}

function renderCalendar(year, month) {
	grid.innerHTML = "";
	monthLabel.textContent = `${monthNames[month]} ${year}`;

	const firstDay = new Date(year, month, 1).getDay();
	const lastDate = new Date(year, month + 1, 0).getDate();

	const adjustedFirstDay = firstDay;
	let day = 1;
	for (let i = 0; i < 42; i++) {
		const cell = document.createElement("div");
		cell.className = "date-cell";
		if (i >= adjustedFirstDay && day <= lastDate) {
			cell.textContent = day;
			day++;
		}
		grid.appendChild(cell);
	}

	// Goal 불러오기
	const key = `${year}-${String(month + 1).padStart(2, "0")}-goal`;
	goalBox.value = localStorage.getItem(key) || "";

	// Quote 출력
	showRandomQuote();
}

goalBox.addEventListener("keypress", (e) => {
	if (e.key === "Enter" && !e.shiftKey) {
		e.preventDefault();
		const key = `${currentYear}-${String(currentMonth + 1).padStart(
			2,
			"0"
		)}-goal`;
		localStorage.setItem(key, goalBox.value.trim());
		alert("이번 달 목표가 저장되었습니다!");
	}
});

document.getElementById("prev-month").addEventListener("click", () => {
	currentMonth--;
	if (currentMonth < 0) {
		currentMonth = 11;
		currentYear--;
	}
	renderCalendar(currentYear, currentMonth);
});

document.getElementById("next-month").addEventListener("click", () => {
	currentMonth++;
	if (currentMonth > 11) {
		currentMonth = 0;
		currentYear++;
	}
	renderCalendar(currentYear, currentMonth);
});

renderCalendar(currentYear, currentMonth);
