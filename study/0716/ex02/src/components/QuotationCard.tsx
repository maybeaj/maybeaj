type Quotation = {
    carName: string;
    year: number;
    price: number;
}

export default function QuotationCard({ carName, year, price }: Quotation) {
    return (
        <div className="p-4 bg-white border rounded shadow">
            <h2 className="mb-2 text-xl font-bold">{carName}</h2>
            <p className="text-gray-700">연식: {year}</p>
            <p className="text-gray-700">가격: {price} 원</p>
        </div>
    );
}