import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gift, Check } from 'lucide-react';

const Bonus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const techniques = [
    {
      title: 'SAQUE',
      color: '#CCFF00',
      tips: [
        'Posicionamento ideal dos pés',
        'Timing da bola no momento do impacto',
        'Rotação e variedade de saques',
        'Ritual pré-saque para consistência',
      ],
    },
    {
      title: 'FOREHAND',
      color: '#3B82F6',
      tips: [
        'Preparação e unidade de ombro',
        'Contato na zona ideal',
        'Rotação do tronco e transferência de peso',
        'Follow-through completo',
      ],
    },
    {
      title: 'BACKHAND',
      color: '#EC4899',
      tips: [
        'Grip e empunhadura correta',
        'Preparação antecipada da raquete',
        'Estabilidade no contato',
        'Recuperação rápida para próxima bola',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} className="relative py-24 bg-[#0A0A0A] overflow-hidden" id="bonus">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />
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
            <Gift className="w-5 h-5 text-[#CCFF00]" />
            <span className="text-[#CCFF00] font-semibold text-sm tracking-wider">BÔNUS EXCLUSIVO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Dicas Técnicas para <span className="text-gradient">Melhorar Seu Jogo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Além da mentalidade, receba orientações práticas para aprimorar seus golpes fundamentais
          </p>
        </motion.div>

        {/* Techniques Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {techniques.map((technique, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative p-6 rounded-2xl bg-[#141414] border border-[#2A2A2A] card-hover overflow-hidden"
            >
              {/* Color Accent */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: technique.color }}
              />

              {/* Title */}
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: technique.color }}
              >
                {technique.title}
              </h3>

              {/* Tips List */}
              <ul className="space-y-3">
                {technique.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${technique.color}20` }}
                    >
                      <Check className="w-3 h-3" style={{ color: technique.color }} />
                    </div>
                    <span className="text-gray-300 text-sm">{tip}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${technique.color} 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#141414] border border-[#2A2A2A]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/20 flex items-center justify-center">
                <span className="text-[#CCFF00] font-bold text-sm">+</span>
              </div>
              <span className="text-gray-300 text-sm">Ilustrações detalhadas</span>
            </div>
            <div className="w-px h-6 bg-[#2A2A2A]" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/20 flex items-center justify-center">
                <span className="text-[#CCFF00] font-bold text-sm">+</span>
              </div>
              <span className="text-gray-300 text-sm">Exercícios práticos</span>
            </div>
            <div className="w-px h-6 bg-[#2A2A2A]" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/20 flex items-center justify-center">
                <span className="text-[#CCFF00] font-bold text-sm">+</span>
              </div>
              <span className="text-gray-300 text-sm">Checklists de treino</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bonus;
