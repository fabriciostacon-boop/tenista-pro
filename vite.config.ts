import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingCart, Check, Sparkles, BookOpen, Target, Zap, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    {
      id: 'saque',
      icon: Target,
      title: 'Saque de Elite',
      subtitle: 'Transforme seu saque em uma arma',
      description: 'Aprenda os fundamentos do saque perfeito, biomecânica, tipos de saque (chapado, slice, kick), precisão e um plano de evolução em 21 dias.',
      features: [
        'Fundamentos do saque perfeito',
        'Biomecânica: potência sem forçar',
        '3 tipos de saque para dominar',
        'Precisão: onde sacar para ganhar',
        'Plano de evolução em 21 dias',
        'Checklist de jogo para imprimir',
      ],
      price: 'R$ 29,90',
      originalPrice: null,
      badge: 'MAIS VENDIDO',
      color: '#CCFF00',
      link: 'https://pay.hotmart.com/S104668979W', // Substitua pelo link real
    },
    {
      id: 'forehand',
      icon: Zap,
      title: 'Forehand de Elite',
      subtitle: 'Seu golpe mais forte e confiável',
      description: 'Construa um forehand consistente, potente e confiável. Técnicas, drills práticos e preparação física e mental específica.',
      features: [
        'Base técnica completa',
        'Controle, potência e efeitos',
        'Erros comuns e correções',
        'Treinos práticos (drills)',
        'Preparação física + mental',
        'Plano de evolução em 30 dias',
      ],
      price: 'R$ 29,90',
      originalPrice: null,
      badge: null,
      color: '#3B82F6',
      link: 'https://pay.hotmart.com/S104668979W', // Substitua pelo link real
    },
    {
      id: 'backhand',
      icon: BookOpen,
      title: 'Backhand Imparável',
      subtitle: 'Domine o lado "fraco" do seu jogo',
      description: 'Transforme seu backhand em um golpe confiável. Técnicas de backhand de uma e duas mãos, posicionamento e estratégias de jogo.',
      features: [
        'Backhand de uma e duas mãos',
        'Técnica e biomecânica',
        'Posicionamento ideal',
        'Estratégias de jogo',
        'Drills específicos',
        'Correção de erros comuns',
      ],
      price: 'R$ 29,90',
      originalPrice: null,
      badge: null,
      color: '#EC4899',
      link: 'https://pay.hotmart.com/S104668979W', // Substitua pelo link real
    },
  ];

  const bonusProduct = {
    icon: Gift,
    title: 'Checklist para Imprimir',
    subtitle: 'BÔNUS EXCLUSIVO',
    description: 'Material prático para levar para a quadra. Checklists de pré-jogo, entre pontos, pontos decisivos e pós-jogo.',
    features: [
      'Checklist pré-jogo completo',
      'Cartão de bolso (entre pontos)',
      'Checklist pontos decisivos',
      'Checklist pós-jogo',
      'Formato prático para imprimir',
    ],
    price: 'GRÁTIS',
    color: '#CCFF00',
  };

  return (
    <section ref={ref} className="relative py-24 bg-[#0A0A0A] overflow-hidden" id="products">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 mb-6">
            <ShoppingCart className="w-5 h-5 text-[#CCFF00]" />
            <span className="text-[#CCFF00] font-semibold text-sm tracking-wider">NOSSOS PRODUTOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Escolha Seu <span className="text-gradient">Treinamento</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            E-books especializados para transformar cada golpe do seu jogo. 
            Método prático, baseado em ciência e aplicável ao seu nível.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-[#141414] rounded-2xl border border-[#2A2A2A] overflow-hidden card-hover"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#CCFF00] text-black text-xs font-bold rounded-full z-10">
                  {product.badge}
                </div>
              )}

              {/* Color Accent Bar */}
              <div 
                className="h-1.5 w-full" 
                style={{ backgroundColor: product.color }}
              />

              <div className="p-6">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${product.color}20` }}
                  >
                    <product.icon className="w-7 h-7" style={{ color: product.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    <p className="text-gray-500 text-sm">{product.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-[#2A2A2A]">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-white">{product.price}</span>
                  </div>
                  <Button
                    className="w-full py-5 font-bold rounded-xl transition-all hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: product.color,
                      color: product.color === '#CCFF00' ? '#000' : '#fff'
                    }}
                    onClick={() => window.open(product.link, '_blank')}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    COMPRAR AGORA
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus Product */}
        <motion.div
          className="relative bg-gradient-to-r from-[#CCFF00]/10 to-[#9EF916]/10 rounded-2xl border border-[#CCFF00]/30 p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="absolute -top-4 left-8 px-4 py-1 bg-[#CCFF00] text-black text-sm font-bold rounded-full">
            BÔNUS GRÁTIS
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#CCFF00]/20 flex items-center justify-center">
                  <Gift className="w-7 h-7 text-[#CCFF00]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{bonusProduct.title}</h3>
                  <p className="text-[#CCFF00] font-semibold">{bonusProduct.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{bonusProduct.description}</p>
              <ul className="space-y-2">
                {bonusProduct.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#CCFF00]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block bg-[#0A0A0A] rounded-xl p-6 border border-[#CCFF00]/30">
                <p className="text-gray-400 text-sm mb-2">Você recebe de GRAÇA</p>
                <p className="text-4xl font-bold text-[#CCFF00]">GRÁTIS</p>
                <p className="text-gray-500 text-sm mt-2">com qualquer compra</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
