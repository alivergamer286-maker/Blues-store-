import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = ({ cartItems = [], onCartClick, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* Banner promocional */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 299,99
      </div>
      
      {/* Header principal */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">
                  Blue Street Store
                </h1>
              </div>
            </div>

            {/* Barra de pesquisa - Desktop */}
            <div className="hidden md:block flex-1 max-w-lg mx-8">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="O que você está buscando?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Ações do usuário */}
            <div className="flex items-center space-x-4">
              {/* Usuário */}
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>

              {/* Carrinho */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="relative"
                onClick={onCartClick}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Button>

              {/* Menu mobile */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Barra de pesquisa - Mobile */}
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="O que você está buscando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Menu de navegação */}
        <nav className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8 py-3">
              <a href="#" className="text-gray-700 hover:text-primary font-medium">
                INÍCIO
              </a>
              <a href="#produtos" className="text-gray-700 hover:text-primary font-medium">
                PRODUTOS
              </a>
              <a href="#categorias" className="text-gray-700 hover:text-primary font-medium">
                CATEGORIAS
              </a>
              <a href="#contato" className="text-gray-700 hover:text-primary font-medium">
                CONTATO
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

