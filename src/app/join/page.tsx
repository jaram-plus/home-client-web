'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/common/PageHero';
import Button from '@/components/common/Button';
import ContactCard from '@/components/common/ContactCard';
import IconContainer from '@/components/common/IconContainer';
import SocialLink from '@/components/common/SocialLink';
import siteConfig from '@/data/siteConfig.json';
import { SOCIAL_LINKS } from '@/constants';
import { ICONS } from '@/constants/icons';

export default function JoinPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Format deadline from ISO date to "MM/DD까지 제출"
  const formatDeadline = (isoDate: string): string => {
    const date = new Date(isoDate);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}/${day}까지 제출`;
  };

  const deadline = siteConfig.recruitment?.deadline
    ? formatDeadline(siteConfig.recruitment.deadline)
    : 'TBD';

  const faqs = [
    {
      question: "모집 시기는 언제인가요?",
      answer: "JARAM은 매 학기 초에 신입 회원을 모집합니다. 보통 3월과 9월에 가두모집과 OT를 진행합니다."
    },
    {
      question: "전공이나 학년에 제한이 있나요?",
      answer: "전공에 상관없이 컴퓨터와 프로그래밍에 관심이 있는 모든 학생을 환영합니다. 학년 제한도 없으며, 모든 학년 누구나 지원 가능합니다."
    },
    {
      question: "프로그래밍 경험이 없어도 괜찮나요?",
      answer: "네, 전혀 문제없습니다. JARAM은 초보자도 충분히 성장할 수 있는 환경을 제공합니다. 기초부터 차근차근 배울 수 있는 스터디와 멘토링 프로그램이 준비되어 있습니다."
    },
    {
      question: "활동 시간이 어떻게 되나요?",
      answer: "학회방은 자율적으로 이용 가능하며, 스터디 및 프로젝트의 경우 팀별로 논의하여 결정됩니다."
    },
    {
      question: "회비가 있나요?",
      answer: "학기당 소정의 회비가 있으며, 이는 학회 운영, 도서 구입, 세미나 진행 등에 사용됩니다. 구체적인 금액은 OT에서 안내해드립니다."
    },
    {
      question: "졸업 후에도 연결이 유지되나요?",
      answer: "네! JARAM은 41년 역사의 강력한 동문 네트워크를 가지고 있습니다. 졸업 후에도 선후배 간의 지속적인 교류와 커리어 도움을 받을 수 있습니다."
    }
  ];

  const recruitmentSteps = [
    {
      step: 1,
      title: "지원서 작성",
      description: deadline,
      icon: ICONS.document({})
    },
    {
      step: 2,
      title: "학회비 납부",
      description: "지원서 폼 내에 자세한 안내 포함",
      icon: ICONS.money({})
    },
    {
      step: 3,
      title: "학회 활동 시작",
      description: "JARAM의 새로운 멤버로 활동 시작",
      icon: ICONS.checkmark({})
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Reusable Component */}
      <PageHero
        title="JARAM"
        highlight="지원하기"
        description="41년 역사의 JARAM과 함께 성장할 준비가 되셨나요?"
      />

      {/* Recruitment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              모집 절차
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              간단한 3단계 절차를 통해 JARAM의 새로운 멤버가 되어보세요
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

            <div className="space-y-12">
              {recruitmentSteps.map((step, index) => (
                <div key={step.step} className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:flex-row`}>
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  }`}>
                    <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <IconContainer
                          icon={step.icon}
                          size="sm"
                          className="mr-4"
                        />
                        <div>
                          <div className="text-sm text-gray-500 font-medium">STEP {step.step}</div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center circle */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-jaram-400"></div>

                  {/* Spacer */}
                  <div className="w-full lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                지원서 작성
              </h2>
              <p className="text-xl text-gray-600">
                아래 지원서를 작성하여 JARAM에 합류해보세요
              </p>
            </div>

            {/* Alternative Link - Button Component */}
            <div className="text-center mt-8">
              <Button
                href={siteConfig.applyFormUrl}
                size="md"
                className="group"
              >
                새 창에서 지원서 작성하기
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              궁금한 점들을 미리 확인해보세요
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                문의사항이 있으신가요?
              </h2>
              <p className="text-xl text-gray-600">
                언제든지 연락주세요. 친절하게 답변해드리겠습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* ContactCard Components */}
              <ContactCard type="president" />
              <ContactCard type="promotion" />
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                또는 우리의 소셜 미디어를 통해서도 연락하실 수 있습니다
              </p>
              <div className="flex justify-center space-x-6">
                <SocialLink platform="instagram" url={SOCIAL_LINKS.instagram} />
                <SocialLink platform="github" url={SOCIAL_LINKS.github} />
                <SocialLink platform="youtube" url={SOCIAL_LINKS.youtube} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
