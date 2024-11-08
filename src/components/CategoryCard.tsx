import React from 'react';
import { Category } from '../types/resources';
import * as Icons from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
  isActive: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, isActive }) => {
  const IconComponent = (Icons as any)[category.icon];

  return (
    <div
      onClick={onClick}
      className={clsx(
        'p-4 rounded-lg cursor-pointer transition-all',
        'border hover:shadow-lg',
        isActive ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200 hover:border-blue-300'
      )}
    >
      <div className="flex items-center space-x-3">
        <div className={clsx(
          'p-2 rounded-full',
          isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
        )}>
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{category.name}</h3>
          <p className="text-sm text-gray-500">{category.description}</p>
        </div>
      </div>
    </div>
  );
};