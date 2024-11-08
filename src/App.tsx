import React, { useState } from 'react';
import { CategoryCard } from './components/CategoryCard';
import { ResourceList } from './components/ResourceList';
import { categories } from './data/categories';
import { resources } from './data/resources';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const filteredResources = resources.filter(
    (resource) => resource.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            UK Hospitality Resource Directory
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={category.id === selectedCategory}
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
            <ResourceList resources={filteredResources} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;