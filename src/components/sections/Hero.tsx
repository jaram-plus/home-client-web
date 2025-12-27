'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  
  const lines = [
    '받은 만큼 나누고',
    '나눈 만큼 성장하는',
    '선순환 컴퓨터 학회'
  ];

  // 클라이언트 마운트 체크
  useEffect(() => {
    setMounted(true);
  }, []);

  // 타이핑 애니메이션
  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];
      let charIndex = 0;
      
      const timer = setInterval(() => {
        if (charIndex <= currentLine.length) {
          setDisplayedText(currentLine.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            if (currentLineIndex === lines.length - 1) {
              // 마지막 줄 완료 시 타이핑 완료 표시
              setTypingComplete(true);
            }
            setCurrentLineIndex(prev => prev + 1);
            setDisplayedText('');
          }, 800);
        }
      }, 80);
      
      return () => clearInterval(timer);
    }
  }, [currentLineIndex]);

  // 숫자 카운트업 애니메이션
  const yearsTimeoutRef = useRef<number | null>(null);
  const yearsIntervalRef = useRef<number | null>(null);
  const membersTimeoutRef = useRef<number | null>(null);
  const membersIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    yearsTimeoutRef.current = window.setTimeout(() => {
      yearsIntervalRef.current = window.setInterval(() => {
        setYearsCount(prev => {
          if (prev < 41) return prev + 1;
          if (yearsIntervalRef.current) {
            clearInterval(yearsIntervalRef.current);
            yearsIntervalRef.current = null;
          }
          return 41;
        });
      }, 50);
    }, 2000);

    membersTimeoutRef.current = window.setTimeout(() => {
      membersIntervalRef.current = window.setInterval(() => {
        setMembersCount(prev => {
          if (prev < 70) return prev + 2;
          if (membersIntervalRef.current) {
            clearInterval(membersIntervalRef.current);
            membersIntervalRef.current = null;
          }
          return 70;
        });
      }, 30);
    }, 2500);

    return () => {
      // Clear timeouts
      if (yearsTimeoutRef.current) {
        clearTimeout(yearsTimeoutRef.current);
        yearsTimeoutRef.current = null;
      }
      if (membersTimeoutRef.current) {
        clearTimeout(membersTimeoutRef.current);
        membersTimeoutRef.current = null;
      }

      // Clear intervals
      if (yearsIntervalRef.current) {
        clearInterval(yearsIntervalRef.current);
        yearsIntervalRef.current = null;
      }
      if (membersIntervalRef.current) {
        clearInterval(membersIntervalRef.current);
        membersIntervalRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* 네트워크 연결선 배경 */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(229, 1, 19, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* 기하학적 파티클과 회로선 효과 - 타이핑 완료 후에만 렌더링 */}
      {mounted && typingComplete && (
        <>
          {/* 떠다니는 기하학적 도형들 */}
          {[...Array(15)].map((_, i) => {
            const shapes = ['□', '○', '△', '◇', '◯', '▢'];
            const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
            const randomSize = ['text-xs', 'text-sm', 'text-base'][Math.floor(Math.random() * 3)];
            const randomDelay = Math.random() * 3;
            
            return (
              <motion.div
                key={`shape-${i}`}
                className={`absolute text-white/20 ${randomSize} pointer-events-none select-none`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'blur(0.5px)',
                }}
                initial={{ 
                  opacity: 0,
                  scale: 0,
                  rotate: 0
                }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1.2, 0.5],
                  rotate: [0, 360],
                  x: [0, (Math.random() - 0.5) * 200],
                  y: [0, (Math.random() - 0.5) * 200],
                }}
                transition={{
                  duration: 8 + Math.random() * 6,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: "easeInOut"
                }}
              >
                {randomShape}
              </motion.div>
            );
          })}

          {/* 회로선 패턴 */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`circuit-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                width: `${50 + Math.random() * 100}px`,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(229, 1, 19, 0.3), transparent)',
              }}
              initial={{ 
                opacity: 0,
                scaleX: 0
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* 펄스 원형 효과 */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'rgba(229, 1, 19, 0.5)',
              }}
              initial={{ 
                scale: 0,
                opacity: 0
              }}
              animate={{
                scale: [0, 3, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
      
      <motion.div 
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          {currentLineIndex === 0 && (
            <motion.span 
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {displayedText}
              <span className="animate-pulse">|</span>
            </motion.span>
          )}
          {currentLineIndex === 1 && (
            <>
              <span className="block">받은 만큼 나누고</span>
              <motion.span 
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-jaram-400">{displayedText}</span>
                <span className="animate-pulse">|</span>
              </motion.span>
            </>
          )}
          {currentLineIndex === 2 && (
            <>
              <span className="block">받은 만큼 나누고</span>
              <span className="block">
                <span className="text-jaram-400">나눈 만큼 성장하는</span>
              </span>
              <motion.span 
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {displayedText}
                <span className="animate-pulse">|</span>
              </motion.span>
            </>
          )}
          {currentLineIndex >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block">받은 만큼 나누고</span>
              <span className="block">
                <span className="text-jaram-400">나눈 만큼 성장하는</span>
              </span>
              <span className="block">선순환 컴퓨터 학회</span>
            </motion.div>
          )}
        </div>
        
        <motion.p 
          className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          한양대학교 ERICA캠퍼스의 역사깊은 컴퓨터학회 JARAM에서<br />
          함께 성장하는 개발자가 되어보세요
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/join"
              className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl min-w-[140px] justify-center"
              style={{ backgroundColor: '#e50113' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c0392b')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e50113')}
            >
              지원하기
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 min-w-[140px] justify-center hover:bg-white hover:text-gray-900"
            >
              학회 소개
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer"
          >
            <div className="text-4xl font-bold text-jaram-400 mb-2">
              {yearsCount > 0 ? yearsCount : '41'}
            </div>
            <div className="text-gray-300">년의 역사</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer"
          >
            <div className="text-4xl font-bold text-jaram-400 mb-2">
              {membersCount > 0 ? `${membersCount}+` : '70+'}
            </div>
            <div className="text-gray-300">명의 활성 멤버</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer"
          >
            <motion.div 
              className="text-4xl font-bold text-jaram-400 mb-2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              ∞
            </motion.div>
            <div className="text-gray-300">무한한 성장</div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 6, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
