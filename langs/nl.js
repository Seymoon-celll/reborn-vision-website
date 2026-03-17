// © 2026 Reborn Vision — All rights reserved. Unauthorized copying, modification or distribution is strictly prohibited. https://reborn-vision.com
export default {
  nav: { docs: 'Documentatie', manage: 'Abonnement beheren', install: 'Gratis installeren' },
  hero: {
    badge: 'Realtime OCR-vertaling', title: 'REBORN VISION',
    tagline: 'Vertaal elke tekst op scherm. In realtime.',
    sub: 'Selecteer een zone, druk op Ctrl+E — de vertaling verschijnt meteen.',
    cta_primary: 'Gratis installeren', cta_secondary: 'Documentatie bekijken',
    trust1: '5 vertalingen/dag gratis', trust2: 'Geen data opgeslagen', trust3: '15 OCR-talen',
    store_name: 'Chrome Web Store', store_sub: 'Gratis extensie', store_rating: '★★★★★'
  },
  features: {
    title: 'Alles wat je nodig hebt', sub: 'Een extensie voor maximale vloeiendheid.',
    f1_title: 'Universele OCR', f1_desc: 'Leest tekst uit elke zone: ondertitels, game-interfaces, PDF\'s, afbeeldingen.', f1_badge: 'Alle talen',
    f2_title: 'Directe vertaling', f2_desc: 'De vertaalbel verschijnt direct op het scherm.', f2_badge: 'Zonder wrijving',
    f3_title: 'Watch Mode', f3_desc: 'Hervertaalt automatisch wanneer de tekst verandert.', f3_badge: 'Premium',
    f4_title: 'Multi-zone', f4_desc: 'Meerdere zones tegelijk, elk met een eigen bel.', f4_badge: 'Premium',
    f5_title: 'Aanpasbare interface', f5_desc: '6 visuele thema\'s voor jouw setup.', f5_badge: 'Gratis',
    f6_title: '15 interfacetalen', f6_desc: 'Één keer instellen, overal gebruiken.', f6_badge: 'Gratis'
  },
  security: {
    title: 'Gebouwd voor privacy', sub: 'Je screenshots worden nooit opgeslagen.',
    s1_title: 'Veilige authenticatie', s1_desc: 'Google OAuth2. Kortlevende JWT-tokens.',
    s2_title: 'Stripe-betalingen', s2_desc: 'We zien nooit je kaartnummer.',
    s3_title: 'Nul tracking', s3_desc: 'Geen browsegeschiedenis verzameld. Geen gegevens verkocht.',
    s4_title: 'Afbeeldingen nooit opgeslagen', s4_desc: 'Verwerkt in realtime en onmiddellijk verwijderd.'
  },
  pricing: {
    title: 'Kies je plan', sub: 'Begin gratis. Ga premium wanneer je er klaar voor bent.',
    popular: 'Populair', per_month: '/maand', per_year: '/jaar', one_time: 'eenmalige betaling',
    trial: '7 dagen gratis proberen', cta_free: 'Gratis beginnen', cta_paid: 'Proef starten', cta_lifetime: 'Levenslang kopen',
    voyageur: { rank: 'Reiziger', price: '€0', f1: '5 vertalingen/dag', f2: '1 actieve zone', f3: '15 OCR-talen', f4: '6 visuele thema\'s', f5: 'Interface in 15 talen' },
    aventurier: { rank: 'Avonturier', price: '€2,99', f1: 'Onbeperkte vertalingen', f2: 'Onbeperkte zones', f3: 'Automatische Watch Mode', f4: 'Prioriteitsondersteuning', f5: 'Vroege toegang' },
    champion: { rank: 'Kampioen', price: '€24,99', save: 'Bespaar 30%', f1: 'Onbeperkte vertalingen', f2: 'Onbeperkte zones', f3: 'Automatische Watch Mode', f4: 'Prioriteitsondersteuning', f5: 'Vroege toegang' },
    legende: { rank: 'Legende', price: '€99,99', f1: 'Levenslang onbeperkte vertalingen', f2: 'Onbeperkte zones', f3: 'Automatische Watch Mode', f4: 'Alle toekomstige functies', f5: 'Levenslange prioriteitsondersteuning' }
  },
  faq: {
    title: 'Veelgestelde vragen',
    q1: 'Werkt Vision op alle sites?', a1: 'Ja. Als tekst zichtbaar is, kan Vision het vastleggen en vertalen.',
    q2: 'Hoe werkt OCR?', a2: 'Je selecteert een zone met Ctrl+E. Vision stuurt het naar onze beveiligde servers. Antwoord in minder dan een seconde.',
    q3: 'Kan ik mijn abonnement opzeggen?', a3: 'Ja, op elk moment via het Stripe-klantenportaal.',
    q4: 'Bevat het levenslange plan toekomstige functies?', a4: 'Ja, het Legende-plan omvat alles huidig en toekomstig.',
    q5: 'Zijn mijn gegevens veilig?', a5: 'Screenshots worden nooit opgeslagen. Alleen e-mail en abonnementsstatus in Firebase.'
  },
  stats: { s1: '15 talen', s1_sub: 'Ondersteunde OCR-talen', s2: '6 thema\'s', s2_sub: 'Visuele thema\'s', s3: 'Realtime', s3_sub: 'Directe vertaling', s4: '0 opslag', s4_sub: 'Afbeeldingen nooit bewaard' },
  trust: { t1: 'Veilige Stripe-betaling', t2: 'Op elk moment opzeggen', t3: '7 dagen gratis proberen', t4: 'Responsieve support' },
  footer: { tagline: 'Realtime OCR-vertaling voor Chrome.', docs: 'Documentatie', legal: 'Juridische informatie', privacy: 'Privacy', contact: 'Contact', rights: '© 2026 Reborn Vision. Alle rechten voorbehouden.' }
};
