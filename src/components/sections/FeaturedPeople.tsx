'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import peopleData from '@/data/peopleData.json';
import MemberCard from '@/components/common/MemberCard';

const FeaturedPeople = () => {
  const [featuredMembers, setFeaturedMembers] = useState<typeof peopleData>([]);

  // Fisher-Yates shuffle algorithm (proper unbiased shuffle)
  const fisherYatesShuffle = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // 랜덤으로 4명 선택하는 함수
  const getRandomMembers = (members: typeof peopleData, count: number) => {
    const shuffled = fisherYatesShuffle(members);
    return shuffled.slice(0, count);
  };

  // 클라이언트에서만 랜덤 멤버 선택 (hydration mismatch 방지)
  useEffect(() => {
    setFeaturedMembers(getRandomMembers(peopleData, 4));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            자람의 <span className="text-jaram-500">인재들</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 분야에서 활약하는 JARAM 멤버들을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            더 많은 JARAM 멤버들을 만나보세요
          </p>
          <Link
            href="/people"
            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: '#e50113',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c0392b')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e50113')}
          >
            전체 멤버 보기
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPeople;