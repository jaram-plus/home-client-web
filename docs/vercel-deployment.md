# JARAM 웹사이트 Vercel 배포 가이드

## 🚀 TL;DR (간단 배포)
```bash
npx next build
npx vercel --prod
```

## 개요
이 문서는 JARAM 웹사이트를 Vercel 플랫폼에 배포하는 과정을 설명합니다.

## 배포 정보
- **배포 플랫폼**: Vercel
- **프로젝트명**: jaram
- **배포 일자**: 2025년 9월 3일
- **프로덕션 URL**: https://jaram-3sbhqycnk-dayeondevs-projects.vercel.app
- **관리 대시보드**: https://vercel.com/dayeondevs-projects/jaram

## 사전 요구사항

### 1. 필수 도구
- Node.js (v18 이상)
- npm 또는 yarn
- Git
- Vercel 계정

### 2. 프로젝트 상태 확인
```bash
# 로컬 빌드 테스트
npm run build

# 개발 서버 실행 확인
npm run dev
```

## 배포 과정

### 🚀 빠른 배포 (추천)

프로젝트가 이미 설정된 경우, 두 명령어로 배포 완료:

```bash
# 1. 빌드 테스트
npx next build

# 2. Vercel 배포
npx vercel
```

> **프로덕션 배포**: `npx vercel --prod`

### 📋 최초 설정 (처음 배포 시에만)

#### 1. Vercel CLI 설치 및 로그인

```bash
# Vercel CLI 설치 (npx 사용 시 자동 설치)
npx vercel --version

# Vercel 로그인
npx vercel login
```

**로그인 옵션:**
- GitHub
- Google
- GitLab
- Bitbucket
- Email
- SAML Single Sign-On

#### 2. 프로젝트 배포

```bash
# 프로젝트 루트 디렉토리에서 실행
npx vercel
```

**배포 설정 질문들:**
1. **Set up and deploy**: `Y` (Yes)
2. **Which scope**: 원하는 팀/개인 계정 선택
3. **Link to existing project**: `N` (No) - 새 프로젝트 생성
4. **Project name**: `jaram` (또는 원하는 이름)
5. **Code directory**: `./` (기본값)
6. **Want to modify settings**: `N` (No) - 자동 감지된 설정 사용
7. **Change additional settings**: `N` (No)

### 3. 자동 감지되는 설정

Vercel이 자동으로 감지하는 Next.js 프로젝트 설정:
- **Build Command**: `next build`
- **Development Command**: `next dev --port $PORT`
- **Install Command**: `npm install`
- **Output Directory**: Next.js default

## 배포 후 확인사항

### 1. 페이지 동작 확인
- [x] 홈페이지 (`/`)
- [x] 소개 페이지 (`/about`)
- [x] 멤버 페이지 (`/people`)
- [x] 지원하기 페이지 (`/join`)

### 2. 기능 테스트
- [x] 네비게이션 링크
- [x] 반응형 디자인
- [x] 이미지 로딩 (Picsum Photos)
- [x] 외부 링크 (YouTube, 소셜 미디어)
- [x] 필터링 기능 (/people 페이지)
- [x] FAQ 아코디언 (/join 페이지)

### 3. 성능 확인
- [x] 빌드 성공
- [x] 정적 페이지 생성
- [x] 최적화된 번들 크기

```
Route (app)                         Size  First Load JS    
┌ ○ /                            12.2 kB         126 kB
├ ○ /_not-found                      0 B         114 kB
├ ○ /about                       9.67 kB         124 kB
├ ○ /join                        9.38 kB         123 kB
└ ○ /people                      13.8 kB         128 kB
+ First Load JS shared by all     121 kB
```

## 재배포 방법

### ⚡ 간단 재배포

```bash
# 빌드 테스트 후 배포
npx next build && npx vercel --prod
```

### 🔄 배포 옵션

```bash
# 프로덕션 배포
npx vercel --prod

# 프리뷰 배포 (테스트용)
npx vercel
```

### 🤖 자동 배포 (Git 연동)
GitHub 연동 시 main 브랜치에 push하면 자동 배포됩니다.

```bash
git add .
git commit -m "Update: 변경사항 설명"
git push origin main
```

## 도메인 설정

### 1. 커스텀 도메인 추가
1. Vercel 대시보드 접속
2. 프로젝트 선택
3. Settings → Domains
4. 원하는 도메인 추가

### 2. DNS 설정
- **A Record**: `76.76.19.61`
- **CNAME**: `cname.vercel-dns.com`

## 환경 변수 설정

필요한 경우 Vercel 대시보드에서 환경 변수 설정:

1. Project Settings → Environment Variables
2. 변수 추가:
   - `NODE_ENV`: `production`
   - `NEXT_PUBLIC_SITE_URL`: `https://your-domain.com`

## 트러블슈팅

### 1. 빌드 실패
```bash
# 로컬에서 빌드 테스트
npm run build

# 의존성 확인
npm install
```

### 2. 이미지 로딩 문제
`next.config.ts`에서 이미지 호스트 설정 확인:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'picsum.photos',
    },
  ],
},
```

### 3. 라우팅 문제
- App Router 사용 확인
- 파일 구조가 올바른지 확인
- `layout.tsx` 파일 존재 확인

## 유용한 Vercel CLI 명령어

```bash
# 프로젝트 목록 확인
npx vercel ls

# 배포 로그 확인
npx vercel logs

# 프로젝트 정보 확인
npx vercel inspect

# 로컬 개발 서버 (Vercel 환경)
npx vercel dev

# 도메인 목록 확인
npx vercel domains ls

# 프로젝트 제거
npx vercel remove
```

## 모니터링 및 분석

### 1. Vercel Analytics
- 대시보드에서 방문자 통계 확인
- 페이지 성능 모니터링
- Core Web Vitals 확인

### 2. 로그 확인
```bash
# 실시간 로그 확인
npx vercel logs --follow

# 특정 배포 로그
npx vercel logs [deployment-url]
```

## 보안 설정

### 1. 환경 변수 보안
- 민감한 정보는 환경 변수로 설정
- `NEXT_PUBLIC_` 접두사 주의 (클라이언트 노출)

### 2. HTTPS 강제
- Vercel에서 자동으로 HTTPS 적용
- HTTP → HTTPS 자동 리다이렉트

## 다음 단계

### 1. 성능 최적화
- 이미지 최적화 (`next/image` 활용)
- 코드 스플리팅 확인
- Bundle Analyzer 사용

### 2. SEO 최적화
- 메타데이터 설정
- `sitemap.xml` 생성
- `robots.txt` 설정

### 3. 모니터링 설정
- Error Tracking (Sentry 등)
- Performance Monitoring
- User Analytics

## 연락처
배포 관련 문의: dayeon.dev@gmail.com

---

**배포 완료일**: 2025년 9월 3일  
**마지막 업데이트**: 2025년 9월 3일  
**상태**: ✅ 성공적으로 배포됨
