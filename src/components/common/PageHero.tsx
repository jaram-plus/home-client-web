import { PageHeroProps } from '@/types';

/**
 * Reusable Page Hero Section
 * 모든 페이지의 Hero 섹션 중복을 제거
 */
const PageHero = ({ title, highlight, description }: PageHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          {title}
          {highlight && (
            <span className="text-jaram-400"> {highlight}</span>
          )}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
