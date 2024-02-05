import { PageHeader } from "./layouts/PageHeader";
import { CategoryPills } from "./components/CategoryPills";
import { categories } from "./data/home";
import { useState } from "react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>Sidebar</div>
        <div className="px-8 pb-4 overflow-x-hidden">
          <div className="sticky bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
