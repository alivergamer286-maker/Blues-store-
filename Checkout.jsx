import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  CreditCard, 
  Smartphone, 
  QrCode, 
  ArrowLeft, 
  Lock,
  CheckCircle,
  User,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

const Checkout = ({ isOpen, onClose, cartItems, total }) => {
  const [step, setStep] = useState(1); // 1: dados, 2: pagamento, 3: confirmação
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    state: ''
  });
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const totalWithDiscount = total * 0.95; // 5% desconto no Pix
  const finalTotal = paymentMethod === 'pix' ? totalWithDiscount : total;

  if (!isOpen) return null;

  const handleCustomerDataChange = (field, value) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  const handleCardDataChange = (field, value) => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinalizePurchase = () => {
    // Simular processamento do pagamento
    setTimeout(() => {
      setStep(3);
    }, 2000);
  };

  const isStepValid = () => {
    if (step === 1) {
      return customerData.name && customerData.email && customerData.phone && 
             customerData.address && customerData.city && customerData.zipCode;
    }
    if (step === 2 && paymentMethod === 'card') {
      return cardData.number && cardData.name && cardData.expiry && cardData.cvv;
    }
    return true;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      
      {/* Modal de checkout */}
      <div className="absolute inset-4 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Cabeçalho */}
          <div className="flex items-center justify-between p-6 border-b bg-primary text-white">
            <div className="flex items-center">
              {step > 1 && (
                <Button variant="ghost" size="sm" onClick={handlePrevStep} className="mr-4 text-white hover:bg-white/20">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              )}
              <h2 className="text-xl font-semibold">
                {step === 1 && 'Dados de Entrega'}
                {step === 2 && 'Pagamento'}
                {step === 3 && 'Pedido Confirmado'}
              </h2>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              ✕
            </Button>
          </div>

          {/* Indicador de progresso */}
          <div className="flex items-center justify-center p-4 bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-300'}`}>
                1
              </div>
              <div className={`w-12 h-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-300'}`}>
                2
              </div>
              <div className={`w-12 h-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-300'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
                {step >= 3 ? <CheckCircle className="h-4 w-4" /> : '3'}
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
              {/* Formulário */}
              <div className="lg:col-span-2 p-6">
                {/* Etapa 1: Dados do cliente */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        Dados Pessoais
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Nome completo"
                          value={customerData.name}
                          onChange={(e) => handleCustomerDataChange('name', e.target.value)}
                        />
                        <Input
                          type="email"
                          placeholder="E-mail"
                          value={customerData.email}
                          onChange={(e) => handleCustomerDataChange('email', e.target.value)}
                        />
                        <Input
                          placeholder="Telefone"
                          value={customerData.phone}
                          onChange={(e) => handleCustomerDataChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        Endereço de Entrega
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Input
                            placeholder="Endereço completo"
                            value={customerData.address}
                            onChange={(e) => handleCustomerDataChange('address', e.target.value)}
                          />
                        </div>
                        <Input
                          placeholder="Cidade"
                          value={customerData.city}
                          onChange={(e) => handleCustomerDataChange('city', e.target.value)}
                        />
                        <Input
                          placeholder="CEP"
                          value={customerData.zipCode}
                          onChange={(e) => handleCustomerDataChange('zipCode', e.target.value)}
                        />
                        <Input
                          placeholder="Estado"
                          value={customerData.state}
                          onChange={(e) => handleCustomerDataChange('state', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Etapa 2: Pagamento */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">Forma de Pagamento</h3>
                    
                    {/* Seleção do método de pagamento */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button
                        variant={paymentMethod === 'pix' ? 'default' : 'outline'}
                        onClick={() => setPaymentMethod('pix')}
                        className="h-20 flex flex-col items-center justify-center"
                      >
                        <QrCode className="h-6 w-6 mb-2" />
                        <span>PIX</span>
                        <span className="text-xs text-green-600">5% desconto</span>
                      </Button>
                      
                      <Button
                        variant={paymentMethod === 'card' ? 'default' : 'outline'}
                        onClick={() => setPaymentMethod('card')}
                        className="h-20 flex flex-col items-center justify-center"
                      >
                        <CreditCard className="h-6 w-6 mb-2" />
                        <span>Cartão</span>
                        <span className="text-xs">Crédito/Débito</span>
                      </Button>
                      
                      <Button
                        variant={paymentMethod === 'boleto' ? 'default' : 'outline'}
                        onClick={() => setPaymentMethod('boleto')}
                        className="h-20 flex flex-col items-center justify-center"
                      >
                        <Smartphone className="h-6 w-6 mb-2" />
                        <span>Boleto</span>
                        <span className="text-xs">Bancário</span>
                      </Button>
                    </div>

                    {/* Formulário do cartão */}
                    {paymentMethod === 'card' && (
                      <div className="space-y-4 p-4 border rounded-lg">
                        <h4 className="font-semibold flex items-center">
                          <Lock className="h-4 w-4 mr-2" />
                          Dados do Cartão
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <Input
                              placeholder="Número do cartão"
                              value={cardData.number}
                              onChange={(e) => handleCardDataChange('number', e.target.value)}
                            />
                          </div>
                          <Input
                            placeholder="Nome no cartão"
                            value={cardData.name}
                            onChange={(e) => handleCardDataChange('name', e.target.value)}
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <Input
                              placeholder="MM/AA"
                              value={cardData.expiry}
                              onChange={(e) => handleCardDataChange('expiry', e.target.value)}
                            />
                            <Input
                              placeholder="CVV"
                              value={cardData.cvv}
                              onChange={(e) => handleCardDataChange('cvv', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Informações do PIX */}
                    {paymentMethod === 'pix' && (
                      <div className="p-4 border rounded-lg bg-green-50">
                        <h4 className="font-semibold text-green-800 mb-2">Pagamento via PIX</h4>
                        <p className="text-sm text-green-700">
                          Após confirmar o pedido, você receberá o código PIX para pagamento.
                          O pagamento é processado instantaneamente.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Etapa 3: Confirmação */}
                {step === 3 && (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Pedido Confirmado!</h3>
                    <p className="text-gray-600 mb-6">
                      Seu pedido foi processado com sucesso. Você receberá um e-mail com os detalhes.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <p className="font-semibold">Número do Pedido: #BSS-{Date.now().toString().slice(-6)}</p>
                      <p className="text-sm text-gray-600">Prazo de entrega: 3-5 dias úteis</p>
                    </div>
                    <Button onClick={onClose} size="lg">
                      Continuar Comprando
                    </Button>
                  </div>
                )}
              </div>

              {/* Resumo do pedido */}
              <div className="bg-gray-50 p-6 border-l">
                <h3 className="text-lg font-semibold mb-4">Resumo do Pedido</h3>
                
                {/* Produtos */}
                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-gray-500">Qtd: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-semibold">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Totais */}
                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                  
                  {paymentMethod === 'pix' && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Desconto PIX (5%):</span>
                      <span>- R$ {(total * 0.05).toFixed(2).replace('.', ',')}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm">
                    <span>Frete:</span>
                    <span className="text-green-600">Grátis</span>
                  </div>
                  
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span className="text-primary">
                      R$ {finalTotal.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                {/* Botão de ação */}
                {step < 3 && (
                  <Button
                    onClick={step === 2 ? handleFinalizePurchase : handleNextStep}
                    disabled={!isStepValid()}
                    className="w-full mt-6"
                    size="lg"
                  >
                    {step === 1 && 'Continuar para Pagamento'}
                    {step === 2 && 'Finalizar Compra'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

