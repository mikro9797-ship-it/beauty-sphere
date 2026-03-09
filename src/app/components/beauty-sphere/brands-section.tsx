/**
 * BrandsSection — блок логотипов брендов
 * Показывает 20+ официальных партнеров
 * Анимация появления при скролле + hover эффекты
 */

import { motion } from 'motion/react';
import { brands } from './data';
import { useInView } from '../hooks/use-in-view';

export function BrandsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Заголовок секции */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] lg:text-5xl">
            Официальный дилер
            <br />
            профессиональных брендов
          </h2>
          <p className="text-base sm:text-lg text-[#666666]">
            Более 20 мировых производителей космецевтики
          </p>
        </motion.div>

        {/* Сетка логотипов */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 lg:gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              className="group relative flex aspect-square items-center justify-center rounded-xl sm:rounded-2xl border border-[#E6E6E6] bg-white p-4 sm:p-6 transition-all hover:border-[#E94D8A]/30 hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Hover эффект — легкое свечение */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#E94D8A]/5 to-[#FF6B9D]/5 opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Лого бренда (заглушка — текстовое название) */}
              <div className="relative z-10 text-center">
                <p className="text-xs sm:text-sm font-semibold text-[#111111]">
                  {brand.name}
                </p>
                <p className="mt-1 text-[10px] sm:text-xs text-[#999999] hidden sm:block">
                  {brand.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Призыв к действию */}
        <motion.div
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm text-[#999999] px-4">
            Все продукты сертифицированы и поставляются напрямую от производителей
          </p>
        </motion.div>
      </div>
    </section>
  );
}