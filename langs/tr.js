// © 2026 Reborn Vision — All rights reserved. Unauthorized copying, modification or distribution is strictly prohibited. https://reborn-vision.com
export default {
  nav: { docs: 'Belgeler', manage: 'Aboneliği yönet', install: 'Ücretsiz yükle' },
  hero: {
    badge: 'Gerçek zamanlı OCR çevirisi', title: 'REBORN VISION',
    tagline: 'Ekrandaki her metni çevirin. Gerçek zamanlı.',
    sub: 'Bir bölge seçin, Ctrl+E\'ye basın — çeviri anında görünür.',
    cta_primary: 'Ücretsiz yükle', cta_secondary: 'Belgelere bak',
    trust1: 'Günde 5 çeviri ücretsiz', trust2: 'Veri depolanmaz', trust3: '15 OCR dili',
    store_name: 'Chrome Web Store', store_sub: 'Ücretsiz uzantı', store_rating: '★★★★★'
  },
  features: {
    title: 'İhtiyacınız olan her şey', sub: 'Akıcılık için tasarlanmış bir uzantı.',
    f1_title: 'Evrensel OCR', f1_desc: 'Her bölgeden metin okur: altyazılar, oyun arayüzleri, PDF\'ler, görseller.', f1_badge: 'Tüm diller',
    f2_title: 'Anlık çeviri', f2_desc: 'Çeviri balonu doğrudan ekranda görünür.', f2_badge: 'Sürtünmesiz',
    f3_title: 'İzleme Modu', f3_desc: 'Metin değiştiğinde otomatik olarak yeniden çevirir.', f3_badge: 'Premium',
    f4_title: 'Çoklu bölge', f4_desc: 'Eş zamanlı birden fazla bölge, her biri kendi balonuyla.', f4_badge: 'Premium',
    f5_title: 'Özelleştirilebilir arayüz', f5_desc: 'Kurulumunuza uygun 6 görsel tema.', f5_badge: 'Ücretsiz',
    f6_title: '15 arayüz dili', f6_desc: 'Bir kez ayarlayın, her yerde kullanın.', f6_badge: 'Ücretsiz'
  },
  security: {
    title: 'Gizlilik için tasarlandı', sub: 'Ekran görüntüleriniz asla depolanmaz.',
    s1_title: 'Güvenli kimlik doğrulama', s1_desc: 'Google OAuth2. Kısa ömürlü JWT token\'ları.',
    s2_title: 'Stripe ödemeleri', s2_desc: 'Kart numaranızı asla görmeyiz.',
    s3_title: 'Sıfır izleme', s3_desc: 'Tarama geçmişi toplanmaz. Veri satılmaz.',
    s4_title: 'Görseller asla depolanmaz', s4_desc: 'Gerçek zamanlı işlenir ve hemen silinir.'
  },
  pricing: {
    title: 'Planınızı seçin', sub: 'Ücretsiz başlayın. Hazır olduğunuzda premium\'a geçin.',
    popular: 'Popüler', per_month: '/ay', per_year: '/yıl', one_time: 'tek seferlik ödeme',
    trial: '7 günlük ücretsiz deneme', cta_free: 'Ücretsiz başla', cta_paid: 'Denemeyi başlat', cta_lifetime: 'Ömür boyu al',
    voyageur: { rank: 'Gezgin', price: '€0', f1: 'Günde 5 çeviri', f2: '1 aktif bölge', f3: '15 OCR dili', f4: '6 görsel tema', f5: '15 dil arayüzü' },
    aventurier: { rank: 'Maceracı', price: '€2,99', f1: 'Sınırsız çeviri', f2: 'Sınırsız bölge', f3: 'Otomatik İzleme Modu', f4: 'Öncelikli destek', f5: 'Erken erişim' },
    champion: { rank: 'Şampiyon', price: '€24,99', save: '%30 tasarruf', f1: 'Sınırsız çeviri', f2: 'Sınırsız bölge', f3: 'Otomatik İzleme Modu', f4: 'Öncelikli destek', f5: 'Erken erişim' },
    legende: { rank: 'Efsane', price: '€99,99', f1: 'Ömür boyu sınırsız çeviri', f2: 'Sınırsız bölge', f3: 'Otomatik İzleme Modu', f4: 'Tüm gelecek özellikler', f5: 'Ömür boyu öncelikli destek' }
  },
  faq: {
    title: 'Sıkça sorulan sorular',
    q1: 'Vision tüm sitelerde çalışır mı?', a1: 'Evet. Metin görünürse Vision onu yakalayıp çevirebilir.',
    q2: 'OCR nasıl çalışır?', a2: 'Ctrl+E ile bir bölge seçersiniz. Vision güvenli sunucularımıza gönderir. Bir saniyeden az sürede yanıt.',
    q3: 'Aboneliğimi iptal edebilir miyim?', a3: 'Evet, Stripe müşteri portalından istediğiniz zaman.',
    q4: 'Ömür boyu plan gelecek özellikleri içeriyor mu?', a4: 'Evet, Efsane planı mevcut ve gelecekteki her şeyi kapsar.',
    q5: 'Verilerim güvende mi?', a5: 'Ekran görüntüleri asla depolanmaz. Sadece e-posta ve durum Firebase\'de.'
  },
  stats: { s1: '15 dil', s1_sub: 'Desteklenen OCR dilleri', s2: '6 tema', s2_sub: 'Görsel temalar', s3: 'Gerçek zamanlı', s3_sub: 'Anlık çeviri', s4: '0 depolama', s4_sub: 'Görseller asla saklanmaz' },
  trust: { t1: 'Güvenli Stripe ödemesi', t2: 'İstediğiniz zaman iptal', t3: '7 günlük ücretsiz deneme', t4: 'Hızlı destek' },
  footer: { tagline: 'Chrome için gerçek zamanlı OCR çevirisi.', docs: 'Belgeler', legal: 'Yasal bilgiler', privacy: 'Gizlilik', contact: 'İletişim', rights: '© 2026 Reborn Vision. Tüm hakları saklıdır.' }
};
