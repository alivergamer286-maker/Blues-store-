import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onToggleFavorite, isFavorite = false }) => {
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Imagem do produto */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {!product.inStock && (
            <Badge variant="destructive" className="text-xs">
              ESGOTADO
            </Badge>
          )}
          {discountPercentage > 0 && (
            <Badge className="bg-green-500 text-white text-xs">
              {discountPercentage}% OFF
            </Badge>
          )}
        </div>

        {/* Botão de favorito */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white"
          onClick={() => onToggleFavorite(product.id)}
        >
          <Heart 
            className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </Button>

        {/* Overlay com botão de adicionar ao carrinho */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
          </Button>
        </div>
      </div>

      {/* Informações do produto */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Preços */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
          
          {/* Preço com Pix */}
          <div className="text-right">
            <div className="text-xs text-gray-600">com Pix</div>
            <div className="text-sm font-semibold text-green-600">
              R$ {(product.price * 0.95).toFixed(2).replace('.', ',')}
            </div>
          </div>
        </div>

        {/* Botão de compra */}
        <Button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className="w-full"
          variant={product.inStock ? "default" : "secondary"}
        >
          {product.inStock ? 'Comprar Agora' : 'Produto Esgotado'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

