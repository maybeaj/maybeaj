type Completed = { user: string; car: string; date: string };

export default function SummaryTable({ user, car, date }: Completed) {
	return (
		<div>
			<h2 className="mb-2 text-xl font-bold">완료된 견적</h2>
			<table className="min-w-full border border-collapse border-gray-200">
				<thead>
					<tr>
						<th className="p-2 border border-gray-200">사용자</th>
						<th className="p-2 border border-gray-200">차량</th>
						<th className="p-2 border border-gray-200">날짜</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="p-2 border border-gray-200">{user}</td>
						<td className="p-2 border border-gray-200">{car}</td>
						<td className="p-2 border border-gray-200">{date}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
