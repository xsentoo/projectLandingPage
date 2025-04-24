export type LanguageKey = 'en' | 'fr';

type TranslationDictionary = {
  [key: string]: string;
};

type TranslationsType = {
  [key in LanguageKey]: TranslationDictionary;
};

export const translations: TranslationsType = {
  en: {
    // Header
    'language': 'Language',

    // Hero Section
    'heroPart1': 'Unlock',
    'heroPart2': 'Your Full',
    'heroPart3': 'Potential',
    'downloadButton': 'Start Your Journey Now',
    'comingSoon': 'Coming Soon',
    'powerLevel': 'Power Level',

    // Features Section
    'featuresTitle': 'Level Up Your Fitness',
    'workoutsTitle': 'Anime Workouts',
    'workoutsDesc': 'Train like your favorite anime characters with specialized workout routines that push your limits.',
    'progressionTitle': 'Visual Progression',
    'progressionDesc': 'Watch your avatar evolve as you gain strength. Your progress visualized in anime style.',
    'transformationsTitle': 'Unlock Transformations',
    'transformationsDesc': 'Reach milestones to unlock special transformations and power-ups for your avatar.',

    // Timeline Section
    'howItWorksTitle': 'Your Hero Journey',
    'step1': 'Create Your Avatar',
    'step1Desc': 'Choose your starting class and customize your character.',
    'step2': 'Take On Challenges',
    'step2Desc': 'Complete workouts to earn XP and level up your stats.',
    'step3': 'Track Your Progress',
    'step3Desc': 'Watch your character grow stronger with each workout.',
    'step4': 'Transform',
    'step4Desc': 'Unlock spectacular transformations as you reach new heights.',

    // FAQ Section
    'faqTitle': 'Frequently Asked Questions',
    'faq1Q': 'What makes FitnessAnime different?',
    'faq1A': 'FitnessAnime combines real workout tracking with anime-inspired gamification. Your progress isn\'t just numbers—it\'s visualized through your evolving avatar and unlockable transformations.',
    'faq2Q': 'Do I need to be a fitness expert?',
    'faq2A': 'Not at all! FitnessAnime is designed for all levels. Just like in anime, you\'ll start as a novice and progressively grow stronger through consistent training.',
    'faq3Q': 'How does the avatar system work?',
    'faq3A': 'Your avatar gains XP and levels up as you complete workouts. At certain milestones, you\'ll unlock new transformations, abilities, and visual upgrades that reflect your real-world progress.',
    'faq4Q': 'Is FitnessAnime free?',
    'faq4A': 'FitnessAnime is free for essential training features. However, advanced features and premium content are available through optional paid plans.',

    // Footer
    'footerRights': 'All rights reserved',
    'privacyPolicy': 'Privacy Policy',
    'termsOfService': 'Terms of Service',
    'madeWith': 'Made with',
  },

  fr: {
    // Header
    'language': 'Langue',

    // Hero Section
    'heroPart1': 'Libère',
    'heroPart2': 'Ton Plein',
    'heroPart3': 'Potentiel',
    'downloadButton': 'Commence Ton Aventure',
    'comingSoon': 'Bientôt Disponible',
    'powerLevel': 'Niveau de Puissance',

    // Features Section
    'featuresTitle': 'Améliore Ta Forme',
    'workoutsTitle': 'Entraînements Anime',
    'workoutsDesc': 'Entraîne-toi comme tes personnages d\'anime préférés avec des routines spécialisées qui repoussent tes limites.',
    'progressionTitle': 'Progression Visuelle',
    'progressionDesc': 'Regarde ton avatar évoluer à mesure que tu gagnes en force. Ta progression visualisée en style anime.',
    'transformationsTitle': 'Débloque des Transformations',
    'transformationsDesc': 'Atteins des objectifs pour débloquer des transformations spéciales et des power-ups pour ton avatar.',

    // Timeline Section
    'howItWorksTitle': 'Ton Parcours de Héros',
    'step1': 'Crée Ton Avatar',
    'step1Desc': 'Choisis ta classe de départ et personnalise ton personnage.',
    'step2': 'Relève les Défis',
    'step2Desc': 'Complète des entraînements pour gagner de l\'XP et améliorer tes statistiques.',
    'step3': 'Suis Ta Progression',
    'step3Desc': 'Observe ton personnage devenir plus fort à chaque entraînement.',
    'step4': 'Transforme-toi',
    'step4Desc': 'Débloque des transformations spectaculaires en atteignant de nouveaux sommets.',

    // FAQ Section
    'faqTitle': 'Questions Fréquentes',
    'faq1Q': 'Qu\'est-ce qui rend FitnessAnime différent?',
    'faq1A': 'FitnessAnime combine le suivi d\'entraînement réel avec la gamification inspirée des animes. Ta progression n\'est pas seulement des chiffres—elle est visualisée à travers ton avatar évolutif et des transformations débloquables.',
    'faq2Q': 'Dois-je être un expert en fitness?',
    'faq2A': 'Pas du tout! FitnessAnime est conçu pour tous les niveaux. Comme dans les animes, tu commenceras comme novice et tu deviendras progressivement plus fort grâce à un entraînement régulier.',
    'faq3Q': 'Comment fonctionne le système d\'avatar?',
    'faq3A': 'Ton avatar gagne de l\'XP et monte de niveau à mesure que tu complètes des entraînements. À certains moments clés, tu débloqueras de nouvelles transformations, capacités et améliorations visuelles qui reflètent ta progression dans le monde réel.',
    'faq4Q': 'Est-ce que FitnessAnime est gratuit ?',
    'faq4A': 'FitnessAnime est gratuit pour toutes les fonctionnalités d’entraînement essentielles. Des fonctionnalités avancées et du contenu premium sont disponibles via des options payantes.',

    // Footer
    'footerRights': 'Tous droits réservés',
    'privacyPolicy': 'Politique de Confidentialité',
    'termsOfService': 'Conditions d\'Utilisation',
    'madeWith': 'Créé avec',
  }
};
