import uniscit from '../assets/images/uniscit.JPG';
import freshcomesty_img from '../assets/images/imgi_4_commerce.f94418b8f0350134114d.png';
import youtubemusic_img from '../assets/images/imgi_3_mockup.338390c1c73549c91e01.jpg';
import harrypotter_img from '../assets/images/imgi_9_harryordi.512dca28f128a44cf0a2.jpg';
import dyslogie_img from '../assets/images/imgi_14_dyslogieweb.4d2dd205d34d5e4b0053.jpg';
import ancien_portfolio_img from '../assets/images/herohome.jpg';
import digital_school_img from '../assets/images/imgi_13_c61e94119064397.6095907157344.5e8c1a162e6b7b03aa36.jpg';
import dice_roller_img from '../assets/images/imgi_24_ezgif.com-video-to-gif.0f8f85ca3da7f2e29cc5.gif';
import sois_verite_img from '../assets/images/imgi_11_mockupsoisverite.efedc666a70b083d4303.jpg';
import rize_img from '../assets/images/imgi_25_default.png';
import quiz_react_img from '../assets/images/imgi_17_manga.78330f452d1435392523.jpg';
import ecommerce_mode_figma_img from '../assets/images/imgi_21_14figmag2r.4f6e5eef0eba29197ce0.jpg';
import stranger_things_maquette_img from '../assets/images/imgi_7_strangerthings.fe4f7a85323cb24fb5e5.jpg';
import narratix_mockup_img from '../assets/images/Screen_Recording_20230904_202618_Expo Go.mp4'
import foodnow_figma_mockup_img from '../assets/images/Mockup 4.jpg';
import inhouse_img from "../assets/images/imgi_5_inhouse.fc5ec438a620d7a95692.png";


const projets = [
    {
        id: 1,
        title: "Unis-Cité : Jeu de Plateau Interactif",
        image: uniscit,
        year: 2024,
        introduction: "Dans le cadre d'une mission de Service Civique, j'ai participé à la création d'un support pédagogique innovant : un jeu de plateau interactif. Ce projet vise à transformer l'apprentissage des valeurs citoyennes en une expérience ludique et immersive, capable de captiver un public jeune et de favoriser le dialogue.",

        objectifs: [
            "Développer la cohésion d'équipe et la communication interpersonnelle.",
            "Sensibiliser aux enjeux de la citoyenneté et de la solidarité par le jeu.",
            "Stimuler la réflexion stratégique et la prise de décision collective.",
            "Encourager la résolution créative de problèmes face à des scénarios dynamiques."
        ],

        description: "Ce projet consistait à concevoir un outil de médiation ludique complet. De la réflexion sur les mécaniques de jeu à la création visuelle du plateau et des cartes, chaque élément a été pensé pour maximiser l'engagement des participants. Utilisé lors d'ateliers de sensibilisation, ce jeu permet d'aborder des sujets complexes (solidarité, environnement, vivre-ensemble) de manière accessible et participative. C'est un parfait exemple de la fusion entre design graphique, pédagogie active et travail d'équipe.",
    },
    {
        id: 2, // Assure-toi que l'ID est unique (ex: 2)
        title: "FreshComesty : E-commerce Cosmétique",
        image: freshcomesty_img, // Vérifie que tu as bien importé l'image en haut du fichier
        year: 2024,
        introduction: "FreshComesty est une plateforme de vente en ligne dédiée à la cosmétique haut de gamme. Ce projet vise à offrir une expérience utilisateur fluide et élégante, permettant aux clients de découvrir et d'acquérir des produits de soin sélectionnés pour leur efficacité et leur composition naturelle.",

        objectifs: [
            "Concevoir une interface utilisateur (UI) moderne, épurée et responsive.",
            "Optimiser le parcours d'achat pour garantir une expérience client sans friction.",
            "Mettre en avant l'identité visuelle de la marque à travers un design graphique fort.",
            "Développer des fonctionnalités e-commerce essentielles (catalogue, panier, fiches produits)."
        ],

        description: "Le projet FreshComesty consistait à créer un site web complet qui allie esthétique et performance technique. En me concentrant sur la psychologie des couleurs et l'ergonomie, j'ai développé une plateforme où chaque produit est mis en valeur de manière exclusive. L'accent a été mis sur la clarté de l'information et la rapidité de navigation, essentielles pour convertir les visiteurs en clients fidèles. C'est une réalisation qui démontre mes compétences en développement front-end et en web design orienté vers le secteur de la beauté.",
    },
    {
        id: 3, // Assure-toi que l'ID est bien à 3
        title: "YouTube Music : Redesign d'Expérience Mobile",
        image: youtubemusic_img, // N'oublie pas l'import de ton image mockup !
        year: 2024,
        category: "Design",
        introduction: "Ce projet explore une refonte complète de l'interface mobile de YouTube Music. L'objectif était de repenser l'ergonomie de l'application pour offrir une navigation plus intuitive et visuelle, tout en respectant l'identité forte de la marque Google et les besoins des mélomanes modernes.",

        objectifs: [
            "Réaliser un audit UX complet pour identifier les points de friction de l'application actuelle.",
            "Concevoir un prototype interactif haute fidélité sous Figma.",
            "Travailler sur la hiérarchie visuelle pour mettre en avant les contenus prioritaires (Playlists, Mix, Premium).",
            "Améliorer l'accessibilité et le confort visuel grâce à un mode sombre optimisé."
        ],

        description: "En utilisant Figma, j'ai développé une interface qui mise sur la clarté et l'immersion. Le projet inclut la création de composants réutilisables, une gestion précise du spacing et des typographies, ainsi que le design de parcours utilisateurs (User Flows) simplifiés. J'ai particulièrement mis l'accent sur l'aspect social et la découverte musicale, en créant des cartes de produits plus dynamiques et des transitions fluides entre les menus. Ce travail démontre ma maîtrise du prototypage interactif et ma capacité à transformer des besoins complexes en solutions de design simples et esthétiques.",
    },
    {
        id: 4,
        title: "Harry Potter : Encyclopédie Interactive & Fan-Blog",
        image: harrypotter_img,
        year: 2024,
        category: "Site Web",
        introduction: "Ce projet est une plateforme immersive dédiée à l'univers d'Harry Potter, développée avec **React.js**. Conçu comme une bibliothèque numérique, le site permet aux fans de consulter une base de données complète sur les sortilèges et les ouvrages de la saga, tout en profitant d'un espace blog structuré.",

        objectifs: [
            "Développer une application mono-page (SPA) fluide et rapide avec **React.js**.",
            "Structurer le contenu de manière sémantique en utilisant **HTML5** pour un meilleur référencement.",
            "Concevoir une interface utilisateur (UI) magique et responsive grâce à des techniques avancées de **CSS3**.",
            "Mettre en place un système de filtrage dynamique pour la recherche de sorts en temps réel."
        ],

        description: "La réalisation de ce site fan-made repose sur une architecture moderne utilisant **React.js** pour la gestion des composants et de l'état des données. J'ai utilisé **HTML5** et **CSS3** pour créer un design 'grimoire' totalement adaptatif (responsive), garantissant une lecture agréable sur mobile comme sur ordinateur. Ce projet démontre ma capacité à transformer une passion en un outil numérique performant, en maîtrisant l'intégration de fonctionnalités complexes comme la recherche dynamique et la navigation entre les différents volumes de la saga.",
    },
    {
        id: 5,
        title: "Dyslogie : Plateforme d'Accompagnement aux Troubles DYS",
        image: dyslogie_img, // N'oublie pas l'import de ton image
        year: 2024,
        category: "Site Web",
        introduction: "Développée avec **React.js**, Dyslogie est une plateforme solidaire conçue pour orienter les personnes souffrant de troubles de l'apprentissage vers des outils numériques adaptés. L'objectif est de transformer l'éducation et le travail en une expérience inclusive et plaisante.",

        objectifs: [
            "Répertorier et catégoriser des logiciels d'aide à la lecture et à la prise de notes (outils DYS).",
            "Concevoir une interface ultra-accessible respectant les normes de confort visuel (**CSS3**).",
            "Favoriser le lien parent-enfant à travers des ressources de travail collaboratives.",
            "Optimiser la navigation avec **React.js** pour une recherche d'outils rapide et intuitive."
        ],

        description: "Le projet Dyslogie est une réponse technologique aux défis de l'inclusion scolaire et professionnelle. En utilisant **React.js**, j'ai créé une Single Page Application où l'expérience utilisateur (UX) est pensée pour être apaisante et sans surcharge cognitive. Grâce à **HTML5** et **CSS3**, j'ai mis un point d'honneur sur la lisibilité et l'ergonomie, permettant aux étudiants et aux travailleurs de progresser à leur rythme. Ce site n'est pas seulement un annuaire, c'est un écosystème conçu pour redonner confiance aux utilisateurs face à l'apprentissage et à la prise de notes.",
    },
   
    {
        id: 6,
        title: "Portfolio V1 : Première Immersion Digitale",
        image: ancien_portfolio_img, // Importe la capture d'écran de ton ancien site
        year: 2023,
        category: "Site Web",
        introduction: "Ce projet représente ma toute première vitrine professionnelle en ligne. Développé avec les bases fondamentales du web (**HTML5** et **CSS3**), ce portfolio avait pour mission de présenter mes premières créations graphiques et mes débuts en programmation.",

        objectifs: [
            "Maîtriser l'intégration statique et la structure sémantique en **HTML5**.",
            "Apprendre la mise en page responsive avec **CSS3** (Flexbox et Grid).",
            "Créer une identité visuelle cohérente pour une présentation personnelle.",
            "Assurer la mise en ligne et le déploiement d'un projet web complet."
        ],

        description: "Mon ancien portfolio a été le point de départ de ma carrière de développeuse. Bien qu'essentiellement conçu en **HTML5** et **CSS3**, il m'a permis de poser les bases de l'expérience utilisateur (UX) et du design d'interface. Ce projet témoigne de ma progression fulgurante : du code statique de mes débuts vers les applications dynamiques en **React.js** que je développe aujourd'hui. C'est une pièce maîtresse qui illustre ma persévérance, ma curiosité technique et mon sens de l'organisation visuelle dès mes premiers pas dans le numérique.",
    },
    {
        id: 7,
        title: "Digital School France : Maquettes Institutionnelles (Style France Travail)",
        image: digital_school_img, // N'oublie pas l'import de ton fichier Photoshop exporté en .jpg
        year: 2023,
        category: "Design",
        introduction: "Réalisé lors d'un stage chez **Digital School France**, ce projet consistait à concevoir l'interface utilisateur (UI) d'une plateforme d'emploi et de formation. L'enjeu était de créer une expérience fluide, inspirée des standards de **France Travail**, pour faciliter l'accès aux ressources numériques.",

        objectifs: [
            "Concevoir des maquettes haute fidélité sous **Adobe Photoshop** en respectant une charte institutionnelle.",
            "Travailler sur l'ergonomie (UX) pour un public varié (étudiants, demandeurs d'emploi).",
            "Hiérarchiser des informations denses (listes d'offres, formulaires) pour une lecture claire.",
            "Assurer la cohérence visuelle entre les différentes pages du parcours utilisateur."
        ],

        description: "Ce projet de stage a été une immersion dans le design d'interface complexe. En utilisant **Adobe Photoshop**, j'ai développé une série de maquettes mettant l'accent sur l'accessibilité et la clarté. Bien que ce projet soit resté au stade de conception graphique, il m'a permis de maîtriser les codes du Web institutionnel : grilles de mise en page, typographies lisibles et navigation intuitive. C'est une réalisation qui démontre ma capacité à comprendre des besoins métiers concrets et à les traduire en solutions visuelles professionnelles avant l'étape du développement.",
    },
    {
        id: 8,
        title: "Dice Roller Mobile : Application de Simulation Native",
        image: dice_roller_img, // Une capture d'écran du simulateur mobile ou d'un téléphone
        year: 2024,
        category: "Application Mobile", // Nouvelle catégorie !
        introduction: "Développée avec **React Native**, cette application mobile permet de simuler des lancés de dés avec une expérience utilisateur fluide et tactile. Ce projet m'a permis d'explorer le développement mobile natif et la gestion des composants spécifiques aux smartphones.",

        objectifs: [
            "Utiliser **React Native** pour créer une interface performante sur iOS et Android.",
            "Gérer les interactions tactiles et les retours haptiques (vibrations) lors du lancé.",
            "Implémenter une logique de génération aléatoire robuste en JavaScript.",
            "Adapter le design (Layout) aux différentes tailles d'écrans mobiles avec Flexbox."
        ],

        description: "Le passage du Web au Mobile avec **React Native** a été au cœur de ce projet. J'ai utilisé des composants natifs comme `View`, `Text` et `TouchableOpacity` pour construire une interface réactive. L'application gère l'état du dé avec le hook `useState`, déclenchant une animation à chaque secousse ou clic. Ce projet démontre ma capacité à porter une logique de programmation sur des plateformes mobiles, tout en respectant les contraintes d'ergonomie et de performance propres aux smartphones (gestion de la batterie, fluidité des transitions)."
    },
    {
        id: 9,
        title: "Sois ta propre vérité : Blog Culinaire & Bien-être",
        image: sois_verite_img, // N'oublie pas l'import de ton image mockup !
        year: 2023,
        category: "Site Web",
        introduction: "Conçu avec le CMS **WordPress**, ce blog est une plateforme dédiée à la cuisine saine et au partage de recettes inspirantes. L'objectif était de créer un espace visuel gourmand et apaisant, permettant une gestion simplifiée des articles tout en offrant une expérience de lecture optimale.",

        objectifs: [
            "Personnaliser un thème **WordPress** pour correspondre à une identité visuelle douce et élégante.",
            "Mettre en place une architecture de catégories (Petit-déjeuner, Goûter, Dîner) pour faciliter la navigation.",
            "Optimiser le SEO (référencement naturel) des articles pour augmenter la visibilité du blog.",
            "Assurer la gestion des médias (photographies culinaires) pour un rendu visuel de haute qualité."
        ],

        description: "Le projet 'Sois ta propre vérité' démontre ma capacité à utiliser des outils de gestion de contenu professionnels. J'ai configuré l'ensemble de l'écosystème WordPress, de l'installation des plugins essentiels à la mise en page responsive via des éditeurs visuels. Ce blog combine esthétique et fonctionnalité : chaque recette est structurée pour être facilement indexable par les moteurs de recherche. C'est une réalisation qui prouve que je peux livrer des solutions web clé en main, prêtes à l'emploi pour des créateurs de contenu ou des entreprises.",
    },
    {
        id: 10,
        title: "Rize : Boutique E-commerce Performance & Sport",
        image: rize_img, // N'oublie pas l'import de ton image !
        year: 2024,
        category: "Site Web",
        introduction: "Propulsé par **WordPress** et conçu avec le constructeur de pages **Elementor**, Rize est une plateforme e-commerce dédiée aux équipements sportifs de haute performance. L'objectif était de marier une esthétique dynamique avec une structure de vente en ligne robuste et intuitive.",

        objectifs: [
            "Concevoir un design personnalisé et dynamique en utilisant les fonctionnalités avancées d'**Elementor Pro**.",
            "Intégrer et configurer **WooCommerce** pour la gestion complète du catalogue produits et du tunnel d'achat.",
            "Optimiser le responsive design pour garantir une expérience d'achat fluide sur smartphones et tablettes.",
            "Mettre en place des filtres de recherche personnalisés pour faciliter la navigation par type de sport."
        ],

        description: "Le projet Rize démontre ma maîtrise de l'écosystème **WordPress**. Grâce à **Elementor**, j'ai pu créer des mises en page sur mesure qui reflètent l'énergie du sport, tout en assurant une performance technique optimale. J'ai géré l'ensemble de la chaîne e-commerce : de la création des fiches produits à l'optimisation du panier d'achat. Ce projet prouve que je peux livrer des sites commerciaux complets, esthétiques et faciles à administrer pour le client final, tout en respectant les standards modernes de l'UX/UI design."
    },
    {
        id: 11,
        title: "Quiz Interactive : Application de Test de Connaissances",
        image: quiz_react_img, // N'oublie pas l'import de ton image (ex: capture d'écran du quiz)
        year: 2024,
        category: "Site Web",
        introduction: "Développée avec **React.js**, cette application de quiz interactive permet aux utilisateurs de tester leurs connaissances à travers une série de questions dynamiques. L'objectif était de créer une interface ludique avec un système de calcul de score en temps réel.",

        objectifs: [
            "Gérer une base de données de questions et réponses de manière dynamique.",
            "Utiliser les **Hooks React** (useState, useEffect) pour suivre l'avancement et le score de l'utilisateur.",
            "Concevoir une interface utilisateur (UI) réactive avec des retours visuels immédiats (couleurs pour bon/mauvais).",
            "Mettre en place un écran de résultats final avec un récapitulatif des performances."
        ],

        description: "Le projet Quiz React met en avant ma capacité à gérer des flux de données complexes. Chaque interaction utilisateur déclenche une mise à jour de l'état, passant d'une question à l'autre avec des transitions fluides en **CSS3**. J'ai intégré une logique de validation qui compare la réponse sélectionnée à la solution stockée, tout en gérant l'affichage conditionnel pour les messages de succès ou d'erreur. Ce projet démontre ma maîtrise du cycle de vie des composants React et ma capacité à transformer une logique algorithmique en une application web engageante et fonctionnelle.",
    },
    {
        id: 12,
        title: "E-Commerce Mode : Design d'Application Mobile (Figma)",
        image: ecommerce_mode_figma_img, // Importe ton image de maquette (par exemple, un montage de plusieurs écrans)
        year: 2024,
        category: "Design",
        introduction: "Conçue intégralement sur **Figma**, cette maquette d'application mobile e-commerce réinvente l'expérience d'achat de prêt-à-porter sur smartphone. L'objectif était de créer une interface minimaliste, intuitive et hautement visuelle, favorisant la découverte de produits et un parcours d'achat sans friction.",

        objectifs: [
            "Réaliser une recherche utilisateur approfondie pour identifier les besoins et les frustrations liés au shopping mobile.",
            "Concevoir des maquettes haute fidélité (Hi-Fi) sur **Figma**, incluant tous les écrans clés (Accueil, Recherche, Fiche Produit, Panier).",
            "Créer un prototype interactif complet pour tester les flux de navigation et les transitions.",
            "Élaborer un Design System complet (palette de couleurs, typographies, composants réutilisables) pour garantir la cohérence visuelle."
        ],

        description: "Ce projet de design d'interface (UI) pour l'e-commerce de mode met l'accent sur une esthétique épurée qui laisse place aux visuels des vêtements. En utilisant **Figma**, j'ai structuré le catalogue de produits avec un système de filtres et de tri avancé, facilitant la recherche. La fiche produit est conçue pour rassurer l'utilisateur, avec des informations claires sur les tailles, les matières et les avis clients. Le prototype interactif simule le parcours complet, de la découverte d'un article jusqu'au paiement final. C'est une réalisation qui démontre ma maîtrise du design mobile centré sur l'utilisateur, ma capacité à concevoir des architectures d'information fluides et ma rigueur dans la création de composants design réutilisables.",
    },
    {
        id: 13, // ID unique pour ce projet
        title: "Stranger Things : Plateforme de Streaming Thématique",
        image: stranger_things_maquette_img, // N'oublie pas l'import de ton image de maquette !
        year: 2024,
        category: "Design", // Super important : C'est une catégorie Design, pas Site Web
        introduction: "Conçue intégralement sur **Figma**, cette maquette haute fidélité propose une immersion totale dans l'univers de la série **Stranger Things**. L'objectif était de réinventer l'interface d'une plateforme de streaming classique pour capturer l'ambiance sombre et mystérieuse du Upside Down, tout en offrant une navigation fluide et centrée sur l'exploration de l'univers et de ses personnages.",

        objectifs: [
            "Réaliser une identité visuelle thématique forte, inspirée des années 80 et de l'esthétique Duffer Brothers.",
            "Hiérarchiser le contenu pour présenter les personnages, les lieux clés et les différents chapitres de la saga.",
            "Mettre en place un Design System complet (palette de couleurs neon, typographies rétro, composants thématiques).",
            "Élaborer un prototype interactif complet pour tester les flux de navigation entre la page d'accueil et les fiches détaillées."
        ],

        description: "Ce projet de design d'interface (UI) pour une plateforme de streaming Stranger Things met l'accent sur l'immersion et la narration visuelle. En utilisant **Figma**, j'ai structuré le contenu pour que chaque élément de design (boutons, cartes, bannières) contribue à l'ambiance globale. J'ai porté une attention particulière à la fiche personnage, conçue comme une encyclopédie interactive avec des informations détaillées, des extraits vidéo et des liens vers les chapitres où ils apparaissent. Le prototype interactif simule le parcours complet, de la découverte d'un personnage jusqu'à la lecture d'un épisode. C'est une réalisation qui démontre ma capacité à concevoir des interfaces thématiques riches, ma maîtrise du design centré sur l'utilisateur et ma rigueur dans la création de composants design réutilisables, essentiels pour le développement front-end.",
    },
        {
    id: 14,
    title: "Narratix : Réseau Social d'Histoires & Back-Office Admin",
    image: narratix_mockup_img, // Importe une image montrant l'app mobile ET l'écran admin
    year: 2024,
    category: "Full-Stack", // Une nouvelle catégorie pour marquer le coup !
    introduction: "Narratix est un écosystème complet comprenant une application mobile de partage d'histoires (**React Native**) et une plateforme de gestion administrative (**React.js**). Ce projet explore la création de réseaux sociaux modernes et la gestion de données à grande échelle.",

    objectifs: [
        "Développer une application mobile fluide pour la lecture et l'écriture d'histoires avec **React Native**.",
        "Créer un tableau de bord administrateur sur ordinateur pour modérer les contenus et gérer les utilisateurs.",
        "Mettre en place un système de notifications en temps réel et de fil d'actualité dynamique.",
        "Concevoir une architecture de base de données robuste pour lier l'application mobile et l'interface admin."
    ],

    description: "Narratix est mon projet le plus ambitieux. Côté utilisateur, j'ai utilisé **React Native** pour offrir une expérience mobile intuitive, permettant aux auteurs de publier leurs récits en quelques clics. Côté gestion, j'ai développé une application de bureau (Desktop-ready) avec **React.js**, **HTML5** et **CSS3**, offrant aux administrateurs une vue d'ensemble sur les statistiques et les outils de modération. Ce double projet démontre ma capacité à concevoir des systèmes interconnectés complexes, à gérer des flux de données bidirectionnels et à adapter l'interface (UI) selon que l'utilisateur soit un lecteur sur mobile ou un gestionnaire sur ordinateur."
    },
        {
    id: 15, // ID unique pour ce nouveau projet
    title: "FoodNow : Design d'Application de Livraison de Repas (Figma)",
    image: foodnow_figma_mockup_img, // N'oublie pas l'import de ton image de maquette !
    year: 2024,
    category: "Design", // Catégorie Design UI/UX
    introduction: "Conçue intégralement sur **Figma**, FoodNow est une maquette haute fidélité pour une application mobile de commande et de livraison de repas. L'objectif était de simplifier le parcours utilisateur, de la découverte de restaurants locaux à la validation de la commande, en passant par la personnalisation des plats.",

    objectifs: [
        "Réaliser une recherche utilisateur (UX Research) pour identifier les points de friction dans les applications de livraison existantes.",
        "Concevoir une interface utilisateur (UI) épurée et appétissante sur **Figma**, optimisée pour une utilisation à une main.",
        "Créer un prototype interactif complet pour simuler le flux de commande, y compris la gestion du panier et le suivi de livraison.",
        "Élaborer un Design System cohérent (iconographie culinaire, palette de couleurs dynamiques, composants réutilisables)."
    ],

    description: "Le projet FoodNow se concentre sur une expérience utilisateur fluide et intuitive. En utilisant **Figma**, j'ai structuré l'application autour d'une recherche puissante et de filtres affinés (type de cuisine, temps de livraison, régimes alimentaires). La fiche restaurant met en valeur les plats avec de grands visuels, tandis que le processus de paiement a été simplifié pour réduire le taux d'abandon. Le prototype interactif permet de tester la navigation réelle, du choix du plat jusqu'à l'écran de confirmation. Cette réalisation démontre ma maîtrise du design mobile centré sur l'utilisateur, ma capacité à hiérarchiser des informations denses et ma rigueur dans la création de composants design réutilisables, essentiels pour le développement front-end.",
    },
        
    {
        id: 16, // ID unique pour ce nouveau projet
        title: "Inhouse",
        image: inhouse_img, // N'oublie pas l'import de ton image de maquette !
        year: 2024,
        category: "SiteWeb", // Catégorie Design UI/UX
        introduction: "Ce projet est un site web e-commerce dédié aux **objets connectés**. Réalisé dans un cadre pédagogique, il simule une commande client réelle.",

        objectifs: [
            "Maîtriser l'intégration complète sous WordPress / Elementor.",
            "Respecter scrupuleusement une charte graphique imposée.",
            "Optimiser l'expérience utilisateur (UX) pour le catalogue.",
            "Garantir un rendu 100% Responsive."
        ],

        description: "Le projet Inhouse se concentre sur la création d'une boutique en ligne moderne et épurée. J'ai dû paramétrer chaque section pour refléter l'aspect 'high-tech' des objets connectés.",
    },
];


export default projets;