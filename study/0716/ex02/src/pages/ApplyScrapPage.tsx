import ScrapForm from "../components/ScrapForm";
import { cars } from "../data/initialFormData";

export default function ApplyScrapPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {cars.map((car) => <ScrapForm key={car.id} name={car.name} carNum={car.carNum} />)}
        </main>
    );
}