const words = [
  "abime",
  "aboli",
  "abord",
  "abouti",
  "accrue",
  "acere",
  "acerbe",
  "achat",
  "acide",
  "acier",
  "actif",
  "active",
  "adieu",
  "admise",
  "adore",
  "admirer",
  "affute",
  "agent",
  "agence",
  "agile",
  "agilite",
  "agiter",
  "aider",
  "aigle",
  "aigre",
  "aigri",
  "aigue",
  "aimant",
  "aimer",
  "ainee",
  "ainsi",
  "aisee",
  "ajout",
  "album",
  "algue",
  "alibi",
  "alite",
  "allee",
  "aller",
  "allez",
  "allie",
  "alpha",
  "alpin",
  "amande",
  "amant",
  "amene",
  "amene",
  "amere",
  "amibe",
  "amont",
  "amour",
  "ample",
  "amuse",
  "ancre",
  "angle",
  "anime",
  "annee",
  "anode",
  "antan",
  "aorte",
  "appel",
  "appui",
  "arabe",
  "arbre",
  "arche",
  "arene",
  "arete",
  "argot",
  "aride",
  "armee",
  "armer",
  "arome",
  "arret",
  "asile",
  "aspic",
  "assez",
  "astre",
  "athee",
  "atome",
  "atout",
  "aucun",
  "audit",
  "aussi",
  "autel",
  "autre",
  "avait",
  "avant",
  "avare",
  "avere",
  "aveux",
  "avide",
  "aviez",
  "avion",
  "avise",
  "avoir",
  "avoue",
  "avoue",
  "avril",
  "ayant",
  "azote",
  "azote",
  "bacle",
  "bacon",
  "badge",
  "baffe",
  "bague",
  "bahut",
  "balai",
  "ballet",
  "balle",
  "balte",
  "banal",
  "banane",
  "bande",
  "banjo",
  "barbe",
  "barbu",
  "barde",
  "barge",
  "baril",
  "baron",
  "barre",
  "basee",
  "baser",
  "basse",
  "batir",
  "baton",
  "battu",
  "baume",
  "baver",
  "bazar",
  "beaux",
  "becot",
  "beige",
  "beler",
  "belge",
  "belle",
  "benin",
  "benir",
  "beret",
  "berger",
  "berne",
  "berne",
  "beton",
  "bette",
  "bevue",
  "bible",
  "bidon",
  "biere",
  "bijou",
  "bilan",
  "bique",
  "bison",
  "bisou",
  "blame",
  "blanche",
  "blaser",
  "bleme",
  "bleue",
  "blonde",
  "blouse",
  "bocal",
  "boire",
  "boite",
  "bombe",
  "bonde",
  "bongo",
  "bonne",
  "bonte",
  "borde",
  "borne",
  "bosse",
  "bossu",
  "botte",
  "boude",
  "bouee",
  "bouge",
  "boulet",
  "bourg",
  "bouse",
  "bourse",
  "bovin",
  "boyau",
  "brame",
  "brave",
  "bravo",
  "breve",
  "bride",
  "brise",
  "brise",
  "bruit",
  "brule",
  "brume",
  "brune",
  "brute",
  "bulbe",
  "bulle",
  "burin",
  "buter",
  "butin",
  "butte",
  "cable",
  "cabot",
  "cacao",
  "cache",
  "cadet",
  "cadre",
  "caduc",
  "cahier",
  "caler",
  "calin",
  "calme",
  "campe",
  "canal",
  "canne",
  "canon",
  "canot",
  "carat",
  "cargo",
  "carpe",
  "carre",
  "carte",
  "caser",
  "casse",
  "casse",
  "catin",
  "cause",
  "cause",
  "ceder",
  "celle",
  "celui",
  "cense",
  "cerne",
  "cesar",
  "cesse",
  "cesse",
  "cette",
  "celte",
  "chair",
  "chale",
  "champ",
  "chant",
  "chaud",
  "chaux",
  "chere",
  "cheri",
  "chetif",
  "chienne",
  "chine",
  "choir",
  "choix",
  "chope",
  "chose",
  "chute",
  "cibla",
  "cible",
  "cieux",
  "citee",
  "citer",
  "civile",
  "claire",
  "clame",
  "clamp",
  "clerc",
  "clope",
  "cloture",
  "close",
  "clown",
  "cocon",
  "cohue",
  "colle",
  "comme",
  "comte",
  "comete",
  "concept",
  "concu",
  "conge",
  "connu",
  "conte",
  "copie",
  "coque",
  "coran",
  "corde",
  "corne",
  "cornu",
  "corse",
  "cosse",
  "cotee",
  "coton",
  "coude",
  "coule",
  "coupe",
  "coupe",
  "court",
  "couru",
  "coute",
  "coute",
  "crabe",
  "craie",
  "crampe",
  "crane",
  "credo",
  "creer",
  "creme",
  "crepe",
  "crepite",
  "crepu",
  "crete",
  "creux",
  "creve",
  "crier",
  "crime",
  "crise",
  "croit",
  "croit",
  "croix",
  "cruel",
  "cuire",
  "cuite",
  "culot",
  "culte",
  "cycle",
  "cygne",
  "dague",
  "dalle",
  "danse",
  "datee",
  "dater",
  "debat",
  "debit",
  "debut",
  "dechu",
  "decor",
  "decue",
  "dedie",
  "degat",
  "degel",
  "degre",
  "delai",
  "delie",
  "delit",
  "delta",
  "demie",
  "demon",
  "dense",
  "depit",
  "depot",
  "desir",
  "dette",
  "deuil",
  "devez",
  "devra",
  "diete",
  "dieux",
  "digne",
  "digue",
  "dilue",
  "diner",
  "divan",
  "divin",
  "dogme",
  "doigt",
  "doive",
  "donna",
  "donne",
  "donne",
  "dorer",
  "doser",
  "dotee",
  "doter",
  "douce",
  "doute",
  "douze",
  "doyen",
  "drame",
  "droit",
  "drole",
  "duper",
  "duree",
  "durer",
  "duvet",
  "ebahi",
  "ebene",
  "ecale",
  "ecart",
  "echec",
  "eclat",
  "ecole",
  "ecran",
  "ecrie",
  "ecrit",
  "ecume",
  "edite",
  "effet",
  "egale",
  "egard",
  "egaux",
  "eleve",
  "eleve",
  "elire",
  "elite",
  "eloge",
  "email",
  "emane",
  "emise",
  "encre",
  "enfer",
  "enfin",
  "enfle",
  "engin",
  "enjeu",
  "ennui",
  "entre",
  "entre",
  "envie",
  "envoi",
  "envol",
  "epate",
  "epave",
  "epice",
  "epier",
  "epine",
  "epoux",
  "errer",
  "essai",
  "essor",
  "etage",
  "etain",
  "etait",
  "etame",
  "etang",
  "etant",
  "etape",
  "etaye",
  "etude",
  "evade",
  "evase",
  "evier",
  "evite",
  "evite",
  "exact",
  "exclu",
  "exige",
  "exige",
  "exigu",
  "exile",
  "exode",
  "extra",
  "fable",
  "fache",
  "facon",
  "fagot",
  "faite",
  "faite",
  "fallu",
  "faner",
  "farce",
  "fasse",
  "faste",
  "fatal",
  "faune",
  "faute",
  "fautif",
  "fautive",
  "fauve",
  "feinte",
  "felure",
  "felonie",
  "femme",
  "flemme",
  "fente",
  "ferai",
  "ferme",
  "feter",
  "fibre",
  "fiche",
  "fichu",
  "fierte",
  "figuier",
  "filer",
  "filet",
  "fille",
  "filme",
  "filon",
  "finale",
  "finie",
  "finir",
  "finit",
  "firme",
  "fixee",
  "fixer",
  "flair",
  "flanc",
  "flash",
  "fleau",
  "fleur",
  "flore",
  "floue",
  "flotte",
  "foire",
  "folie",
  "folle",
  "fonce",
  "fonda",
  "fonde",
  "fonde",
  "fonte",
  "force",
  "forer",
  "foret",
  "forge",
  "forge",
  "forme",
  "forte",
  "forum",
  "fosse",
  "fouet",
  "foule",
  "foyer",
  "franche",
  "fratrie",
  "frein",
  "frere",
  "frigo",
  "frime",
  "frire",
  "frise",
  "froid",
  "frole",
  "front",
  "fronde",
  "fruite",
  "fuite",
  "fumee",
  "fumer",
  "fureter",
  "furie",
  "fusele",
  "fuselage",
  "fusil",
  "futur",
  "gaffe",
  "gagne",
  "gagne",
  "gaine",
  "gamin",
  "gamme",
  "ganse",
  "garde",
  "gardien",
  "garer",
  "gater",
  "gaver",
  "gazon",
  "graver",
  "geant",
  "geler",
  "gemir",
  "gener",
  "genie",
  "genou",
  "genre",
  "gerbe",
  "geree",
  "gerer",
  "germe",
  "geste",
  "gifle",
  "gigoter",
  "gitane",
  "givre",
  "glace",
  "glacier",
  "globe",
  "gober",
  "golfe",
  "gomme",
  "gorge",
  "goulu",
  "grace",
  "grade",
  "graine",
  "grand",
  "grappe",
  "grave",
  "gravure",
  "grele",
  "greve",
  "grise",
  "grive",
  "guepe",
  "guere",
  "guerre",
  "guide",
  "guise",
  "gypse",
  "habiter",
  "hache",
  "haine",
  "haler",
  "halte",
  "haleter",
  "hanter",
  "happe",
  "harpe",
  "hater",
  "haute",
  "havre",
  "heler",
  "herbe",
  "heron",
  "heure",
  "hibou",
  "hiver",
  "hoche",
  "homme",
  "honte",
  "hotel",
  "houle",
  "huile",
  "humer",
  "hutte",
  "hyene",
  "hymne",
  "icone",
  "ideal",
  "idiot",
  "image",
  "image",
  "impie",
  "impot",
  "impure",
  "index",
  "inoui",
  "islam",
  "isoler",
  "issue",
  "jambe",
  "jambon",
  "japon",
  "jaser",
  "jauge",
  "jaune",
  "jetee",
  "jeter",
  "jeton",
  "jette",
  "jeudi",
  "jeune",
  "jointure",
  "jolie",
  "jouee",
  "jouer",
  "jouet",
  "jouir",
  "jouit",
  "jugee",
  "juger",
  "juive",
  "jupon",
  "jurer",
  "juron",
  "juste",
  "justice",
  "kurde",
  "kyste",
  "lacet",
  "lacez",
  "lacerer",
  "lache",
  "lache",
  "laine",
  "laineux",
  "lampe",
  "lance",
  "lanceur",
  "lange",
  "lapin",
  "laque",
  "large",
  "larme",
  "laser",
  "lasse",
  "latin",
  "latte",
  "lavage",
  "lecon",
  "legale",
  "legere",
  "lente",
  "leser",
  "letale",
  "levee",
  "lever",
  "levre",
  "liant",
  "libre",
  "licou",
  "liege",
  "lieux",
  "ligne",
  "ligue",
  "limer",
  "linge",
  "lisse",
  "liste",
  "litre",
  "livre",
  "lobby",
  "local",
  "loger",
  "lopin",
  "loque",
  "louer",
  "louper",
  "lourde",
  "loyal",
  "loyer",
  "lueur",
  "luire",
  "lundi",
  "lutte",
  "luxer",
  "lycee",
  "macon",
  "mafia",
  "magie",
  "maire",
  "maitre",
  "major",
  "malin",
  "maligne",
  "malle",
  "malte",
  "maman",
  "manger",
  "maniere",
  "manne",
  "mardi",
  "maree",
  "marge",
  "marier",
  "marine",
  "marre",
  "masse",
  "matin",
  "mauve",
  "meche",
  "media",
  "mefie",
  "melee",
  "meler",
  "melon",
  "menee",
  "mener",
  "merci",
  "merle",
  "messe",
  "metal",
  "meteo",
  "metre",
  "metro",
  "mette",
  "meurt",
  "micro",
  "mieux",
  "milan",
  "mille",
  "mince",
  "miser",
  "mixte",
  "mixture",
  "moche",
  "moine",
  "moisi",
  "moite",
  "monde",
  "monte",
  "monte",
  "moque",
  "moral",
  "morne",
  "morte",
  "morue",
  "morve",
  "motif",
  "moule",
  "moyen",
  "mufle",
  "munir",
  "muret",
  "murir",
  "musee",
  "myope",
  "mythe",
  "nager",
  "nappe",
  "natal",
  "natif",
  "natte",
  "naval",
  "navet",
  "neant",
  "neige",
  "nette",
  "neuve",
  "neveu",
  "niant",
  "niece",
  "noble",
  "noire",
  "nomme",
  "nomme",
  "norme",
  "noter",
  "notre",
  "notre",
  "nouer",
  "noyau",
  "noyer",
  "nuage",
  "nuire",
  "nulle",
  "nuque",
  "obeir",
  "obese",
  "objet",
  "ocean",
  "odeur",
  "offre",
  "oisif",
  "olive",
  "ombre",
  "oncle",
  "ongle",
  "opera",
  "opere",
  "opere",
  "orage",
  "orale",
  "ordre",
  "orgue",
  "orner",
  "ortie",
  "osent",
  "otage",
  "ouate",
  "oubli",
  "ouest",
  "ourse",
  "outil",
  "outre",
  "ouvre",
  "ovule",
  "oxyde",
  "pacte",
  "pa??en",
  "paire",
  "palir",
  "palme",
  "panne",
  "parce",
  "parer",
  "parle",
  "parle",
  "parmi",
  "paroi",
  "parti",
  "parue",
  "passa",
  "passe",
  "passe",
  "patee",
  "patir",
  "patte",
  "patin",
  "paume",
  "pause",
  "payee",
  "payer",
  "peage",
  "peche",
  "peche",
  "pegre",
  "peine",
  "peine",
  "peint",
  "pekin",
  "peler",
  "pelle",
  "penal",
  "pendu",
  "penne",
  "pense",
  "pense",
  "pente",
  "pepin",
  "percu",
  "perdu",
  "peril",
  "perir",
  "perle",
  "perte",
  "peser",
  "peste",
  "petit",
  "petri",
  "phare",
  "phase",
  "photo",
  "piano",
  "piece",
  "piege",
  "piete",
  "pieux",
  "piger",
  "pilon",
  "pince",
  "pinte",
  "pique",
  "piste",
  "pitie",
  "pitre",
  "pivot",
  "place",
  "plage",
  "plaie",
  "plait",
  "plane",
  "planete",
  "plant",
  "plante",
  "plate",
  "plebe",
  "plein",
  "plier",
  "plomb",
  "pluie",
  "plume",
  "poche",
  "poele",
  "poeme",
  "poete",
  "poing",
  "point",
  "poire",
  "polar",
  "polir",
  "pomme",
  "pompe",
  "poney",
  "porta",
  "porte",
  "porte",
  "porto",
  "posee",
  "poser",
  "poste",
  "potin",
  "pouce",
  "poule",
  "poupe",
  "prend",
  "prete",
  "prete",
  "prevu",
  "prier",
  "prime",
  "prime",
  "prise",
  "prive",
  "prive",
  "proie",
  "promu",
  "prone",
  "prose",
  "proue",
  "prune",
  "puant",
  "puise",
  "pulpe",
  "punir",
  "purge",
  "purin",
  "quand",
  "quant",
  "quart",
  "quasi",
  "quete",
  "queue",
  "quota",
  "rabat",
  "radar",
  "radin",
  "radon",
  "radio",
  "ragot",
  "raide",
  "raler",
  "rampe",
  "range",
  "range",
  "raper",
  "raser",
  "rater",
  "ravin",
  "ravir",
  "rayer",
  "rayon",
  "reagi",
  "rebut",
  "recel",
  "reche",
  "recif",
  "recit",
  "recue",
  "recul",
  "recrue",
  "recrute",
  "reelu",
  "regie",
  "regle",
  "regle",
  "regne",
  "reine",
  "rejet",
  "relie",
  "relie",
  "remet",
  "rende",
  "rendu",
  "renie",
  "renomme",
  "rente",
  "repit",
  "repli",
  "resta",
  "reste",
  "reste",
  "reuni",
  "rever",
  "revue",
  "rhume",
  "riche",
  "risee",
  "rival",
  "robin",
  "robot",
  "roche",
  "roder",
  "roman",
  "rompt",
  "rompu",
  "ronde",
  "rosee",
  "rotir",
  "rouer",
  "rouge",
  "roule",
  "route",
  "royal",
  "ruban",
  "ruche",
  "rugby",
  "ruine",
  "rural",
  "ruser",
  "russe",
  "sable",
  "sabre",
  "sache",
  "sacre",
  "saine",
  "saint",
  "saisi",
  "saler",
  "salin",
  "salir",
  "salle",
  "salon",
  "salue",
  "salue",
  "salut",
  "sante",
  "saoul",
  "saper",
  "sapin",
  "satin",
  "sauce",
  "sauge",
  "saule",
  "saura",
  "saute",
  "saute",
  "sauve",
  "sauveur",
  "savez",
  "savon",
  "saxon",
  "sceau",
  "scene",
  "scier",
  "science",
  "score",
  "seche",
  "seize",
  "selle",
  "selon",
  "semer",
  "senat",
  "sense",
  "sente",
  "senti",
  "serai",
  "serbe",
  "serie",
  "serra",
  "serre",
  "serre",
  "serve",
  "servi",
  "seuil",
  "seule",
  "sevir",
  "siege",
  "sigle",
  "signe",
  "signe",
  "singe",
  "sinon",
  "sioux",
  "sirop",
  "sitot",
  "situe",
  "sitar",
  "situe",
  "sobre",
  "socle",
  "solde",
  "somme",
  "sonde",
  "songe",
  "songe",
  "sonne",
  "sonnet",
  "sonate",
  "sorte",
  "sorti",
  "souci",
  "sourcil",
  "soudure",
  "soupe",
  "sourd",
  "soute",
  "spore",
  "sportif",
  "stade",
  "stage",
  "style",
  "stylo",
  "suant",
  "suave",
  "subie",
  "subir",
  "subite",
  "sucer",
  "sucre",
  "sueur",
  "suite",
  "suivi",
  "sujet",
  "super",
  "surgi",
  "sympa",
  "tabac",
  "table",
  "tabou",
  "tache",
  "tache",
  "taire",
  "talon",
  "tango",
  "tanin",
  "tante",
  "taper",
  "tapie",
  "tarde",
  "tarde",
  "tarif",
  "tarir",
  "tarte",
  "tassa",
  "tasse",
  "tasse",
  "tater",
  "taule",
  "taupe",
  "taxer",
  "teint",
  "telle",
  "tempe",
  "tempo",
  "tendu",
  "tenir",
  "tenor",
  "tenta",
  "tente",
  "tente",
  "tenue",
  "terme",
  "therme",
  "terne",
  "terre",
  "texte",
  "theme",
  "these",
  "tibia",
  "tiede",
  "tient",
  "tigre",
  "tilde",
  "tiree",
  "tirer",
  "tisse",
  "tissu",
  "titane",
  "titre",
  "toile",
  "tolle",
  "tombe",
  "tonne",
  "toque",
  "torse",
  "totale",
  "trace",
  "trahi",
  "train",
  "trait",
  "trame",
  "treve",
  "tribu",
  "trier",
  "tronc",
  "trone",
  "tuant",
  "tuent",
  "tueur",
  "tuteur",
  "tuile",
  "tuyau",
  "tyran",
  "union",
  "unite",
  "usage",
  "usine",
  "usuel",
  "usure",
  "utile",
  "vache",
  "vague",
  "valet",
  "valse",
  "value",
  "varie",
  "varie",
  "vaste",
  "vecue",
  "veine",
  "vendu",
  "venez",
  "venin",
  "venir",
  "vente",
  "venue",
  "verbe",
  "verge",
  "verger",
  "verni",
  "verra",
  "verre",
  "verse",
  "verset",
  "verso",
  "verte",
  "vertu",
  "verve",
  "veste",
  "vetir",
  "veule",
  "veuve",
  "vexer",
  "video",
  "vider",
  "vieil",
  "vient",
  "vieux",
  "vigne",
  "villa",
  "ville",
  "vingt",
  "virer",
  "viril",
  "visee",
  "viser",
  "vital",
  "vitre",
  "vivra",
  "vivre",
  "vodka",
  "vogue",
  "voici",
  "voile",
  "voire",
  "volee",
  "voler",
  "volet",
  "volute",
  "vomir",
  "votee",
  "voter",
  "votre",
  "votre",
  "vouee",
  "vouer",
  "voulu",
  "voute",
  "voyez",
  "voyou",
  "vraie",
  "wagon",
  "yacht",
  "zebre",

  "agaric",
  "aubour",
  "bambou",
  "beluga",
  "beluga",
  "bibion",
  "bombyx",
  "burgau",
  "caecum",
  "canche",
  "cigale",
  "commun",
  "cordon",
  "cosson",
  "coucou",
  "curare",
  "edente",
  "elaphe",
  "fluide",
  "foussa",
  "griset",
  "huette",
  "iguane",
  "machin",
  "mactre",
  "millet",
  "mirtil",
  "mouron",
  "naiade",
  "numero",
  "peroba",
  "pignet",
  "propre",
  "pyrale",
  "ramier",
  "ranide",
  "renard",
  "roseau",
  "safran",
  "sapote",
  "soffie",
  "sparte",
  "sphinx",
  "syrien",
  "tauzin",
  "truite",

	"abribus",
	"alucite",
	"armoise",
	"artison",
	"atelier",
	"bacille",
	"baleine",
	"barbier",
	"baumier",
	"becharu",
	"belouga",
	"bucarde",
	"buveuse",
	"candida",
	"capelan",
	"capelan",
	"cardere",
	"certain",
	"chardon",
	"cloaque",
	"college",
	"donjuan",
	"ecusson",
	"elaphus",
	"epicene",
	"fiancee",
	"figuier",
	"grillon",
	"hulotte",
	"hystrix",
	"kerygme",
  "laisse",
	"laitier",
	"laricio",
	"laurier",
	"lignage",
	"mayatis",
	"meranti",
	"meranti",
	"moineau",
	"nonette",
	"norrois",
	"oseille",
	"palombe",
	"passion",
	"pierrot",
	"platane",
	"rochier",
	"sagouin",
	"saperde",
	"station",
	"targeur",
	"vautour",
	"vinette",
];

const getRandomWord = () => {
  return words[Math.floor(words.length * Math.random())].toUpperCase();
};

export { getRandomWord };
