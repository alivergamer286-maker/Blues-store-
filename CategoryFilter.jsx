import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { categories } from '../data/products';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <section className="py-8 bg-gray-50" id="categorias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorias</h2>
          <p className="text-gray-600">Encontre exatamente o que você procura</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => onCategoryChange(category.id)}
              className="relative"
            >
              {category.name}
              <Badge 
                variant="secondary" 
                className="ml-2 text-xs"
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;

