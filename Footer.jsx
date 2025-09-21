import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin,
  Crown
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Fique por dentro das novidades!</h3>
            <p className="mb-4">Receba ofertas exclusivas e lançamentos em primeira mão</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-white text-gray-900"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal do footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sobre a loja */}
            <div>
              <div className="flex items-center mb-4">
                <Crown className="h-8 w-8 text-yellow-400 mr-2" />
                <h3 className="text-xl font-bold">Blue Street Store</h3>
              </div>
              <p className="text-gray-300 mb-4">
                A melhor loja de streetwear do Brasil. Peças exclusivas e originais 
                para quem tem estilo e atitude.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="p-2">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Links úteis */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guia de Tamanhos</a></li>
              </ul>
            </div>

            {/* Atendimento */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Atendimento</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Acompanhar Pedido</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Minha Conta</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>contato@bluestreetstore.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  <span>
                    Rua da Moda, 123<br />
                    São Paulo - SP<br />
                    CEP: 01234-567
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marcas parceiras */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-lg font-semibold mb-6">Marcas Parceiras</h3>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">NIKE</div>
            <div className="text-2xl font-bold">ADIDAS</div>
            <div className="text-2xl font-bold">PUMA</div>
            <div className="text-2xl font-bold">VANS</div>
            <div className="text-2xl font-bold">CONVERSE</div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Blue Street Store. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <span>CNPJ: 12.345.678/0001-90</span>
              <span>|</span>
              <span>Desenvolvido com ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

