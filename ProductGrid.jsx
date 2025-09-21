import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGrid = ({ 
  products, 
  title, 
  onAddToCart, 
  onToggleFavorite, 
  favorites = [],
  showCategories = false,
  selectedCategory = 'todos'
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 6;

  // Filtrar produtos por categoria
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'todos') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [products, selectedCategory]);

  // Paginação
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Resetar página quando mudar categoria
  React.useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory]);

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Nenhum produto encontrado nesta categoria.</p>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <Badge variant="secondary" className="text-sm">
              {filteredProducts.length} produtos encontrados
            </Badge>
          </div>

          {/* Controles de navegação */}
          {totalPages > 1 && (
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevPage}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <span className="text-sm text-gray-600">
                {currentPage + 1} de {totalPages}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favorites.includes(product.id)}
            />
          ))}
        </div>

        {/* Indicadores de página */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index}
                variant={currentPage === index ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(index)}
                className="w-8 h-8 p-0"
              >
                {index + 1}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;

