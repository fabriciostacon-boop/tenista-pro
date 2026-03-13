import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, ChevronRight, Brain, Zap, Focus, Calendar, Shield, Heart, Eye, User, Clock, Award } from 'lucide-react';

const Chapters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const chapters = [
    {
      icon: Brain,
      title: 'Por que o jogo mental decide partidas',
      description: 'Entenda a ciência por trás da performance sob pressão e como a mentalidade afeta seus resultados.',
      highlight: true,
    },
    {
      icon: Shield,
      title: 'Os 3 sabotadores mentais',
      description: 'Erro, ego e emoção: aprenda a identificar e neutralizar os padrões que destroem seu jogo.',
      highlight: true,
    },
    {
      icon: Clock,
      title: 'O ritual do atleta profissional',
      description: 'Protocolo de 15-20 segundos entre pontos para manter foco e controle emocional.',
      highlight: true,
    },
    {
      icon: Zap,
      title: 'Como o cérebro reage à pressão',
      description: 'Neurociência aplicada ao tênis: entenda seus mecanismos e aprenda a controlá-los.',
      highlight: false,
    },
    {
      icon: Focus,
      title: 'Atenção e foco no presente',
      description: 'Técnicas práticas para manter a concentração durante toda a partida.',
      highlight: false,
    },
    {
      icon: Calendar,
      title: 'Plano de evolução em 30 dias',
      description: 'Protocolo prático de treinamento mental com exercícios diários.',
      highlight: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} className="relative py-24 bg-[#0A0A0A] overflow-hidden" id="chapters">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #CCFF00 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-[#CCFF00]" />
            <span className="text-[#CCFF00] font-semibold text-sm tracking-wider">O QUE VOCÊ VAI APRENDER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            17 Capítulos que <span className="text-gradient">Transformarão</span> Sua Mentalidade
          </h2>
        </motion.div>

        {/* Chapters Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative p-6 rounded-2xl bg-[#141414] border transition-all duration-300 card-hover ${
                chapter.highlight
                  ? 'border-[#CCFF00]/30'
                  : 'border-[#2A2A2A]'
              }`}
            >
              {/* Highlight Badge */}
              {chapter.highlight && (
                <div className="absolute -top-3 right-4 px-3 py-1 bg-[#CCFF00] text-black text-xs font-bold rounded-full">
                  DESTAQUE
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                chapter.highlight ? 'bg-[#CCFF00]/20' : 'bg-[#1E1E1E]'
              }`}>
                <chapter.icon className={`w-6 h-6 ${
                  chapter.highlight ? 'text-[#CCFF00]' : 'text-gray-400'
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#CCFF00] transition-colors">
                {chapter.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {chapter.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* More Chapters CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] border border-[#2A2A2A] text-gray-400">
            <span>+11 capítulos exclusivos no e-book completo</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Additional Topics */}
        <motion.div
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { icon: Heart, label: 'Regulação emocional' },
            { icon: Eye, label: 'Visualização mental' },
            { icon: User, label: 'Identidade de atleta' },
            { icon: Award, label: 'Autoconfiança treinável' },
          ].map((topic, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#141414]/50 border border-[#2A2A2A]/50"
            >
              <topic.icon className="w-5 h-5 text-[#CCFF00]" />
              <span className="text-gray-300 text-sm">{topic.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Chapters;
