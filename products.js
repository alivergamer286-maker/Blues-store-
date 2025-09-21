// Dados dos produtos da Blue Street Store
import tenisEsportivoAzul from '../assets/tenis_esportivo_azul.png';
import tenisCasualBranco from '../assets/tenis_casual_branco.png';
import tenisHightopPreto from '../assets/tenis_hightop_preto.png';
import tenisRunningCinza from '../assets/tenis_running_cinza.png';
import tenisSkateboardVermelho from '../assets/tenis_skateboard_vermelho.png';
import tenisLifestyleBege from '../assets/tenis_lifestyle_bege.png';
import camisetaBasicaAzul from '../assets/camiseta_basica_azul.png';
import camisetaEstampadaPreta from '../assets/camiseta_estampada_preta.png';
import camisetaOversizedBranca from '../assets/camiseta_oversized_branca.png';
import camisetaTiedye from '../assets/camiseta_tiedye.png';
import camisetaVintage from '../assets/camiseta_vintage.png';
import camisetaStreetwear from '../assets/camiseta_streetwear.png';
import bermudaJeans from '../assets/bermuda_jeans.png';
import bermudaMoletom from '../assets/bermuda_moletom.png';
import bermudaCargo from '../assets/bermuda_cargo.png';
import bermudaEsportiva from '../assets/bermuda_esportiva.png';

export const products = [
  // Tênis
  {
    id: 1,
    name: 'Tênis Esportivo Azul',
    category: 'tenis',
    price: 399.99,
    originalPrice: 499.99,
    image: tenisEsportivoAzul,
    description: 'Tênis esportivo azul com tecnologia de amortecimento avançada.',
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'Tênis Casual Branco',
    category: 'tenis',
    price: 299.99,
    originalPrice: 349.99,
    image: tenisCasualBranco,
    description: 'Tênis casual branco minimalista, perfeito para o dia a dia.',
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: 'Tênis High-Top Preto',
    category: 'tenis',
    price: 449.99,
    originalPrice: 549.99,
    image: tenisHightopPreto,
    description: 'Tênis high-top preto com design urbano e resistente.',
    inStock: false,
    featured: true
  },
  {
    id: 4,
    name: 'Tênis Running Cinza',
    category: 'tenis',
    price: 359.99,
    originalPrice: 429.99,
    image: tenisRunningCinza,
    description: 'Tênis de corrida cinza com design aerodinâmico.',
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: 'Tênis Skateboard Vermelho',
    category: 'tenis',
    price: 329.99,
    originalPrice: 399.99,
    image: tenisSkateboardVermelho,
    description: 'Tênis de skateboard vermelho com sola reforçada.',
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: 'Tênis Lifestyle Bege',
    category: 'tenis',
    price: 279.99,
    originalPrice: 329.99,
    image: tenisLifestyleBege,
    description: 'Tênis lifestyle bege confortável para uso casual.',
    inStock: true,
    featured: false
  },
  
  // Camisetas
  {
    id: 7,
    name: 'Camiseta Básica Azul',
    category: 'camisetas',
    price: 89.99,
    originalPrice: 119.99,
    image: camisetaBasicaAzul,
    description: 'Camiseta básica azul de algodão premium.',
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: 'Camiseta Urban Pulse',
    category: 'camisetas',
    price: 129.99,
    originalPrice: 159.99,
    image: camisetaEstampadaPreta,
    description: 'Camiseta preta com estampa streetwear moderna.',
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: 'Camiseta Oversized Branca',
    category: 'camisetas',
    price: 99.99,
    originalPrice: 129.99,
    image: camisetaOversizedBranca,
    description: 'Camiseta oversized branca com corte moderno.',
    inStock: true,
    featured: true
  },
  {
    id: 10,
    name: 'Camiseta Tie-Dye',
    category: 'camisetas',
    price: 149.99,
    originalPrice: 179.99,
    image: camisetaTiedye,
    description: 'Camiseta tie-dye colorida com padrão único.',
    inStock: true,
    featured: true
  },
  {
    id: 11,
    name: 'Camiseta Route 66 Vintage',
    category: 'camisetas',
    price: 139.99,
    originalPrice: 169.99,
    image: camisetaVintage,
    description: 'Camiseta vintage com estampa retrô americana.',
    inStock: false,
    featured: false
  },
  {
    id: 12,
    name: 'Camiseta Urban Pulse City',
    category: 'camisetas',
    price: 119.99,
    originalPrice: 149.99,
    image: camisetaStreetwear,
    description: 'Camiseta streetwear com design urbano moderno.',
    inStock: true,
    featured: true
  },
  
  // Bermudas
  {
    id: 13,
    name: 'Bermuda Jeans Destroyed',
    category: 'bermudas',
    price: 159.99,
    originalPrice: 199.99,
    image: bermudaJeans,
    description: 'Bermuda jeans com detalhes destroyed e lavagem especial.',
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: 'Bermuda Moletom Comfort',
    category: 'bermudas',
    price: 129.99,
    originalPrice: 159.99,
    image: bermudaMoletom,
    description: 'Bermuda de moletom confortável para relaxar.',
    inStock: true,
    featured: false
  },
  {
    id: 15,
    name: 'Bermuda Cargo Tactical',
    category: 'bermudas',
    price: 179.99,
    originalPrice: 219.99,
    image: bermudaCargo,
    description: 'Bermuda cargo com múltiplos bolsos e design utilitário.',
    inStock: true,
    featured: true
  },
  {
    id: 16,
    name: 'Bermuda Esportiva Dry-Fit',
    category: 'bermudas',
    price: 139.99,
    originalPrice: 169.99,
    image: bermudaEsportiva,
    description: 'Bermuda esportiva com tecnologia dry-fit.',
    inStock: true,
    featured: false
  }
];

export const categories = [
  { id: 'todos', name: 'Todos os Produtos', count: products.length },
  { id: 'tenis', name: 'Tênis', count: products.filter(p => p.category === 'tenis').length },
  { id: 'camisetas', name: 'Camisetas', count: products.filter(p => p.category === 'camisetas').length },
  { id: 'bermudas', name: 'Bermudas', count: products.filter(p => p.category === 'bermudas').length }
];

export const featuredProducts = products.filter(product => product.featured);

