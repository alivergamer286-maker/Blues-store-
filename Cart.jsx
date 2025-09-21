import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { X, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalWithDiscount = total * 0.95; // 5% desconto no Pix

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      
      {/* Painel do carrinho */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Cabeçalho */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Carrinho de Compras
            </h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Conteúdo do carrinho */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
                <Button onClick={onClose}>Continuar Comprando</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{item.name}</h3>
                      <p className="text-primary font-semibold">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                      
                      {/* Controles de quantidade */}
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-6 w-6 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-6 w-6 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-sm">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Resumo e checkout */}
          {cartItems.length > 0 && (
            <div className="border-t p-4 space-y-4">
              {/* Resumo dos valores */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
                
                <div className="flex justify-between text-sm text-green-600">
                  <span>Desconto Pix (5%):</span>
                  <span>- R$ {(total * 0.05).toFixed(2).replace('.', ',')}</span>
                </div>
                
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span className="text-primary">
                    R$ {totalWithDiscount.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                
                <div className="text-xs text-gray-500 text-center">
                  Frete grátis para compras acima de R$ 299,99
                </div>
              </div>

              {/* Botões de ação */}
              <div className="space-y-2">
                <Button 
                  onClick={onCheckout} 
                  className="w-full"
                  size="lg"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Finalizar Compra
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={onClose}
                  className="w-full"
                >
                  Continuar Comprando
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

