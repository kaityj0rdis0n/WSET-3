export interface RegionFact {
  id: string;
  name: string;
  bank: string;
  keyGrapes: string;
  soils: string;
  style: string;
  classification: string;
  notableChateaux: string;
}

export interface RegionQuizQuestion {
  regionId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const regions: RegionFact[] = [
  {
    id: 'pauillac',
    name: 'Pauillac',
    bank: 'Left Bank',
    keyGrapes: 'Cabernet Sauvignon, Merlot, Cabernet Franc',
    soils: 'Deep gravel over limestone',
    style: 'Full-bodied, high tannin, blackcurrant, cedar, graphite — age-worthy',
    classification: '1855 Classification — 3 First Growths, 2 Seconds, 1 Fourth, many Fifths',
    notableChateaux: 'Lafite Rothschild, Latour, Mouton Rothschild',
  },
  {
    id: 'st-estephe',
    name: 'St-Estèphe',
    bank: 'Left Bank',
    keyGrapes: 'Cabernet Sauvignon, Merlot',
    soils: 'Gravel with more clay than Pauillac',
    style: 'Structured, firm tannins, slightly more rustic — earthy, dark fruit',
    classification: '1855 Classification — 2 Seconds (Cos d\'Estournel, Montrose), 1 Third, 1 Fourth, 1 Fifth',
    notableChateaux: 'Cos d\'Estournel, Montrose, Calon-Ségur',
  },
  {
    id: 'st-julien',
    name: 'St-Julien',
    bank: 'Left Bank',
    keyGrapes: 'Cabernet Sauvignon, Merlot, Cabernet Franc',
    soils: 'Fine gravel, well-drained',
    style: 'Balanced, elegant — between Pauillac power and Margaux finesse',
    classification: '1855 Classification — 5 Seconds (incl. Léoville Las Cases, Ducru-Beaucaillou), 2 Thirds, 5 Fourths',
    notableChateaux: 'Léoville Las Cases, Ducru-Beaucaillou, Beychevelle',
  },
  {
    id: 'margaux',
    name: 'Margaux',
    bank: 'Left Bank',
    keyGrapes: 'Cabernet Sauvignon, Merlot, Petit Verdot',
    soils: 'Thin gravel over limestone — lightest, most well-drained in the Médoc',
    style: 'Perfumed, silky, elegant — floral, violet, red and black fruit',
    classification: '1855 Classification — 1 First Growth (Château Margaux), many Seconds through Fifths',
    notableChateaux: 'Château Margaux, Palmer, Rauzan-Ségla',
  },
  {
    id: 'haut-medoc',
    name: 'Haut-Médoc',
    bank: 'Left Bank',
    keyGrapes: 'Cabernet Sauvignon, Merlot',
    soils: 'Gravel and clay mix, variable',
    style: 'Medium to full-bodied, Cabernet-led — solid but less concentrated than commune wines',
    classification: '1855 Classification — 5 classified châteaux fall here (outside commune ACs)',
    notableChateaux: 'La Lagune, Cantemerle, Sociando-Mallet',
  },
  {
    id: 'pessac-leognan',
    name: 'Pessac-Léognan',
    bank: 'Left Bank',
    keyGrapes: 'Red: Cabernet Sauvignon, Merlot. White: Sauvignon Blanc, Sémillon',
    soils: 'Deep gravel beds (ancient Garonne river terraces)',
    style: 'Reds: smoky, mineral, elegant. Whites: crisp, citrus, oak-aged complexity',
    classification: 'Graves Classification (1953/1959) — 16 classified châteaux for red and/or white',
    notableChateaux: 'Haut-Brion, La Mission Haut-Brion, Domaine de Chevalier',
  },
  {
    id: 'sauternes',
    name: 'Sauternes',
    bank: 'Left Bank (south)',
    keyGrapes: 'Sémillon, Sauvignon Blanc, Muscadelle',
    soils: 'Gravel, clay, and limestone — river mists promote botrytis',
    style: 'Luscious sweet white — honey, apricot, marmalade, waxy texture',
    classification: '1855 Classification (sweet wines) — 1 Superior First Growth (d\'Yquem), 11 Firsts, 15 Seconds',
    notableChateaux: 'Château d\'Yquem, Suduiraut, Climens (Barsac)',
  },
  {
    id: 'st-emilion',
    name: 'St-Émilion',
    bank: 'Right Bank',
    keyGrapes: 'Merlot, Cabernet Franc',
    soils: 'Limestone plateau (calcaire à astéries) + gravel and sandy slopes',
    style: 'Rich, plummy, generous fruit — softer tannins than Left Bank, approachable',
    classification: 'St-Émilion Classification (revised ~every 10 years) — Premier Grand Cru Classé A & B, Grand Cru Classé',
    notableChateaux: 'Cheval Blanc, Ausone, Angélus, Pavie',
  },
  {
    id: 'pomerol',
    name: 'Pomerol',
    bank: 'Right Bank',
    keyGrapes: 'Merlot, Cabernet Franc',
    soils: 'Clay (famous "blue clay" at Pétrus) over iron-rich subsoil (crasse de fer)',
    style: 'Opulent, velvety — plum, truffle, chocolate. Concentrated and exotic',
    classification: 'None — Pomerol has never been officially classified',
    notableChateaux: 'Pétrus, Le Pin, Lafleur, Vieux Château Certan',
  },
  {
    id: 'entre-deux-mers',
    name: 'Entre-Deux-Mers',
    bank: 'Between the Garonne and Dordogne rivers',
    keyGrapes: 'Sauvignon Blanc, Sémillon, Muscadelle (whites). Reds sold as Bordeaux/Bordeaux Supérieur',
    soils: 'Limestone, clay, and gravel — varied terrain',
    style: 'Crisp, fresh dry whites — grassy, citrus, easy-drinking. Reds are soft and fruity',
    classification: 'None — AC Entre-Deux-Mers applies only to dry white wines',
    notableChateaux: 'No famous names — value-driven region, large-volume production',
  },
];

export const regionQuizQuestions: RegionQuizQuestion[] = [
  // --- Pauillac ---
  {
    regionId: 'pauillac',
    question: 'How many of the 1855 First Growths are located in Pauillac?',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: 'Three: Lafite Rothschild, Latour, and Mouton Rothschild. The other two Firsts are Margaux and Haut-Brion (Pessac-Léognan).',
  },
  {
    regionId: 'pauillac',
    question: 'What soil type gives Pauillac its ability to ripen Cabernet Sauvignon fully?',
    options: ['Heavy clay', 'Deep gravel', 'Pure limestone', 'Volcanic rock'],
    correctIndex: 1,
    explanation: 'Deep gravel drains well and retains heat — both critical for the late-ripening Cabernet Sauvignon.',
  },
  {
    regionId: 'pauillac',
    question: 'Which of these is NOT a Pauillac château?',
    options: ['Lafite Rothschild', 'Latour', 'Cos d\'Estournel', 'Mouton Rothschild'],
    correctIndex: 2,
    explanation: 'Cos d\'Estournel is in St-Estèphe, just north of Pauillac.',
  },

  // --- St-Estèphe ---
  {
    regionId: 'st-estephe',
    question: 'What distinguishes St-Estèphe soils from those in Pauillac?',
    options: ['More sand', 'More clay mixed with the gravel', 'Pure chalk', 'Volcanic deposits'],
    correctIndex: 1,
    explanation: 'St-Estèphe has more clay in its gravel soils, which retains more water and produces slightly more structured, earthier wines.',
  },
  {
    regionId: 'st-estephe',
    question: 'Which "Super Second" is located in St-Estèphe?',
    options: ['Ducru-Beaucaillou', 'Cos d\'Estournel', 'Pichon-Longueville', 'Léoville Las Cases'],
    correctIndex: 1,
    explanation: 'Cos d\'Estournel is St-Estèphe\'s most famous estate, classified as a Second Growth and considered a "Super Second."',
  },

  // --- St-Julien ---
  {
    regionId: 'st-julien',
    question: 'St-Julien is often described as stylistically between which two communes?',
    options: ['Margaux and Sauternes', 'Pauillac and Margaux', 'St-Estèphe and Pessac-Léognan', 'Pomerol and St-Émilion'],
    correctIndex: 1,
    explanation: 'St-Julien sits geographically and stylistically between Pauillac\'s power and Margaux\'s finesse — balanced and elegant.',
  },
  {
    regionId: 'st-julien',
    question: 'Which classified growth dominates St-Julien?',
    options: ['First Growths', 'Second Growths', 'Third Growths', 'Fifth Growths'],
    correctIndex: 1,
    explanation: 'St-Julien has five Second Growths — more than any other commune — including Léoville Las Cases and Ducru-Beaucaillou.',
  },

  // --- Margaux ---
  {
    regionId: 'margaux',
    question: 'What word best describes the style of Margaux wines compared to other Médoc communes?',
    options: ['Powerful', 'Austere', 'Perfumed', 'Rustic'],
    correctIndex: 2,
    explanation: 'Margaux is known for its perfumed, elegant, silky wines with floral and violet notes — lighter-framed than Pauillac.',
  },
  {
    regionId: 'margaux',
    question: 'Which First Growth is in Margaux?',
    options: ['Château Latour', 'Château Margaux', 'Château Haut-Brion', 'Château Mouton Rothschild'],
    correctIndex: 1,
    explanation: 'Château Margaux is the commune\'s sole First Growth — the château shares its name with the appellation.',
  },

  // --- Haut-Médoc ---
  {
    regionId: 'haut-medoc',
    question: 'What is the relationship between Haut-Médoc AC and the commune appellations?',
    options: [
      'Haut-Médoc is a higher quality tier',
      'The communes sit within Haut-Médoc — wines outside communes use the Haut-Médoc AC',
      'They are completely separate regions',
      'Haut-Médoc only covers white wines',
    ],
    correctIndex: 1,
    explanation: 'Haut-Médoc is the regional AC. The prestigious communes (Pauillac, St-Julien, etc.) are carved out of it — wines from land between communes use Haut-Médoc AC.',
  },
  {
    regionId: 'haut-medoc',
    question: 'Which of these is a classified Haut-Médoc château (outside the commune ACs)?',
    options: ['Château Margaux', 'La Lagune', 'Pétrus', 'Cheval Blanc'],
    correctIndex: 1,
    explanation: 'La Lagune (Third Growth) is classified under the 1855 system but sits in the Haut-Médoc AC, south of the commune appellations.',
  },

  // --- Pessac-Léognan ---
  {
    regionId: 'pessac-leognan',
    question: 'What makes Pessac-Léognan unique among Left Bank appellations?',
    options: [
      'It only produces sweet wine',
      'It is classified for both red and white wines',
      'It uses only Merlot',
      'It has no classified estates',
    ],
    correctIndex: 1,
    explanation: 'Pessac-Léognan (Graves Classification) classifies châteaux for red, white, or both — unique in Bordeaux.',
  },
  {
    regionId: 'pessac-leognan',
    question: 'Which First Growth is in Pessac-Léognan, not the Médoc?',
    options: ['Lafite Rothschild', 'Mouton Rothschild', 'Haut-Brion', 'Latour'],
    correctIndex: 2,
    explanation: 'Haut-Brion is the only First Growth outside the Médoc. It was included in the 1855 Classification due to its exceptional reputation.',
  },

  // --- Sauternes ---
  {
    regionId: 'sauternes',
    question: 'What conditions in Sauternes promote the development of noble rot (botrytis)?',
    options: [
      'Hot, dry winds from the south',
      'Morning mists from the Ciron river followed by warm afternoons',
      'Constant rainfall throughout harvest',
      'High altitude and frost',
    ],
    correctIndex: 1,
    explanation: 'The cool Ciron tributary meets the warmer Garonne, creating morning mists that encourage botrytis. Warm afternoons dry the grapes and prevent grey rot.',
  },
  {
    regionId: 'sauternes',
    question: 'What is Château d\'Yquem\'s unique classification?',
    options: ['Premier Cru', 'Premier Cru Supérieur', 'Grand Cru Classé A', 'Cru Exceptionnel'],
    correctIndex: 1,
    explanation: 'D\'Yquem is the only Premier Cru Supérieur (Superior First Growth) in the 1855 sweet wine classification — a tier above all other Sauternes estates.',
  },

  // --- St-Émilion ---
  {
    regionId: 'st-emilion',
    question: 'How does the St-Émilion classification differ from the 1855 system?',
    options: [
      'It includes white wines',
      'It is revised approximately every 10 years',
      'It was created by Napoleon III',
      'It ranks by price only',
    ],
    correctIndex: 1,
    explanation: 'St-Émilion\'s classification is periodically revised — estates can be promoted or demoted based on recent quality, unlike the static 1855 ranking.',
  },
  {
    regionId: 'st-emilion',
    question: 'What is the primary soil type on the St-Émilion plateau?',
    options: ['Deep gravel', 'Sandy loam', 'Limestone (calcaire à astéries)', 'Volcanic basalt'],
    correctIndex: 2,
    explanation: 'The limestone plateau (calcaire à astéries) produces the most structured, age-worthy St-Émilion wines. Slopes and lower areas have more sand and gravel.',
  },

  // --- Pomerol ---
  {
    regionId: 'pomerol',
    question: 'Why has Pomerol never been officially classified?',
    options: [
      'It was not part of France in 1855',
      'The region was too small and unimportant in 1855 — and has never felt the need since',
      'Its wines are all the same quality',
      'It was classified but the records were lost',
    ],
    correctIndex: 1,
    explanation: 'Pomerol was a minor, unknown area in 1855. By the time its wines became famous (mid-20th century), the estates resisted classification — Pétrus needs no official rank.',
  },
  {
    regionId: 'pomerol',
    question: 'What is the "crasse de fer" found in Pomerol\'s subsoil?',
    options: ['A type of limestone', 'An iron-rich hardpan layer', 'A clay deposit', 'A gravel formation'],
    correctIndex: 1,
    explanation: 'Crasse de fer is an iron-rich hardpan beneath Pomerol\'s clay topsoil. It contributes to the unique mineral character of wines like Pétrus.',
  },

  // --- Entre-Deux-Mers ---
  {
    regionId: 'entre-deux-mers',
    question: 'What does "Entre-Deux-Mers" literally mean?',
    options: ['Between two mountains', 'Between two seas', 'Between two cities', 'Between two banks'],
    correctIndex: 1,
    explanation: '"Between two seas" — referring to the Garonne and Dordogne rivers. The AC only covers dry white wines; reds are sold as Bordeaux or Bordeaux Supérieur.',
  },
  {
    regionId: 'entre-deux-mers',
    question: 'What style of wine can legally carry the Entre-Deux-Mers AC?',
    options: ['Sweet white only', 'Red only', 'Dry white only', 'Both red and white'],
    correctIndex: 2,
    explanation: 'The Entre-Deux-Mers AC is exclusively for dry white wines. Red wines from the same area must be labelled as Bordeaux or Bordeaux Supérieur.',
  },
];
