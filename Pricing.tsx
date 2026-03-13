import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Quote, Trophy, BookOpen, Target } from 'lucide-react';

const Author = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: BookOpen, value: '17', label: 'Capítulos' },
    { icon: Trophy, value: '10+', label: 'Anos de Estudo' },
    { icon: Target, value: '100%', label: 'Prático' },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-[#141414] overflow-hidden" id="author">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#CCFF00] rounded-full blur-[100px] sm:blur-[150px]" />
      </div>

      {/* Large Quote Mark */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 opacity-5">
        <Quote className="w-20 h-20 sm:w-40 sm:h-40 text-[#CCFF00]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Author Photo */}
          <motion.div
            className="relative flex justify-center lg:justify-start order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/30 to-[#9EF916]/20 blur-[50px] sm:blur-[80px] rounded-full scale-110 animate-pulse" />
              
              {/* Photo Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#CCFF00]/40 shadow-2xl shadow-[#CCFF00]/10 group-hover:shadow-[#CCFF00]/30 transition-shadow duration-500">
                <img
                  src="/author-photo.jpg"
                  alt="Fabrício Tacon - Autor do E-book"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
                
                {/* Corner Accent */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#CCFF00] text-black text-[10px] sm:text-xs font-bold rounded-full">
                  AUTOR
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 h-16 sm:w-28 sm:h-28 border-2 border-[#CCFF00]/30 rounded-xl sm:rounded-2xl"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div 
                className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-[#CCFF00]/20 to-transparent rounded-lg sm:rounded-xl"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -left-2 sm:-left-4 top-1/4 px-2 sm:px-4 py-1.5 sm:py-2 bg-[#0A0A0A] border border-[#CCFF00]/30 rounded-lg sm:rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-[#CCFF00] text-[10px] sm:text-sm font-semibold">Tenista & Coach</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            className="order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#CCFF00]/10 flex items-center justify-center">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCFF00]" />
              </div>
              <span className="text-[#CCFF00] font-semibold text-xs sm:text-sm tracking-wider">SOBRE O AUTOR</span>
            </div>

            {/* Name */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              Fabrício Tacon
            </h2>

            {/* Bio */}
            <div className="space-y-3 sm:space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
              <p>
                Tenista amador competitivo que, como muitos jogadores, já viveu na pele o impacto do jogo mental em quadra.
              </p>
              <p>
                Apesar de treinar bem, percebeu ao longo dos anos que muitas partidas eram decididas não pela técnica, mas pela dificuldade em manter o controle emocional sob pressão — errando bolas fáceis, mudando o jogo quando estava ganhando e perdendo a cabeça em momentos decisivos.
              </p>
            </div>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-2 sm:p-4 rounded-lg sm:rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#CCFF00]/30 transition-colors"
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCFF00] mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-[#0A0A0A] border-l-4 border-[#CCFF00]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-gray-300 italic mb-3 sm:mb-4 text-sm sm:text-base">
                "Movido por essa experiência pessoal, decidi estudar e aplicar princípios da psicologia do esporte e da performance para transformar a própria forma de competir."
              </p>
              <footer className="text-[#CCFF00] font-medium text-sm sm:text-base">
                — Fabrício Tacon
              </footer>
            </motion.blockquote>

            {/* CTA */}
            <motion.div
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-gray-500 text-xs sm:text-sm">
                Conheça a história completa e os métodos desenvolvidos no e-book.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Author;
