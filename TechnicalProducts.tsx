import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, Check, Sparkles, Shield, Percent, Gift, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Combo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const comboItems = [
    { name: 'Mentalidade de Atleta Profissional', price: 'R$ 67,00', isMain: true },
    { name: 'Saque de Elite', price: 'R$ 29,90' },
    { name: 'Forehand de Elite', price: 'R$ 29,90' },
    { name: 'Backhand Imparável', price: 'R$ 29,90' },
    { name: 'Checklist para Imprimir', price: 'GRÁTIS', isBonus: true },
  ];

  const totalValue = 15670; // R$ 156,70 em centavos
  const comboPrice = 9700; // R$ 97,00 em centavos
  const discount = Math.round(((totalValue - comboPrice) / totalValue) * 100);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-[#141414] overflow-hidden" id="combo">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-[#CCFF00]/10 rounded-full blur-[150px] sm:blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 mb-4 sm:mb-6">
            <Package className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCFF00]" />
            <span className="text-[#CCFF00] font-semibold text-xs sm:text-sm tracking-wider">COMBO COMPLETO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Leve <span className="text-gradient">Tudo de Uma Vez</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Todos os e-books + checklist de bônus com desconto especial. 
            Transforme seu jogo completo - mentalidade E técnica.
          </p>
        </motion.div>

        {/* Combo Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#CCFF00]/20 blur-[50px] sm:blur-[80px] rounded-3xl scale-95" />

          <div className="relative bg-gradient-to-br from-[#141414] to-[#0A0A0A] rounded-2xl sm:rounded-3xl border-2 border-[#CCFF00]/40 overflow-hidden">
            {/* Discount Badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-[#CCFF00] text-black px-3 sm:px-6 py-1 sm:py-2 rounded-bl-xl sm:rounded-bl-2xl font-bold flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                <Percent className="w-3 h-3 sm:w-4 sm:h-4" />
                ECONOMIZE {discount}%
              </div>
            </div>

            <div className="p-4 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
                {/* Left - Items List */}
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#CCFF00]" />
                    O que está incluído:
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {comboItems.map((item, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-center justify-between p-2.5 sm:p-4 rounded-lg sm:rounded-xl ${
                          item.isMain
                            ? 'bg-[#CCFF00]/20 border border-[#CCFF00]/40'
                            : item.isBonus
                            ? 'bg-[#CCFF00]/10 border border-[#CCFF00]/30'
                            : 'bg-[#0A0A0A] border border-[#2A2A2A]'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            item.isMain 
                              ? 'bg-[#CCFF00]' 
                              : item.isBonus 
                              ? 'bg-[#CCFF00]/30' 
                              : 'bg-[#CCFF00]/10'
                          }`}>
                            {item.isMain ? (
                              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                            ) : item.isBonus ? (
                              <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-[#CCFF00]" />
                            ) : (
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#CCFF00]" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <span className="text-white font-medium block text-xs sm:text-sm truncate">{item.name}</span>
                            {item.isMain && (
                              <span className="text-[#CCFF00] text-[10px] sm:text-xs">Produto Principal</span>
                            )}
                            {item.isBonus && (
                              <span className="text-[#CCFF00] text-[10px] sm:text-xs">Bônus Exclusivo</span>
                            )}
                          </div>
                        </div>
                        <span className={`font-bold text-xs sm:text-base flex-shrink-0 ml-2 ${
                          item.isBonus ? 'text-[#CCFF00]' : 'text-gray-400'
                        }`}>
                          {item.price}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#0A0A0A] border border-[#2A2A2A]">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <span className="text-gray-500 text-xs sm:text-sm">Valor total separado:</span>
                      <span className="text-gray-500 line-through text-xs sm:text-sm">R$ 156,70</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#CCFF00] font-semibold text-xs sm:text-sm">Você economiza:</span>
                      <span className="text-[#CCFF00] font-bold text-xs sm:text-sm">R$ 59,70</span>
                    </div>
                  </div>
                </div>

                {/* Right - Pricing */}
                <div className="flex flex-col justify-center">
                  <div className="text-center lg:text-left mb-6 sm:mb-8">
                    <p className="text-gray-400 mb-1 sm:mb-2 text-sm">Preço do combo:</p>
                    <div className="flex items-baseline justify-center lg:justify-start gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <span className="text-gray-500 line-through text-xl sm:text-2xl">R$ 156,70</span>
                      <span className="bg-[#CCFF00] text-black text-xs sm:text-sm font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                        -{discount}%
                      </span>
                    </div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                      R$ 97,00
                    </div>
                    <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm">ou 12x de R$ 9,70 no cartão</p>
                  </div>

                  {/* CTA */}
                  <Button
                    className="w-full bg-[#CCFF00] text-black hover:bg-[#9EF916] py-4 sm:py-6 text-base sm:text-lg font-bold rounded-xl animate-pulse-glow transition-transform hover:scale-[1.02] mb-3 sm:mb-4"
                    onClick={() => window.open('https://pay.hotmart.com/S104885303M?off=eslhh34v', '_blank')}
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    QUERO O COMBO COMPLETO
                  </Button>

                  {/* Guarantee */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 text-xs sm:text-sm">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#CCFF00]" />
                    <span>Garantia de 7 dias em todos os produtos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { label: 'E-books', value: '4' },
            { label: 'Páginas', value: '300+' },
            { label: 'Capítulos', value: '30+' },
            { label: 'Acesso', value: 'Vitalício' },
          ].map((badge, index) => (
            <div key={index} className="text-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-[#0A0A0A] border border-[#2A2A2A]">
              <p className="text-[#CCFF00] font-bold text-sm sm:text-base">{badge.value}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{badge.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Combo;
