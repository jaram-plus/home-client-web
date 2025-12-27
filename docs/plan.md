# JARAM 공식 웹사이트 기획안 (v3.0 - 최종 MVP)
## 1. 전체 기획 요약
-   **프로젝트명**: JARAM Official Website (MVP)
-   **핵심 콘셉트**: "41년의 깊이, 함께 성장하는 사람들의 커뮤니티"
-   **핵심 목표**: 41기 신입 회원 모집을 위한 핵심 정보 전달 및 지원 유도
-   **사이트맵 (Sitemap)**:
    -   `/` (Home)
    -   `/about` (About)
    -   `/people` (People)
    -   `/join` (Join)
-   **핵심 특징**:
    -   Next.js 기반의 정적 사이트로, 백엔드 없이 운영.
    -   `People` 페이지는 상세 페이지 없이, 외부 링크를 활용하는 '팀 카드' 보드 형식으로 구성.
    -   모든 동적 데이터는 프로젝트 내의 JSON 파일로 관리.
---
## 2. 개발 준비물 리스트 (Assets & Data)
### A. 정적 파일 및 미디어 (`/public` 폴더)
1.  **`/public/images/`**:
    -   **`/hero/`**: 메인 페이지 배경으로 사용할 고화질 이미지 1~3개. (예: `hero-1.jpg`)
    -   **`/logos/`**: 졸업생 진출 기업 로고 SVG 또는 고화질 PNG 파일. (예: `naver.svg`, `kb.png`)
    -   **`/activities/`**: `About` 페이지에 사용할 활동 사진 (세미나, 워크샵, MT 등).
    -   **`/people/`**: 모든 인물 프로필 사진 (파일명은 `peopleData.json`의 `imageUrl`과 일치). (예: `kim_jaram.jpg`)
2.  **`/public/icons/`**:
    -   핵심 활동 3가지 아이콘 SVG 파일 (ex: `seminar.svg`, `study.svg`, `workshop.svg`).
    -   외부 링크용 아이콘: `github.svg`, `blog.svg`, `linkedin.svg`.
### B. 데이터 파일 (`/data` 폴더)
1.  **`[파일] /data/siteConfig.json`**:
    -   사이트 전반의 설정 및 외부 URL을 관리합니다.
    ```
    {
      "youtubeChannelUrl": "https://www.youtube.com/@jaramhyu7218/videos",
      "applyFormUrl": "https://docs.google.com/forms/your-form-id",
      "contacts": {
        "president": "신동빈 010-2491-8183",
        "promo_manager": "김승민 010-5585-9203"
      }
    }
    ```
2.  **`[파일] /data/peopleData.json`**:
    -   모든 인물 정보를 담는 핵심 데이터 파일입니다.
    ```
    [
      {
        "id": 1,
        "name": "김자람",
        "generation": 40,
        "status": "운영진",
        "imageUrl": "/images/people/kim_jaram.jpg",
        "introduction": "안정적인 시스템을 설계하는 백엔드 개발자",
        "tags": ["Backend", "Spring", "Database", "MSA"],
        "links": {
          "github": "https://github.com/kimjaram",
          "blog": "https://kimjaram.log"
        }
      },
      {
        "id": 2,
        "name": "이자람",
        "generation": 38,
        "status": "졸업생",
        "imageUrl": "/images/people/lee_jaram.jpg",
        "introduction": "사용자 경험을 중시하는 프론트엔드 개발자",
        "tags": ["Frontend", "React", "Next.js", "TypeScript"],
        "links": {
          "github": "https://github.com/leejaram",
          "linkedin": "https://linkedin.com/in/leejaram"
        }
      }
    ]
    ```
3.  **`[파일] /data/tags.json`**:
    -   `People` 페이지의 필터링 UI를 구성하기 위한 전체 태그 목록입니다.
    ```
    {
      "statusTags": ["전체", "운영진", "재학생", "졸업생"],
      "techTags": ["Backend", "Frontend", "AI/ML", "System", "Security", "DevOps", "iOS", "Android"]
    }
    ```
---
## 3. 세부 페이지별 기획
### `P_HOME.md` (메인 페이지)
-   **페이지 목표**: 방문자가 3초 안에 '자람'의 매력을 느끼고, 지원하고 싶게 만든다.
-   **섹션 1: 히어로**: "41년의 지식, 당신의 성장을 자라게 합니다." 슬로건 및 지원하기 CTA 버튼.
-   **섹션 2: 핵심 활동**: 아이콘과 함께 `학술 세미나`, `맨투맨 스터디`, `팀 프로젝트` 3가지 활동 요약 소개.
-   **섹션 3: 우리의 얼굴**: `/people` 페이지의 멤버 프로필 카드 4~5개를 노출. 클릭 시 `/people` 페이지로 이동.
-   **섹션 4: 최종 지원 유도**: 지원 독려 문구와 함께 지원하기 버튼 재노출.
### `P_ABOUT.md` (학회 소개)
-   **페이지 목표**: '자람'의 역사, 문화, 활동 내용을 상세히 전달하여 신뢰감을 형성한다.
-   **섹션 1: Our Story & Philosophy**: 41년 역사 요약 및 학회 철학 서술.
-   **섹션 2: What We Do**: 세미나, 스터디, 워크샵 등 상세 활동 내용. 사진, 유튜브 링크 등 활용.
-   **섹션 3: Our Achievements & Benefits**: 주요 수상 내역 이미지, 졸업생 진출 기업 로고, 학회 시설 및 혜택 소개.
### `P_PEOPLE.md` (자람의 인재들)
-   **페이지 목표**: 학회 구성원들을 한눈에 볼 수 있는 동적인 '팀 보드' 역할.
-   **기능**: `tags.json` 데이터를 기반으로 소속 및 관심 분야 필터링 기능 구현.
-   **콘텐츠**: `peopleData.json` 데이터를 기반으로 프로필 카드들을 동적으로 생성.
    -   **카드 구성**: 사진, 이름(기수), 한 줄 소개, 기술 태그 표시.
    -   **인터랙션**: 카드 하단에 GitHub, 블로그 등 외부 링크 아이콘을 배치하고, 클릭 시 새 탭으로 해당 URL을 열어줌. (카드 자체의 클릭 이벤트는 없음)
### `P_JOIN.md` (지원하기)
-   **페이지 목표**: 지원 절차를 명확히 안내하고, 지원서 제출까지의 과정을 간소화한다.
-   **섹션 1: 모집 절차**: `서류 지원 → 면접 → 최종 합격` 과정을 시각적 아이콘 타임라인으로 안내.
-   **섹션 2: 자주 묻는 질문 (FAQ)**: 예비 지원자들이 자주 묻는 질문과 답변을 아코디언 UI로 제공.
-   **섹션 3: 지원서 접수**: `siteConfig.json`의 `applyFormUrl`을 가져와 구글 폼을 페이지에 직접 내장(embed). 하단에 연락처 재표기.
