// © 2026 Reborn Vision — All rights reserved. Unauthorized copying, modification or distribution is strictly prohibited. https://reborn-vision.com
export default {
  nav: { docs: 'Dokumentacja', manage: 'Zarządzaj subskrypcją', install: 'Zainstaluj za darmo' },
  hero: {
    badge: 'Tłumaczenie OCR w czasie rzeczywistym', title: 'REBORN VISION',
    tagline: 'Tłumacz dowolny tekst na ekranie. W czasie rzeczywistym.',
    sub: 'Wybierz strefę, naciśnij Ctrl+E — tłumaczenie pojawia się natychmiast.',
    cta_primary: 'Zainstaluj za darmo', cta_secondary: 'Zobacz dokumentację',
    trust1: '5 tłumaczeń/dzień za darmo', trust2: 'Brak przechowywania danych', trust3: '15 języków OCR',
    store_name: 'Chrome Web Store', store_sub: 'Bezpłatne rozszerzenie', store_rating: '★★★★★'
  },
  features: {
    title: 'Wszystko czego potrzebujesz', sub: 'Rozszerzenie zaprojektowane dla płynności.',
    f1_title: 'Uniwersalne OCR', f1_desc: 'Odczytuje tekst z każdej strefy: napisy, interfejsy gier, PDF, obrazy.', f1_badge: 'Wszystkie języki',
    f2_title: 'Natychmiastowe tłumaczenie', f2_desc: 'Bąbelek tłumaczenia pojawia się bezpośrednio na ekranie.', f2_badge: 'Bez tarcia',
    f3_title: 'Tryb obserwacji', f3_desc: 'Automatycznie tłumaczy ponownie, gdy tekst się zmienia.', f3_badge: 'Premium',
    f4_title: 'Multi-strefa', f4_desc: 'Wiele jednoczesnych stref, każda z własnym bąbelkiem.', f4_badge: 'Premium',
    f5_title: 'Konfigurowalny interfejs', f5_desc: '6 motywów wizualnych dopasowanych do Twojego setupu.', f5_badge: 'Bezpłatne',
    f6_title: '15 języków interfejsu', f6_desc: 'Skonfiguruj raz, używaj wszędzie.', f6_badge: 'Bezpłatne'
  },
  security: {
    title: 'Zaprojektowany dla prywatności', sub: 'Twoje zrzuty ekranu nigdy nie są przechowywane.',
    s1_title: 'Bezpieczne uwierzytelnianie', s1_desc: 'Google OAuth2. Krótkotrwałe tokeny JWT.',
    s2_title: 'Płatności Stripe', s2_desc: 'Nigdy nie widzimy numeru Twojej karty.',
    s3_title: 'Zero śledzenia', s3_desc: 'Brak zbierania historii przeglądania. Żadnych sprzedawanych danych.',
    s4_title: 'Obrazy nigdy nie przechowywane', s4_desc: 'Przetwarzane w czasie rzeczywistym i natychmiast usuwane.'
  },
  pricing: {
    title: 'Wybierz swój plan', sub: 'Zacznij za darmo. Przejdź na premium gdy będziesz gotowy.',
    popular: 'Popularny', per_month: '/mies.', per_year: '/rok', one_time: 'jednorazowa płatność',
    trial: '7-dniowy bezpłatny okres próbny', cta_free: 'Zacznij za darmo', cta_paid: 'Rozpocznij próbę', cta_lifetime: 'Kup dożywotnio',
    voyageur: { rank: 'Podróżnik', price: '0€', f1: '5 tłumaczeń/dzień', f2: '1 aktywna strefa', f3: '15 języków OCR', f4: '6 motywów wizualnych', f5: 'Interfejs w 15 językach' },
    aventurier: { rank: 'Poszukiwacz', price: '2,99€', f1: 'Nieograniczone tłumaczenia', f2: 'Nieograniczone strefy', f3: 'Automatyczny tryb obserwacji', f4: 'Wsparcie priorytetowe', f5: 'Wcześniejszy dostęp' },
    champion: { rank: 'Mistrz', price: '24,99€', save: 'Oszczędź 30%', f1: 'Nieograniczone tłumaczenia', f2: 'Nieograniczone strefy', f3: 'Automatyczny tryb obserwacji', f4: 'Wsparcie priorytetowe', f5: 'Wcześniejszy dostęp' },
    legende: { rank: 'Legenda', price: '99,99€', f1: 'Dożywotnie nieograniczone tłumaczenia', f2: 'Nieograniczone strefy', f3: 'Automatyczny tryb obserwacji', f4: 'Wszystkie przyszłe funkcje', f5: 'Dożywotnie wsparcie priorytetowe' }
  },
  faq: {
    title: 'Często zadawane pytania',
    q1: 'Czy Vision działa na wszystkich stronach?', a1: 'Tak. Jeśli tekst jest widoczny, Vision może go przechwycić i przetłumaczyć.',
    q2: 'Jak działa OCR?', a2: 'Wybierasz strefę z Ctrl+E. Vision wysyła ją do naszych bezpiecznych serwerów. Odpowiedź w mniej niż sekundę.',
    q3: 'Czy mogę anulować subskrypcję?', a3: 'Tak, w dowolnym momencie przez portal klienta Stripe.',
    q4: 'Czy plan dożywotni obejmuje przyszłe funkcje?', a4: 'Tak, plan Legenda obejmuje wszystko obecne i przyszłe.',
    q5: 'Czy moje dane są bezpieczne?', a5: 'Zrzuty ekranu nigdy nie są przechowywane. Tylko email i status w Firebase.'
  },
  stats: { s1: '15 języków', s1_sub: 'Obsługiwane języki OCR', s2: '6 motywów', s2_sub: 'Motywy wizualne', s3: 'Czas rzeczywisty', s3_sub: 'Natychmiastowe tłumaczenie', s4: '0 przechowywania', s4_sub: 'Obrazy nigdy nie zachowywane' },
  trust: { t1: 'Bezpieczna płatność Stripe', t2: 'Anuluj w dowolnym momencie', t3: '7-dniowy bezpłatny okres próbny', t4: 'Responsywne wsparcie' },
  footer: { tagline: 'Tłumaczenie OCR w czasie rzeczywistym dla Chrome.', docs: 'Dokumentacja', legal: 'Informacje prawne', privacy: 'Prywatność', contact: 'Kontakt', rights: '© 2026 Reborn Vision. Wszelkie prawa zastrzeżone.' }
};
