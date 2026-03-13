import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Os e-books são para iniciantes ou jogadores avançados?',
      answer: 'Os conteúdos foram desenvolvidos para tenistas de todos os níveis. Os conceitos são explicados de forma acessível e podem ser aplicados independentemente do nível técnico, desde iniciantes até competidores experientes.',
    },
    {
      question: 'Como vou receber os materiais?',
      answer: 'Após a confirmação do pagamento, você receberá um e-mail com os links para download imediato dos e-books em formato PDF. O acesso é vitalício, então você pode baixar e consultar sempre que quiser.',
    },
    {
      question: 'Posso comprar apenas um e-book ou preciso comprar o combo?',
      answer: 'Você pode comprar cada e-book individualmente por R$ 29,90 (Saque de Elite, Forehand de Elite ou Backhand Imparável) ou optar pelo Combo Completo com desconto de R$ 59,70. A escolha é sua!',
    },
    {
      question: 'E se o conteúdo não funcionar para mim?',
      answer: 'Você tem 7 dias de garantia incondicional em todos os produtos. Se não ficar satisfeito com o material, basta solicitar o reembolso e devolvemos 100% do valor investido, sem perguntas ou burocracia.',
    },
    {
      question: 'Posso imprimir os e-books?',
      answer: 'Sim! Todos os e-books estão em formato PDF e podem ser impressos para leitura offline ou consulta rápida antes dos jogos. O Checklist para Imprimir foi especialmente desenvolvido para levar para a quadra!',
    },
    {
      question: 'Tem atualizações futuras?',
      answer: 'Sim! Ao adquirir qualquer e-book, você terá acesso a todas as atualizações futuras sem custo adicional. Estamos constantemente adicionando novo conteúdo baseado em feedback dos leitores.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-[#141414] overflow-hidden" id="faq">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCFF00]" />
            <span className="text-[#CCFF00] font-semibold text-xs sm:text-sm tracking-wider">PERGUNTAS FREQUENTES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-2 sm:px-0">
            Tire Suas <span className="text-gradient">Dúvidas</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-2 sm:space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-lg sm:rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-3 sm:p-5 text-left hover:bg-[#141414] transition-colors"
              >
                <span className="text-white font-medium pr-3 sm:pr-4 text-sm sm:text-base">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCFF00]" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-3 sm:px-5 pb-3 sm:pb-5 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Ainda tem dúvidas?</p>
          <a
            href="mailto:fabriciostacon@hotmail.com"
            className="inline-flex items-center gap-2 text-[#CCFF00] hover:underline text-sm sm:text-base"
          >
            Entre em contato conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
