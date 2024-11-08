import React from 'react';
import { Resource } from '../types/resources';

interface ResourceListProps {
  resources: Resource[];
}

export const ResourceList: React.FC<ResourceListProps> = ({ resources }) => {
  return (
    <div className="space-y-4">
      {resources.map((resource) => (
        <div key={resource.id} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg text-gray-900">{resource.name}</h3>
          <p className="text-gray-600 mt-1">{resource.description}</p>
          <a
            href={resource.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
          >
            Visit Website →
          </a>
        </div>
      ))}
    </div>
  );
};