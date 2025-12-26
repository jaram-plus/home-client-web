'use client';

import Layout from '@/components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            우리의 <span style={{ color: '#e50113' }}>이야기</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            41년간 이어온 JARAM의 역사와 철학, 그리고 함께 성장하는 문화를 소개합니다
          </p>
        </div>
      </section>

      {/* Our Story & Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story & Philosophy
              </h2>
              <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: '#e50113' }}></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">41년의 깊은 역사</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  1984년에 설립된 JARAM은 한양대학교 ERICA캠퍼스의 가장 오래된 컴퓨터학회입니다. 
                  41년간 축적된 지식과 경험을 바탕으로, 수많은 IT 전문가들을 배출해왔습니다.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  우리는 단순한 학회가 아닌, 함께 성장하는 커뮤니티입니다. 
                  선후배 간의 끈끈한 유대관계와 지속적인 학습 문화를 통해 
                  각자의 꿈을 실현해나가고 있습니다.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#e50113' }}>1984</div>
                  <div className="text-gray-600 mb-4">설립년도</div>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#e50113' }}>41</div>
                  <div className="text-gray-600 mb-4">년의 역사</div>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#e50113' }}>500+</div>
                  <div className="text-gray-600">졸업생</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">JARAM의 핵심 가치</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e50113' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">성장</h4>
                  <p className="text-gray-600 text-sm">
                    개인의 성장이 곧 학회의 성장이며, 함께 발전해나가는 것을 추구합니다
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e50113' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">협력</h4>
                  <p className="text-gray-600 text-sm">
                    혼자서는 이룰 수 없는 목표를 함께 달성하며 시너지를 만들어냅니다
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e50113' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">혁신</h4>
                  <p className="text-gray-600 text-sm">
                    최신 기술 트렌드를 학습하고 창의적인 아이디어로 새로운 가치를 창출합니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              JARAM에서 진행하는 다양한 활동들을 통해 실무 역량을 기르고 네트워크를 확장할 수 있습니다
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* 학술 세미나 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e50113' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">정기 학술 세미나</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>매주 목요일 최신 기술 트렌드 발표</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>현업 개발자 초청 특강</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>실무 프로젝트 경험 공유</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>Q&A 및 네트워킹 시간</span>
                </div>
              </div>
            </div>

            {/* 스터디 그룹 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e50113' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">맞춤형 스터디</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>개인 수준별 멘토링</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>알고리즘 및 코딩테스트 대비</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>포트폴리오 및 이력서 리뷰</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>기술 면접 모의고사</span>
                </div>
              </div>
            </div>

            {/* 프로젝트 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e50113' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">팀 프로젝트</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>실제 서비스 개발 경험</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>외부 해커톤 및 공모전 참가</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>Git 협업 및 코드 리뷰</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#e50113' }}></span>
                  <span>배포 및 운영 경험</span>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube 활동 소개 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  JARAM <span style={{ color: '#e50113' }}>YouTube</span> 채널
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  학회 활동 현장과 세미나 영상을 YouTube를 통해 공유하고 있습니다. 
                  실제 활동 모습을 확인하고, 유용한 기술 콘텐츠를 만나보세요.
                </p>
                <div className="space-y-3 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" style={{ color: '#e50113' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>정기 세미나 녹화 영상</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" style={{ color: '#e50113' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>프로젝트 발표 및 시연</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" style={{ color: '#e50113' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>학회 소개 및 홍보 영상</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group cursor-pointer">
                <a
                  href="https://www.youtube.com/@jaramhyu7218/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  {/* YouTube 채널 썸네일 배경 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800"></div>
                  
                  {/* 컨텐츠 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      {/* YouTube 로고 */}
                      <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-12 h-12" style={{ color: '#e50113' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      
                      {/* 텍스트 */}
                      <h4 className="text-xl font-bold mb-2">JARAM 공식 채널</h4>
                      <p className="text-white/90 mb-4">학회 활동과 세미나 영상을 만나보세요</p>
                      
                      {/* 재생 버튼 효과 */}
                      <div className="inline-flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1M7 7h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
                        </svg>
                        <span className="font-medium">채널 방문하기</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements & Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Achievements & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              JARAM에서 얻을 수 있는 실질적인 혜택과 성과들을 소개합니다
            </p>
          </div>

          {/* 취업 현황 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">졸업생 진출 현황</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center mb-8">
              {/* AWS */}
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-4">
                <img 
                  src="/images/companies/aws.png" 
                  alt="AWS Ireland" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 네이버 */}
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-4">
                <img 
                  src="/images/companies/naver.png" 
                  alt="네이버" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 토스페이먼츠 */}
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-4">
                <img 
                  src="/images/companies/toss.webp" 
                  alt="토스페이먼츠" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 엔씨소프트 */}
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-4">
                <img 
                  src="/images/companies/ncsoft.png" 
                  alt="엔씨소프트" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 펄어비스 */}
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-4">
                <img 
                  src="/images/companies/pearlabyss.png" 
                  alt="펄어비스" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* KB금융 */}
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-4">
                <img 
                  src="/images/companies/kb.webp" 
                  alt="KB금융" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 보잉코리아 */}
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-4">
                <img 
                  src="/images/companies/boeing.png" 
                  alt="보잉코리아" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 넥슨 */}
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-4">
                <img 
                  src="/images/companies/nexon.jpg" 
                  alt="넥슨" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* 대학원 진학 현황 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">대학원 진학 현황</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#e50113' }}></div>
                    <h5 className="font-semibold text-gray-900">고려대학교</h5>
                  </div>
                  <p className="text-gray-600 text-sm">인공지능대학원 Decision Making Lab</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#e50113' }}></div>
                    <h5 className="font-semibold text-gray-900">KAIST</h5>
                  </div>
                  <p className="text-gray-600 text-sm">문화기술대학원</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8">
              JARAM 졸업생들은 AWS Ireland, 네이버, 토스페이먼츠, 엔씨소프트, 펄어비스, KB금융, 보잉코리아, 넥슨 등 국내외 유수 기업과<br/>
              고려대 인공지능대학원, KAIST 문화기술대학원 등 명문 대학원에서 활약하고 있습니다
            </p>
          </div>

          {/* 학회 혜택 */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">학회 혜택</h3>
              <div className="space-y-4">
                {[
                  { title: '전용 학습 공간', desc: '24시간 이용 가능한 학회실과 최신 장비' },
                  { title: '도서 및 강의 지원', desc: '기술 서적 구매 지원 및 온라인 강의 계정 제공' },
                  { title: '개발 환경 지원', desc: '서버 장비 및 보유 도서 등 자율적 이용 가능' },
                  { title: '네트워킹 기회', desc: '동문 네트워크 및 업계 전문가와의 만남' },
                //   { title: '대회 참가 지원', desc: '해커톤, 공모전 참가비 및 교통비 지원' },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0" style={{ backgroundColor: '#e50113' }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 주요 성과 - 검증 필요로 주석 처리 */}
            {/* <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">주요 성과</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#e50113' }}>95%</div>
                  <div className="text-gray-900 font-semibold mb-1">취업률</div>
                  <div className="text-gray-600 text-sm">희망 분야 취업 성공률</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#e50113' }}>50+</div>
                  <div className="text-gray-900 font-semibold mb-1">수상 실적</div>
                  <div className="text-gray-600 text-sm">최근 3년간 대회 수상</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#e50113' }}>100+</div>
                  <div className="text-gray-900 font-semibold mb-1">프로젝트</div>
                  <div className="text-gray-600 text-sm">연간 완성 프로젝트 수</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #e50113, #b0000e)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            함께 성장할 준비가 되셨나요?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            41년 역사의 JARAM과 함께 당신의 개발자 여정을 시작하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              지원하기
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/people"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              멤버 만나보기
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
