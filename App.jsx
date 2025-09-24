import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import { products, featuredProducts } from './data/products';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Carregar dados do localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('bluestreet-cart');
    const savedFavorites = localStorage.getItem('bluestreet-favorites');
    
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Salvar carrinho no localStorage
  useEffect(() => {
    localStorage.setItem('bluestreet-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Salvar favoritos no localStorage
  useEffect(() => {
    localStorage.setItem('bluestreet-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Adicionar produto ao carrinho
  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    // Mostrar feedback visual
    setIsCartOpen(true);
  };

  // Atualizar quantidade no carrinho
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Remover produto do carrinho
  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Toggle favorito
  const handleToggleFavorite = (productId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter(id => id !== productId);
      } else {
        return [...prevFavorites, productId];
      }
    });
  };

  // Filtrar produtos por busca
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Produtos para exibir (filtrados por categoria e busca)
  const displayProducts = searchQuery ? filteredProducts : products;

  // Finalizar compra
  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Calcular total do carrinho
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
      />
      
      <main>
        {/* Hero Banner */}
        <Hero />
        
        {/* Produtos em Destaque */}
        {!searchQuery && (
          <section id="produtos" className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Produtos Mais Vendidos
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Confira os produtos que estão fazendo sucesso e são os favoritos 
                  dos nossos clientes
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {featuredProducts.slice(0, 5).map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {!product.inStock && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          ESGOTADO
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                        {product.name}
                      </h3>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filtro de Categorias */}
        {!searchQuery && (
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        )}

        {/* Grid de Produtos */}
        <ProductGrid
          products={displayProducts}
          title={searchQuery ? `Resultados para "${searchQuery}"` : 'Todos os Produtos'}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
          favorites={favorites}
          selectedCategory={selectedCategory}
        />
      </main>

      {/* Carrinho */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      {/* Checkout */}
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        total={cartTotal}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

