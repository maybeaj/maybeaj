const monthLabel = document.getElementById("month-label");
const grid = document.getElementById("date-grid");

let current = new Date();
let currentYear = current.getFullYear();
let currentMonth = current.getMonth(); // 0~11

const monthNames = [
	"JANUARY",
	"FEBRUARY",
	"MARCH",
	"APRIL",
	"MAY",
	"JUNE",
	"JULY",
	"AUGUST",
	"SEPTEMBER",
	"OCTOBER",
	"NOVEMBER",
	"DECEMBER",
];

function renderCalendar(year, month) {
	grid.innerHTML = ""; // 날짜 셀 초기화
	monthLabel.textContent = monthNames[month];

	const firstDay = new Date(year, month, 1).getDay(); // 0 (일요일)
	const adjustedFirstDay = (firstDay + 6) % 7; // 월요일 기준으로 변환
	const lastDate = new Date(year, month + 1, 0).getDate(); // 말일

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
}

// ◀ 이전 달 버튼
document.getElementById("prev-month").addEventListener("click", () => {
	currentMonth--;
	if (currentMonth < 0) {
		currentMonth = 11;
		currentYear--;
	}
	renderCalendar(currentYear, currentMonth);
});

// ▶ 다음 달 버튼
document.getElementById("next-month").addEventListener("click", () => {
	currentMonth++;
	if (currentMonth > 11) {
		currentMonth = 0;
		currentYear++;
	}
	renderCalendar(currentYear, currentMonth);
});

// 초기 렌더
renderCalendar(currentYear, currentMonth);
