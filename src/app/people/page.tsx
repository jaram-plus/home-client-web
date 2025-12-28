'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/common/PageHero';
import Button from '@/components/common/Button';
import MemberCard from '@/components/common/MemberCard';
import peopleData from '@/data/peopleData.json';
import tagsData from '@/data/tags.json';

export default function PeoplePage() {
  const [selectedStatus, setSelectedStatus] = useState('전체');
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  // 상태 그룹 정의 (중복 제거를 위한 상수)
  const STATUS_GROUPS: Record<string, string[]> = {
    '임원진': ['임원진', '부원'],
    '회원': ['잘 모르겠어요', '수습회원', '준회원', '정회원', '준OB', '휴학회원'],
    '졸업생': ['OB']
  };

  type StatusGroupKey = keyof typeof STATUS_GROUPS;

  // 상태 매칭 로직
  const getStatusGroup = (status: string): string => {
    for (const [group, statuses] of Object.entries(STATUS_GROUPS)) {
      if (statuses.includes(status)) {
        return group;
      }
    }
    return status; // 매칭되지 않는 경우 원래 상태 반환
  };

  // 필터링된 멤버 데이터
  const filteredPeople = peopleData.filter(person => {
    let statusMatch = false;
    
    if (selectedStatus === '전체') {
      statusMatch = true;
    } else {
      // 선택된 필터 그룹에 해당하는 상태들과 매칭
      const targetStatuses = STATUS_GROUPS[selectedStatus as StatusGroupKey];
      statusMatch = targetStatuses ? targetStatuses.includes(person.status) : person.status === selectedStatus;
    }
    
    const techMatch = selectedTech.length === 0 || 
      selectedTech.some(tech => person.tags.includes(tech));
    return statusMatch && techMatch;
  }).sort((a, b) => {
    // 1. 기수 오름차순
    if (a.generation !== b.generation) {
      return a.generation - b.generation;
    }
    // 2. 이름 오름차순
    return a.name.localeCompare(b.name, 'ko');
  });

  // 기술 태그 토글
  const toggleTechTag = (tag: string) => {
    setSelectedTech(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <Layout>
      {/* Hero Section - Reusable Component */}
      <PageHero
        title="자람의"
        highlight="인재들"
        description="다양한 분야에서 활약하는 JARAM 멤버들을 만나보세요"
      />

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 소속 필터 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">소속별 필터</h3>
            <div className="flex flex-wrap gap-3">
              {tagsData.statusTags.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    selectedStatus === status
                      ? 'text-white bg-jaram-400'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* 기술 스택 필터 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              기술 스택 필터 
              {selectedTech.length > 0 && (
                <span className="text-sm font-normal text-gray-600">
                  ({selectedTech.length}개 선택)
                </span>
              )}
            </h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(tagsData.techTags)).sort().map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleTechTag(tech)}
                  className={`px-3 py-1 text-sm rounded-full font-medium transition-colors duration-200 ${
                    selectedTech.includes(tech)
                      ? 'text-white bg-jaram-400'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
            {selectedTech.length > 0 && (
              <button
                onClick={() => setSelectedTech([])}
                className="mt-3 text-sm text-gray-500 hover:text-gray-700"
              >
                기술 스택 필터 초기화
              </button>
            )}
          </div>
        </div>
      </section>

      {/* People Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              총 {filteredPeople.length}명의 멤버
            </h2>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-end gap-2">
                <p className="text-sm text-gray-600">자람의 역사에 함께하세요</p>
                <Button
                  href={process.env.NEXT_PUBLIC_MEMBER_REGISTRATION_URL || 'https://www.jaram.net/'}
                  size="md"
                >
                  동문 등록하기
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="sr-only">(새 창에서 열림)</span>
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                {selectedStatus !== '전체' && (
                  <span className="mr-4">소속: {selectedStatus}</span>
                )}
                {selectedTech.length > 0 && (
                  <span>기술: {selectedTech.join(', ')}</span>
                )}
              </div>
            </div>
          </div>

          {filteredPeople.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                해당 조건의 멤버가 없습니다
              </h3>
              <p className="text-gray-600 mb-4">
                다른 필터 조건을 선택해보세요
              </p>
              <Button
                onClick={() => {
                  setSelectedStatus('전체');
                  setSelectedTech([]);
                }}
                size="sm"
              >
                전체 보기
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPeople.map((member) => (
                <MemberCard key={member.id} member={member} showAllTags={true} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            당신도 JARAM의 <span style={{ color: '#e50113' }}>일원</span>이 되어보세요
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            다양한 분야의 동료들과 함께 성장할 기회가 기다리고 있습니다
          </p>
          <Button href="/join" size="lg">
            지원하기
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </section>
    </Layout>
  );
}