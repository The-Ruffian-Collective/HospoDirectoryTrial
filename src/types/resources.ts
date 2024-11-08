export interface Resource {
  id: string;
  name: string;
  description: string;
  website: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}