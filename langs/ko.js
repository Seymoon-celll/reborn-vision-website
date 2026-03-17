// © 2026 Reborn Vision — All rights reserved. Unauthorized copying, modification or distribution is strictly prohibited. https://reborn-vision.com
export default {
  nav: { docs: '문서', manage: '구독 관리', install: '무료 설치' },
  hero: {
    badge: '실시간 OCR 번역', title: 'REBORN VISION',
    tagline: '화면의 모든 텍스트를 번역하세요. 실시간으로.',
    sub: '영역을 선택하고 Ctrl+E를 누르면 번역이 즉시 나타납니다.',
    cta_primary: '무료 설치', cta_secondary: '문서 보기',
    trust1: '하루 5회 무료 번역', trust2: '데이터 저장 없음', trust3: '15개 OCR 언어',
    store_name: 'Chrome 웹 스토어', store_sub: '무료 확장 프로그램', store_rating: '★★★★★'
  },
  features: {
    title: '필요한 모든 것', sub: '유연성을 위해 설계된 확장 프로그램.',
    f1_title: '범용 OCR', f1_desc: '모든 영역에서 텍스트를 읽습니다: 자막, 게임 UI, PDF, 이미지.', f1_badge: '모든 언어',
    f2_title: '즉시 번역', f2_desc: '번역 말풍선이 화면에 직접 나타납니다.', f2_badge: '매끄러움',
    f3_title: '감시 모드', f3_desc: '텍스트가 변경되면 자동으로 재번역합니다.', f3_badge: 'Premium',
    f4_title: '다중 영역', f4_desc: '여러 영역을 동시에 설정하고 각각 말풍선이 붙습니다.', f4_badge: 'Premium',
    f5_title: '맞춤형 인터페이스', f5_desc: '6가지 시각적 테마.', f5_badge: '무료',
    f6_title: '15개 UI 언어', f6_desc: '한 번 설정하면 어디서나 사용 가능.', f6_badge: '무료'
  },
  security: {
    title: '개인 정보 보호를 위해 설계', sub: '스크린샷은 저장되지 않습니다.',
    s1_title: '안전한 인증', s1_desc: 'Google OAuth2. 단기 JWT 토큰.',
    s2_title: 'Stripe 결제', s2_desc: '카드 번호를 볼 수 없습니다.',
    s3_title: '제로 추적', s3_desc: '검색 기록 수집 없음. 데이터 판매 없음.',
    s4_title: '이미지 저장 안 함', s4_desc: '실시간으로 처리되고 즉시 삭제됩니다.'
  },
  pricing: {
    title: '플랜 선택', sub: '무료로 시작하세요.',
    popular: '인기', per_month: '/월', per_year: '/년', one_time: '일회성 결제',
    trial: '7일 무료 체험', cta_free: '무료로 시작', cta_paid: '체험 시작', cta_lifetime: '평생 구독',
    voyageur: { rank: '여행자', price: '€0', f1: '하루 5회 번역', f2: '1개 활성 영역', f3: '15개 OCR 언어', f4: '6개 시각적 테마', f5: '15개 언어 UI' },
    aventurier: { rank: '모험가', price: '€2.99', f1: '무제한 번역', f2: '무제한 영역', f3: '자동 감시 모드', f4: '우선 지원', f5: '신기능 조기 접근' },
    champion: { rank: '챔피언', price: '€24.99', save: '30% 절약', f1: '무제한 번역', f2: '무제한 영역', f3: '자동 감시 모드', f4: '우선 지원', f5: '신기능 조기 접근' },
    legende: { rank: '레전드', price: '€99.99', f1: '평생 무제한 번역', f2: '무제한 영역', f3: '자동 감시 모드', f4: '모든 미래 기능', f5: '평생 우선 지원' }
  },
  faq: {
    title: '자주 묻는 질문',
    q1: 'Vision은 모든 사이트에서 작동합니까?', a1: '예. 텍스트가 화면에 표시되면 Vision이 캡처하고 번역할 수 있습니다.',
    q2: 'OCR은 어떻게 작동합니까?', a2: 'Ctrl+E로 영역을 선택하면 Vision이 안전한 서버로 전송합니다. 1초 이내에 응답.',
    q3: '구독을 취소할 수 있습니까?', a3: '예, Stripe 고객 포털에서 언제든지.',
    q4: '평생 플랜에 미래 기능이 포함됩니까?', a4: '예, 레전드 플랜에는 현재와 미래의 모든 것이 포함됩니다.',
    q5: '내 데이터는 안전합니까?', a5: '스크린샷은 저장되지 않습니다. Firebase에는 이메일과 구독 상태만 저장됩니다.'
  },
  stats: { s1: '15개 언어', s1_sub: 'OCR 지원 언어', s2: '6개 테마', s2_sub: '시각적 테마', s3: '실시간', s3_sub: '즉시 번역', s4: '0 저장', s4_sub: '이미지 저장 안 함' },
  trust: { t1: 'Stripe 안전 결제', t2: '언제든지 취소', t3: '7일 무료 체험', t4: '빠른 지원' },
  footer: { tagline: 'Chrome용 실시간 OCR 번역.', docs: '문서', legal: '법적 정보', privacy: '개인정보', contact: '연락처', rights: '© 2026 Reborn Vision. All rights reserved.' }
};
