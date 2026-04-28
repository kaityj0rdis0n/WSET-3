import type { Flashcard, QuizQuestion } from '../types';

export const flashcards: Flashcard[] = [
  // --- Geography ---
  {
    id: 'geo-1',
    topic: 'geography',
    front: 'What two rivers define the Left Bank and Right Bank of Bordeaux?',
    back: 'The Gironde estuary divides north Bordeaux. The Garonne flows to the left; the Dordogne flows to the right. They meet to form the Gironde.',
  },
  {
    id: 'geo-2',
    topic: 'geography',
    front: 'Which bank is Pauillac on?',
    back: 'Left Bank — on the Médoc peninsula, west of the Gironde estuary.',
  },
  {
    id: 'geo-3',
    topic: 'geography',
    front: 'Which bank are Pomerol and St-Émilion on?',
    back: 'Right Bank — east of the Dordogne river.',
  },
  {
    id: 'geo-4',
    topic: 'geography',
    front: 'What ocean moderates Bordeaux\'s climate?',
    back: 'The Atlantic Ocean. It keeps winters mild and summers warm, making Bordeaux a maritime climate.',
  },
  {
    id: 'geo-5',
    topic: 'geography',
    front: 'What is Entre-Deux-Mers and what does the name mean?',
    back: '"Between two seas" — the region between the Garonne and Dordogne rivers. Mainly produces dry white wine from Sauvignon Blanc and Sémillon.',
  },

  // --- Appellations ---
  {
    id: 'app-1',
    topic: 'appellations',
    front: 'Name the four most prestigious communes of the Médoc (Left Bank).',
    back: 'Pauillac, St-Estèphe, St-Julien, Margaux. All are on the Left Bank and produce Cabernet Sauvignon-dominant blends.',
  },
  {
    id: 'app-2',
    topic: 'appellations',
    front: 'What is Pessac-Léognan known for?',
    back: 'A Left Bank appellation south of the city of Bordeaux, within the Graves region. Known for both high-quality reds and dry whites (Sauvignon Blanc / Sémillon blends). Home to Château Haut-Brion.',
  },
  {
    id: 'app-3',
    topic: 'appellations',
    front: 'What style of wine is Sauternes famous for?',
    back: 'Sweet white wine, made from botrytis-affected Sémillon, Sauvignon Blanc, and Muscadelle. Noble rot concentrates sugars and adds honeyed, complex flavours.',
  },
  {
    id: 'app-4',
    topic: 'appellations',
    front: 'What is the difference between Médoc AC and Haut-Médoc AC?',
    back: 'Médoc AC covers the northern, flatter part of the peninsula (lower quality). Haut-Médoc AC covers the southern, more prestigious strip where the famous communes sit.',
  },
  {
    id: 'app-5',
    topic: 'appellations',
    front: 'Which appellation is Château Pétrus in?',
    back: 'Pomerol — a Right Bank appellation with no official classification, yet produces some of the world\'s most expensive wines. Merlot-dominant on clay soils.',
  },

  // --- Grapes ---
  {
    id: 'grape-1',
    topic: 'grapes',
    front: 'What is the dominant red grape of the Left Bank?',
    back: 'Cabernet Sauvignon. It thrives on the well-drained gravel soils of the Médoc and Pessac-Léognan.',
  },
  {
    id: 'grape-2',
    topic: 'grapes',
    front: 'What is the dominant red grape of the Right Bank?',
    back: 'Merlot. It suits the clay-rich soils of St-Émilion and Pomerol, producing rounder, plummier wines.',
  },
  {
    id: 'grape-3',
    topic: 'grapes',
    front: 'Name the five permitted red grape varieties in Bordeaux.',
    back: 'Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot, Malbec (Côt). Petit Verdot adds colour and spice; Malbec is rarely used today.',
  },
  {
    id: 'grape-4',
    topic: 'grapes',
    front: 'What two white grapes dominate Bordeaux whites?',
    back: 'Sémillon and Sauvignon Blanc. Sémillon is susceptible to botrytis (key for Sauternes); Sauvignon Blanc adds freshness and aroma.',
  },
  {
    id: 'grape-5',
    topic: 'grapes',
    front: 'Why is Cabernet Franc important in Bordeaux blends?',
    back: 'It ripens earlier than Cabernet Sauvignon, providing insurance in cool vintages. Adds herbaceous, floral, and red fruit notes. Especially important on the Right Bank (e.g., Cheval Blanc).',
  },

  // --- Soils ---
  {
    id: 'soil-1',
    topic: 'soils',
    front: 'Why are gravel soils ideal for Cabernet Sauvignon on the Left Bank?',
    back: 'Gravel drains well (preventing waterlogging), warms quickly, and stresses the vine — concentrating flavours. It suits the late-ripening Cabernet Sauvignon.',
  },
  {
    id: 'soil-2',
    topic: 'soils',
    front: 'What soil type dominates Pomerol and suits Merlot?',
    back: 'Clay — it retains moisture and warmth, which benefits Merlot. The famous "blue clay" of Pétrus is particularly prized.',
  },
  {
    id: 'soil-3',
    topic: 'soils',
    front: 'What soil type is St-Émilion\'s plateau known for?',
    back: 'Limestone and clay over a limestone bedrock (calcaire à astéries). The limestone plateau produces structured, age-worthy wines.',
  },

  // --- Classification ---
  {
    id: 'class-1',
    topic: 'classification',
    front: 'What is the 1855 Classification and what prompted it?',
    back: 'A ranking of Médoc châteaux into 5 growths (Premiers Crus through Cinquièmes Crus), commissioned by Napoleon III for the Paris World Exhibition. Based on price and reputation at the time.',
  },
  {
    id: 'class-2',
    topic: 'classification',
    front: 'Which châteaux are the five Premiers Crus (First Growths) of the 1855 Classification?',
    back: 'Château Lafite Rothschild, Château Latour, Château Margaux, Château Haut-Brion (Pessac-Léognan), and Château Mouton Rothschild (added 1973).',
  },
  {
    id: 'class-3',
    topic: 'classification',
    front: 'How does the St-Émilion classification differ from the 1855 Classification?',
    back: 'St-Émilion\'s classification is periodically revised (roughly every 10 years), unlike the largely static 1855 Classification. It has tiers: Premier Grand Cru Classé A, Premier Grand Cru Classé B, and Grand Cru Classé.',
  },
  {
    id: 'class-4',
    topic: 'classification',
    front: 'Does Pomerol have an official classification?',
    back: 'No. Pomerol has never had an official classification, yet Château Pétrus commands among the highest prices in the world.',
  },

  // --- Viticulture & Production ---
  {
    id: 'geo-6',
    topic: 'geography',
    front: 'What role does the Landes forest play in Bordeaux viticulture?',
    back: 'The Landes pine forest lies to the west, protecting vineyards from strong Atlantic winds and storms. Without it, the maritime climate would be far more extreme.',
  },
  {
    id: 'geo-7',
    topic: 'geography',
    front: 'Approximately what percentage of red grapes planted in Bordeaux is Merlot?',
    back: 'Around 66% — making Merlot by far the most widely planted red grape in Bordeaux overall, even though Cabernet Sauvignon dominates the prestigious Left Bank appellations.',
  },
  {
    id: 'geo-8',
    topic: 'geography',
    front: 'Which Left Bank commune contains three of the five First Growths?',
    back: 'Pauillac — home to Château Lafite Rothschild, Château Latour, and Château Mouton Rothschild.',
  },
  {
    id: 'style-5',
    topic: 'styles',
    front: 'What is Bordeaux Mixture and what is it used for?',
    back: 'A solution of copper sulfate, lime, and water, developed in Bordeaux in the 19th century to combat downy mildew and other fungal diseases. Bordeaux\'s wet maritime climate makes fungal pressure a key challenge.',
  },
  {
    id: 'style-6',
    topic: 'styles',
    front: 'What is a barrique and what size is it?',
    back: 'A standard Bordeaux oak barrel holding 225 litres. Top-quality reds are aged in barriques (typically French oak) to add structure, tannin, and complexity — cedar, vanilla, and spice notes.',
  },

  // --- Styles ---
  {
    id: 'style-1',
    topic: 'styles',
    front: 'How would you describe the typical style of a Left Bank Bordeaux red?',
    back: 'Cabernet Sauvignon-dominant. High tannins, full body, blackcurrant, cedar, graphite. Structured and age-worthy. Can be austere when young.',
  },
  {
    id: 'style-2',
    topic: 'styles',
    front: 'How would you describe the typical style of a Right Bank Bordeaux red?',
    back: 'Merlot-dominant. Softer tannins, fuller body, plum, chocolate, fruit cake. More approachable when young than Left Bank.',
  },
  {
    id: 'style-3',
    topic: 'styles',
    front: 'What flavour characteristics does botrytis add to Sauternes?',
    back: 'Honey, marmalade, dried apricot, ginger, and a distinctive "petrol" or waxy note. Botrytis also adds glycerol, giving a luscious, unctuous texture.',
  },
  {
    id: 'style-4',
    topic: 'styles',
    front: 'What is the ageing potential of a top Left Bank Bordeaux?',
    back: 'Premier and Deuxième Cru wines can age 20–50+ years. High tannins and acidity act as preservatives; tannins soften and complex tertiary aromas (leather, tobacco, earth) develop over time.',
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q-1',
    topic: 'geography',
    question: 'Which river forms the boundary between the Left Bank and Right Bank in the northern part of Bordeaux?',
    options: ['The Garonne', 'The Dordogne', 'The Gironde', 'The Loire'],
    correctIndex: 2,
    explanation: 'The Gironde estuary (formed by the confluence of the Garonne and Dordogne) separates the Left Bank Médoc peninsula from the Right Bank.',
  },
  {
    id: 'q-2',
    topic: 'appellations',
    question: 'Which of the following is a Left Bank appellation?',
    options: ['Pomerol', 'St-Émilion', 'Pauillac', 'Fronsac'],
    correctIndex: 2,
    explanation: 'Pauillac is on the Left Bank (Médoc peninsula). Pomerol, St-Émilion, and Fronsac are all Right Bank appellations.',
  },
  {
    id: 'q-3',
    topic: 'grapes',
    question: 'What is the dominant grape variety in most Left Bank Bordeaux reds?',
    options: ['Merlot', 'Cabernet Franc', 'Cabernet Sauvignon', 'Petit Verdot'],
    correctIndex: 2,
    explanation: 'Cabernet Sauvignon dominates Left Bank blends, thriving on the well-drained gravel soils of the Médoc.',
  },
  {
    id: 'q-4',
    topic: 'grapes',
    question: 'Which white grape is most susceptible to noble rot (botrytis) and is the key variety in Sauternes?',
    options: ['Sauvignon Blanc', 'Muscadelle', 'Viognier', 'Sémillon'],
    correctIndex: 3,
    explanation: 'Sémillon\'s thin skin makes it highly susceptible to botrytis. It forms the backbone of Sauternes, with Sauvignon Blanc adding acidity.',
  },
  {
    id: 'q-5',
    topic: 'soils',
    question: 'Why are gravel soils particularly suited to Cabernet Sauvignon on the Left Bank?',
    options: [
      'They retain moisture, keeping vines hydrated',
      'They drain well and warm quickly, helping late-ripening Cabernet Sauvignon',
      'They are rich in nitrogen, promoting vigour',
      'They have high pH, reducing acidity in the wine',
    ],
    correctIndex: 1,
    explanation: 'Gravel drains freely (preventing waterlogging), heats up during the day, and stresses vines — all beneficial for the late-ripening Cabernet Sauvignon.',
  },
  {
    id: 'q-6',
    topic: 'classification',
    question: 'In what year was the famous Bordeaux classification (for the Médoc) created?',
    options: ['1789', '1855', '1936', '1973'],
    correctIndex: 1,
    explanation: 'The 1855 Classification was commissioned by Napoleon III for the Paris World Exhibition, ranking Médoc châteaux into five growths.',
  },
  {
    id: 'q-7',
    topic: 'classification',
    question: 'Which château was elevated to Premier Cru status in 1973, the only change to the 1855 Classification?',
    options: ['Château Pétrus', 'Château Margaux', 'Château Mouton Rothschild', 'Château Cheval Blanc'],
    correctIndex: 2,
    explanation: 'Château Mouton Rothschild was elevated from Deuxième Cru to Premier Cru in 1973 — the only revision to the 1855 Classification.',
  },
  {
    id: 'q-8',
    topic: 'appellations',
    question: 'What style of wine is Sauternes AC known for?',
    options: [
      'Dry red, Cabernet Sauvignon-dominant',
      'Dry white, Sauvignon Blanc-dominant',
      'Sweet white, made from botrytis-affected grapes',
      'Sparkling white, méthode traditionnelle',
    ],
    correctIndex: 2,
    explanation: 'Sauternes produces sweet white wines from botrytis-affected Sémillon, Sauvignon Blanc, and Muscadelle.',
  },
  {
    id: 'q-9',
    topic: 'styles',
    question: 'Which description best fits a typical Right Bank Bordeaux red?',
    options: [
      'High tannins, austere, blackcurrant and cedar',
      'Softer tannins, plum and chocolate, more approachable young',
      'Light body, high acidity, red cherry',
      'Bone dry, floral, low alcohol',
    ],
    correctIndex: 1,
    explanation: 'Right Bank reds are Merlot-dominant — softer tannins, fuller fruit (plum, chocolate), and more approachable when young compared to Left Bank.',
  },
  {
    id: 'q-10',
    topic: 'geography',
    question: 'What type of climate does Bordeaux have?',
    options: ['Continental', 'Mediterranean', 'Maritime', 'Semi-arid'],
    correctIndex: 2,
    explanation: 'Bordeaux has a maritime climate, moderated by the Atlantic Ocean — mild winters, warm summers, and autumn rain risk at harvest.',
  },
  {
    id: 'q-11',
    topic: 'geography',
    question: 'What is the purpose of the Landes forest in relation to Bordeaux vineyards?',
    options: [
      'It provides timber for barrel-making',
      'It shields vineyards from Atlantic winds and storms',
      'It acts as a natural irrigation source',
      'It is a source of wild yeast for fermentation',
    ],
    correctIndex: 1,
    explanation: 'The Landes pine forest lies to the west of Bordeaux, buffering vineyards from strong Atlantic winds and storms.',
  },
  {
    id: 'q-12',
    topic: 'geography',
    question: 'Which commune in the Médoc contains three of the five First Growths?',
    options: ['Margaux', 'St-Julien', 'St-Estèphe', 'Pauillac'],
    correctIndex: 3,
    explanation: 'Pauillac is home to Château Lafite Rothschild, Château Latour, and Château Mouton Rothschild — three of the five 1855 First Growths.',
  },
  {
    id: 'q-13',
    topic: 'styles',
    question: 'What is Bordeaux Mixture?',
    options: [
      'A blend of Cabernet Sauvignon and Merlot grapes',
      'A copper sulfate solution used to treat fungal disease in vineyards',
      'A traditional method of blending wines from multiple châteaux',
      'A style of oak barrel used for ageing Bordeaux reds',
    ],
    correctIndex: 1,
    explanation: 'Bordeaux Mixture (copper sulfate, lime, and water) was developed in the 19th century to combat downy mildew — a major risk in Bordeaux\'s wet maritime climate.',
  },
  {
    id: 'q-14',
    topic: 'styles',
    question: 'What is a barrique and what is its standard volume?',
    options: ['A blending tank — 10,000 litres', 'A French oak barrel — 225 litres', 'A concrete egg — 500 litres', 'A large oak cask — 1,200 litres'],
    correctIndex: 1,
    explanation: 'A barrique is the standard Bordeaux barrel, holding 225 litres of French oak. Ageing in barriques adds tannin, structure, and flavours like cedar, vanilla, and spice.',
  },
];
