'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [yearsCount, setYearsCount] = useState<number | null>(null);
  const [membersCount, setMembersCount] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  // Precomputed random values for geometric shapes (hydration-safe)
  const [shapes, setShapes] = useState<Array<{
    id: string;
    shape: string;
    size: string;
    left: number;
    top: number;
    delay: number;
    xMove: number;
    yMove: number;
    duration: number;
  }>>([]);

  // Precomputed random values for circuits (hydration-safe)
  const [circuits, setCircuits] = useState<Array<{
    id: string;
    left: number;
    top: number;
    width: number;
    duration: number;
    delay: number;
  }>>([]);

  // Precomputed random values for pulse effects (hydration-safe)
  const [pulses, setPulses] = useState<Array<{
    id: string;
    left: number;
    top: number;
    duration: number;
    delay: number;
  }>>([]);
  
  const lines = [
    '받은 만큼 나누고',
    '나눈 만큼 성장하는',
    '선순환 컴퓨터 학회'
  ];

  // 클라이언트 마운트 체크
  useEffect(() => {
    setMounted(true);

    // Generate random values only on client (prevents hydration mismatch)
    const shapeTypes = ['□', '○', '△', '◇', '◯', '▢'];
    const sizeTypes = ['text-xs', 'text-sm', 'text-base'];

    setShapes(
      Array.from({ length: 15 }, (_, i) => ({
        id: `shape-${i}`,
        shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        size: sizeTypes[Math.floor(Math.random() * sizeTypes.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        xMove: (Math.random() - 0.5) * 200,
        yMove: (Math.random() - 0.5) * 200,
        duration: 8 + Math.random() * 6,
      }))
    );

    setCircuits(
      Array.from({ length: 8 }, (_, i) => ({
        id: `circuit-${i}`,
        left: Math.random() * 90,
        top: Math.random() * 90,
        width: 50 + Math.random() * 100,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 2,
      }))
    );

    setPulses(
      Array.from({ length: 6 }, (_, i) => ({
        id: `pulse-${i}`,
        left: 20 + Math.random() * 60,
        top: 20 + Math.random() * 60,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 3,
      }))
    );
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
    // 통계 그리드 표시 시간(5s)과 동시에 카운트업 시작
    yearsTimeoutRef.current = window.setTimeout(() => {
      // Start from 1, not 0
      setYearsCount(1);
      yearsIntervalRef.current = window.setInterval(() => {
        setYearsCount(prev => {
          if (prev === null) return 1;
          if (prev < 41) return prev + 1;
          if (yearsIntervalRef.current) {
            clearInterval(yearsIntervalRef.current);
            yearsIntervalRef.current = null;
          }
          return 41;
        });
      }, 50);
    }, 5000);

    membersTimeoutRef.current = window.setTimeout(() => {
      // Start from 2, not 0
      setMembersCount(2);
      membersIntervalRef.current = window.setInterval(() => {
        setMembersCount(prev => {
          if (prev === null) return 2;
          if (prev < 70) return prev + 2;
          if (membersIntervalRef.current) {
            clearInterval(membersIntervalRef.current);
            membersIntervalRef.current = null;
          }
          return 70;
        });
      }, 30);
    }, 5000);

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
          {shapes.map((shape) => (
            <motion.div
              key={shape.id}
              className={`absolute text-white/20 ${shape.size} pointer-events-none select-none`}
              style={{
                left: `${shape.left}%`,
                top: `${shape.top}%`,
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
                x: [0, shape.xMove],
                y: [0, shape.yMove],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                delay: shape.delay,
                ease: "easeInOut"
              }}
            >
              {shape.shape}
            </motion.div>
          ))}

          {/* 회로선 패턴 */}
          {circuits.map((circuit) => (
            <motion.div
              key={circuit.id}
              className="absolute pointer-events-none"
              style={{
                left: `${circuit.left}%`,
                top: `${circuit.top}%`,
                width: `${circuit.width}px`,
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
                duration: circuit.duration,
                repeat: Infinity,
                delay: circuit.delay,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* 펄스 원형 효과 */}
          {pulses.map((pulse) => (
            <motion.div
              key={pulse.id}
              className="absolute pointer-events-none"
              style={{
                left: `${pulse.left}%`,
                top: `${pulse.top}%`,
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
                duration: pulse.duration,
                repeat: Infinity,
                delay: pulse.delay,
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
              {yearsCount !== null ? yearsCount : <span className="opacity-0">41</span>}
            </div>
            <div className="text-gray-300">년의 역사</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer"
          >
            <div className="text-4xl font-bold text-jaram-400 mb-2">
              {membersCount !== null ? `${membersCount}+` : <span className="opacity-0">70+</span>}
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
