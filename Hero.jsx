import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary via-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-10 left-10 opacity-20">
        <Crown className="h-32 w-32" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Crown className="h-24 w-24" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Logo central com coroa */}
          <div className="flex items-center justify-center mb-8">
            <Crown className="h-16 w-16 text-yellow-400 mr-4" />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">
                BLUE STREET
              </h1>
              <p className="text-xl md:text-2xl font-light">STORE</p>
            </div>
            <Crown className="h-16 w-16 text-yellow-400 ml-4" />
          </div>

          {/* Texto principal */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              PEÇAS EXCLUSIVAS
            </h2>
            <p className="text-xl md:text-2xl mb-2">
              100% ORIGINAIS
            </p>
            <p className="text-lg md:text-xl text-blue-200">
              VESTINDO A QUEBRADA DESDE 2024!
            </p>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3"
            >
              Ver Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
            >
              Ofertas Especiais
            </Button>
          </div>

          {/* Indicadores de qualidade */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-blue-200">Originais</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Frete</div>
              <div className="text-blue-200">Grátis*</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24h</div>
              <div className="text-blue-200">Entrega</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ondas decorativas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

