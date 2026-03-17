// © 2026 Reborn Vision — All rights reserved. Unauthorized copying, modification or distribution is strictly prohibited. https://reborn-vision.com
export default {
  nav: { docs: '文档', manage: '管理订阅', install: '免费安装' },
  hero: {
    badge: '实时OCR翻译', title: 'REBORN VISION',
    tagline: '翻译屏幕上的任何文字。实时。',
    sub: '选择区域，按Ctrl+E——翻译即刻出现。适用于所有网站、游戏和图片。',
    cta_primary: '免费安装', cta_secondary: '查看文档',
    trust1: '每天5次免费翻译', trust2: '不存储数据', trust3: '15种OCR语言',
    store_name: 'Chrome 网上应用店', store_sub: '免费扩展', store_rating: '★★★★★'
  },
  features: {
    title: '您所需要的一切', sub: '专为流畅体验设计的扩展。',
    f1_title: '通用OCR', f1_desc: '从任何区域读取文字：字幕、游戏界面、PDF、图片。', f1_badge: '所有语言',
    f2_title: '即时翻译', f2_desc: '翻译气泡直接在屏幕上显示。', f2_badge: '无摩擦',
    f3_title: '监视模式', f3_desc: '文字变化时自动重新翻译。', f3_badge: 'Premium',
    f4_title: '多区域', f4_desc: '同时设置多个区域，每个区域都有自己的气泡。', f4_badge: 'Premium',
    f5_title: '可定制界面', f5_desc: '6种视觉主题适合您的设置。', f5_badge: '免费',
    f6_title: '15种界面语言', f6_desc: '一次设置，随处使用。', f6_badge: '免费'
  },
  security: {
    title: '为隐私而设计', sub: '您的截图永远不会被存储。',
    s1_title: '安全认证', s1_desc: 'Google OAuth2。短期JWT令牌。',
    s2_title: 'Stripe支付', s2_desc: '我们永远不会看到您的卡号。',
    s3_title: '零追踪', s3_desc: '不收集浏览历史。不出售数据。',
    s4_title: '图片永不存储', s4_desc: '实时处理，立即删除。'
  },
  pricing: {
    title: '选择您的方案', sub: '免费开始。准备好后升级到Premium。',
    popular: '热门', per_month: '/月', per_year: '/年', one_time: '一次性付款',
    trial: '7天免费试用', cta_free: '免费开始', cta_paid: '开始试用', cta_lifetime: '获取终身版',
    voyageur: { rank: '旅行者', price: '€0', f1: '每天5次翻译', f2: '1个活动区域', f3: '15种OCR语言', f4: '6种视觉主题', f5: '15种语言界面' },
    aventurier: { rank: '冒险家', price: '€2.99', f1: '无限翻译', f2: '无限区域', f3: '自动监视模式', f4: '优先支持', f5: '提前访问新功能' },
    champion: { rank: '冠军', price: '€24.99', save: '节省30%', f1: '无限翻译', f2: '无限区域', f3: '自动监视模式', f4: '优先支持', f5: '提前访问新功能' },
    legende: { rank: '传奇', price: '€99.99', f1: '终身无限翻译', f2: '无限区域', f3: '自动监视模式', f4: '所有未来功能', f5: '终身优先支持' }
  },
  faq: {
    title: '常见问题',
    q1: 'Vision在所有网站上都能工作吗？', a1: '是的。只要文字在屏幕上可见，Vision就能捕获并翻译。',
    q2: 'OCR是如何工作的？', a2: '用Ctrl+E选择区域。Vision将其发送到我们的安全服务器。不到一秒钟内返回答案。',
    q3: '我可以取消订阅吗？', a3: '可以，随时通过Stripe客户门户取消。',
    q4: '终身方案包含未来功能吗？', a4: '是的，传奇方案包含所有当前和未来的内容。',
    q5: '我的数据安全吗？', a5: '截图永远不会存储。Firebase中只存储电子邮件和订阅状态。'
  },
  stats: { s1: '15种语言', s1_sub: '支持的OCR语言', s2: '6种主题', s2_sub: '视觉主题', s3: '实时', s3_sub: '即时翻译', s4: '0存储', s4_sub: '图片从不保存' },
  trust: { t1: 'Stripe安全支付', t2: '随时取消', t3: '7天免费试用', t4: '快速支持' },
  footer: { tagline: 'Chrome的实时OCR翻译。', docs: '文档', legal: '法律信息', privacy: '隐私', contact: '联系', rights: '© 2026 Reborn Vision. 保留所有权利。' }
};
