'use client';

import Link from 'next/link';
import Button from '@/components/common/Button';
import { CONTACT_DISPLAY } from '@/constants/contacts';

const CallToAction = () => {
  return (
    <section
      className="py-20 bg-gradient-to-r from-jaram-400 to-[#c0392b]"
      style={{
        minHeight: '400px'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{color: 'white'}}>
            지금 바로 시작하세요
          </h2>
          
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
            41년의 역사와 함께하는 JARAM에서<br />
            여러분의 꿈을 현실로 만들어보세요
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4" role="img" aria-label="로켓: 빠른 성장">🚀</div>
              <h3 className="text-lg font-semibold mb-2" style={{color: 'white'}}>빠른 성장</h3>
              <p className="text-sm" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                체계적인 멘토링과<br />실전 프로젝트
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4" role="img" aria-label="사람들: 끈끈한 네트워크">👥</div>
              <h3 className="text-lg font-semibold mb-2" style={{color: 'white'}}>끈끈한 네트워크</h3>
              <p className="text-sm" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                평생 함께할<br />개발자 동료들
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4" role="img" aria-label="가방: 취업 지원">💼</div>
              <h3 className="text-lg font-semibold mb-2" style={{color: 'white'}}>취업 지원</h3>
              <p className="text-sm" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                선배들의 노하우와<br />실무 경험 공유
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/join"
              className="px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-white text-jaram-400 hover:bg-gray-50"
            >
              41기 지원하기
            </Link>

            <Link
              href="/people"
              className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-jaram-400 bg-transparent"
            >
              선배들 만나보기
            </Link>
          </div>
          
          <div className="mt-12 pt-8" style={{borderTop: '1px solid rgba(255, 255, 255, 0.3)'}}>
            <p className="text-sm" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
              궁금한 점이 있으시다면 언제든 연락주세요
            </p>
            <div className="mt-4 space-y-1">
              {CONTACT_DISPLAY.president && (
                <p className="font-medium" style={{color: 'white'}}>
                  회장: {CONTACT_DISPLAY.president}
                </p>
              )}
              {CONTACT_DISPLAY.promotion && (
                <p className="font-medium" style={{color: 'white'}}>
                  홍보: {CONTACT_DISPLAY.promotion}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
