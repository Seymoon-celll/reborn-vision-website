// © 2026 Reborn Vision — All rights reserved. Unauthorized copying, modification or distribution is strictly prohibited. https://reborn-vision.com
export default {
  nav: { docs: 'ドキュメント', manage: 'サブスクリプション管理', install: '無料インストール' },
  hero: {
    badge: 'リアルタイムOCR翻訳', title: 'REBORN VISION',
    tagline: '画面上のあらゆるテキストを翻訳。リアルタイムで。',
    sub: 'ゾーンを選択してCtrl+Eを押すと、翻訳が即座に表示されます。',
    cta_primary: '無料インストール', cta_secondary: 'ドキュメントを見る',
    trust1: '1日5回無料翻訳', trust2: 'データ保存なし', trust3: '15言語OCR',
    store_name: 'Chrome Web Store', store_sub: '無料拡張機能', store_rating: '★★★★★'
  },
  features: {
    title: '必要なすべてが揃っています', sub: 'スムーズさのために設計された拡張機能。',
    f1_title: 'ユニバーサルOCR', f1_desc: 'どのゾーンからでもテキストを読み取ります：字幕、ゲームUI、PDF、画像。', f1_badge: '全言語対応',
    f2_title: '即時翻訳', f2_desc: '翻訳バブルが画面上に直接表示されます。', f2_badge: 'スムーズ',
    f3_title: 'ウォッチモード', f3_desc: 'テキストが変わると自動的に再翻訳します。', f3_badge: 'Premium',
    f4_title: 'マルチゾーン', f4_desc: '複数のゾーンを同時に設定でき、それぞれに翻訳バブルが付きます。', f4_badge: 'Premium',
    f5_title: 'カスタマイズ可能なUI', f5_desc: '6つのビジュアルテーマ。', f5_badge: '無料',
    f6_title: '15言語のUI', f6_desc: '一度設定すればどこでも使えます。', f6_badge: '無料'
  },
  security: {
    title: 'プライバシーのために設計', sub: 'スクリーンショットは保存されません。',
    s1_title: '安全な認証', s1_desc: 'Google OAuth2。短命のJWTトークン。',
    s2_title: 'Stripe決済', s2_desc: 'カード番号を見ることはありません。',
    s3_title: 'ゼロトラッキング', s3_desc: '閲覧履歴の収集なし。データの販売なし。',
    s4_title: '画像は保存されない', s4_desc: 'リアルタイムで処理され、即座に削除されます。'
  },
  pricing: {
    title: 'プランを選択', sub: '無料から始めましょう。',
    popular: '人気', per_month: '/月', per_year: '/年', one_time: '一回払い',
    trial: '7日間無料トライアル', cta_free: '無料で始める', cta_paid: 'トライアル開始', cta_lifetime: '永久ライセンス取得',
    voyageur: { rank: '旅人', price: '€0', f1: '1日5回翻訳', f2: '1つのアクティブゾーン', f3: '15言語OCR', f4: '6つのビジュアルテーマ', f5: '15言語UI' },
    aventurier: { rank: '冒険者', price: '€2.99', f1: '無制限翻訳', f2: '無制限ゾーン', f3: '自動ウォッチモード', f4: '優先サポート', f5: '新機能への早期アクセス' },
    champion: { rank: 'チャンピオン', price: '€24.99', save: '30%節約', f1: '無制限翻訳', f2: '無制限ゾーン', f3: '自動ウォッチモード', f4: '優先サポート', f5: '新機能への早期アクセス' },
    legende: { rank: 'レジェンド', price: '€99.99', f1: '永久無制限翻訳', f2: '無制限ゾーン', f3: '自動ウォッチモード', f4: '将来のすべての機能', f5: '永久優先サポート' }
  },
  faq: {
    title: 'よくある質問',
    q1: 'すべてのサイトで動作しますか？', a1: 'はい。テキストが画面に表示されていれば、Visionはキャプチャして翻訳できます。',
    q2: 'OCRはどのように動作しますか？', a2: 'Ctrl+Eでゾーンを選択すると、Visionがセキュアサーバーに送信します。1秒以内に返答。',
    q3: 'サブスクリプションをキャンセルできますか？', a3: 'はい、Stripeカスタマーポータルからいつでも。',
    q4: '生涯プランには将来の機能が含まれますか？', a4: 'はい、レジェンドプランには現在と将来のすべてが含まれます。',
    q5: 'データは安全ですか？', a5: 'スクリーンショットは保存されません。メールとサブスクリプション状態のみFirebaseに保存。'
  },
  stats: { s1: '15言語', s1_sub: 'OCR対応言語', s2: '6テーマ', s2_sub: 'ビジュアルテーマ', s3: 'リアルタイム', s3_sub: '即時翻訳', s4: '0保存', s4_sub: '画像は保存されない' },
  trust: { t1: 'Stripe安全決済', t2: 'いつでもキャンセル可能', t3: '7日間無料トライアル', t4: '迅速なサポート' },
  footer: { tagline: 'Chrome向けリアルタイムOCR翻訳。', docs: 'ドキュメント', legal: '法的情報', privacy: 'プライバシー', contact: 'お問い合わせ', rights: '© 2026 Reborn Vision. All rights reserved.' }
};
