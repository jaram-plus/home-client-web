'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import MemberCard from '@/components/common/MemberCard';
import { fetchApprovedMembers } from '@/services/api';
import { transformApiMembersToMembers } from '@/utils/memberTransformer';
import { Member } from '@/types/member';

const FeaturedPeople = () => {
  const [featuredMembers, setFeaturedMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
  const getRandomMembers = (members: Member[], count: number): Member[] => {
    if (members.length <= count) {
      return members; // 멤버 수가 4명보다 적으면 전체 반환
    }
    const shuffled = fisherYatesShuffle(members);
    return shuffled.slice(0, count);
  };

  // 클라이언트에서만 API 호출 및 랜덤 멤버 선택 (hydration mismatch 방지)
  useEffect(() => {
    async function loadFeaturedMembers() {
      try {
        setIsLoading(true);
        setError(null);

        const apiMembers = await fetchApprovedMembers();
        const transformedMembers = transformApiMembersToMembers(apiMembers);
        const randomMembers = getRandomMembers(transformedMembers, 4);

        setFeaturedMembers(randomMembers);
      } catch (err) {
        console.error('Failed to load featured members:', err);
        setError('멤버 데이터를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.');
        setFeaturedMembers([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadFeaturedMembers();
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

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-pulse">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                  <div className="h-5 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-16 mb-3"></div>
                  <div className="space-y-2 w-full">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 mb-12">
            <p className="text-gray-600">{error}</p>
          </div>
        ) : featuredMembers.length === 0 ? (
          <div className="text-center py-12 mb-12">
            <p className="text-gray-600">표시할 멤버가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            더 많은 JARAM 멤버들을 만나보세요
          </p>
          <Link
            href="/people"
            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl bg-jaram-400 hover:bg-jaram-500"
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