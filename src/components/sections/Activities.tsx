'use client';

const Activities = () => {
  const activities = [
    {
      title: "학술 세미나",
      description: "최신 기술 트렌드부터 심화 이론까지, 전문가들과 함께하는 고품질 세미나",
      features: [
        "매주 진행되는 정기 세미나",
        "최신 기술 트렌드 공유",
        "질의응답 및 토론 시간",
        "사회에 진출한 선배님들과의 네트워킹 포럼"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "맞춤형 스터디",
      description: "개인의 수준과 관심사에 맞춘 소규모 그룹 스터디와 멘토링 프로그램",
      features: [
        "개인 수준별 맞춤 학습 계획",
        "소규모 그룹 스터디 운영",
        "멘토-멘티 프로그램 지원",
        "프로젝트 기반 실무 학습"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "팀 프로젝트",
      description: "실무 경험을 쌓을 수 있는 협업 프로젝트와 대외 활동 참여 기회",
      features: [
        "실무 기반 협업 프로젝트",
        "대외 해커톤 참가",
        "오픈소스 기여 활동",
        "포트폴리오 구축 지원"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            함께 성장하는 <span style={{ color: '#e50113' }}>3가지 방법</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JARAM에서는 체계적인 프로그램을 통해 여러분의 성장을 지원합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl mb-6 mx-auto shadow-lg" style={{ backgroundColor: '#e50113' }}>
                <div className="text-white">
                  {activity.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                {activity.title}
              </h3>
              
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {activity.description}
              </p>
              
              <ul className="space-y-3">
                {activity.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#e50113' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            더 자세한 활동 내용이 궁금하신가요?
          </p>
          <a
            href="/about"
            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ 
              backgroundColor: '#e50113'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c0392b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#e50113';
            }}
          >
            학회 소개 보기
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Activities;
