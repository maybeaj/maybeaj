import SummaryTable from "../components/SummaryTable";
import { completedData } from "../data/completedData";

export default function ScrapCompletePage() {
    return (
        <div className="p-4">
            <h1 className="mb-4 text-2xl font-bold">스크랩 완료</h1>
            {completedData.map((data, index) => (
                <SummaryTable key={index} user={data.user} car={data.car} date={data.date} />
            ))}
        </div>
    );
}

