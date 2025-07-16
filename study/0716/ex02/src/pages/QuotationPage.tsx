import QuotationCard from "../components/QuotationCard";
import { quotationMock } from "../data/quotationMock";

export default function QuotationPage() {
    return (
        <div className="p-4">
            <h1 className="mb-4 text-2xl font-bold">견적 목록</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {quotationMock.map((quotation) => (
                    <QuotationCard key={quotation.id} {...quotation} />
                ))}
            </div>
        </div>
    );
}
