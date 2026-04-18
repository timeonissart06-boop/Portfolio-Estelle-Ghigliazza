# Portfolio — Estelle Ghigliazza

Portfolio en ligne d'Estelle Ghigliazza, étudiante en architecture d'intérieur à Sophia Ynov Campus (Valbonne). Site statique HTML/CSS/JS, sans framework ni dépendance de build.

## Structure

```
/
├── index.html                        # Page d'accueil
├── projects.html                     # Index de tous les projets
├── about.html                        # Page À propos
├── contact.html                      # Page Contact
├── projects/
│   ├── villa-soquet.html             # Rénovation résidentielle 200 m²
│   ├── la-dolce-vita.html            # Rénovation restaurant
│   ├── the-floating-house.html       # Cabane dans les arbres, Thaïlande
│   ├── dessins-et-perspectives.html  # Croquis et aquarelles à la main
│   └── atelier-graffiti.html         # Activité culturelle street art
├── css/
│   └── style.css                     # Styles (design system complet)
├── js/
│   └── main.js                       # Interactions GSAP + scroll
└── images/
    ├── ui/                           # Portrait, images interface
    └── projects/
        ├── villa-soquet/
        ├── la-dolce-vita/
        ├── the-floating-house/
        ├── dessins/
        └── graffiti/
```

## Design system

**Typographie**
- Cormorant Garamond — titres, corps de texte
- Dancing Script — accent script (hero)
- Jost — labels, navigation, UI

**Palette**
- `--ivory` `#F8F5F1` — fond principal
- `--cream` `#EDE9E3` — fond alternatif
- `--linen` `#E4DDD6` — bordures
- `--taupe` `#C4B8AC` — accents légers
- `--stone` `#8B7B6B` — texte secondaire
- `--charcoal` `#2C2318` — texte principal
- `--accent` `#9E8870` — liens hover

**Dépendances CDN**
- GSAP 3.12.5 + ScrollTrigger — animations au scroll
- Google Fonts — Cormorant Garamond, Dancing Script, Jost

## Lancement

Ouvrir `index.html` dans un navigateur, ou servir localement :

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

## Images

Les images sont à placer dans les dossiers correspondants sous `images/projects/`. Les noms de fichiers attendus sont documentés dans chaque page HTML (attribut `src` des balises `<img>`). En l'absence d'image, un fond `var(--linen)` s'affiche automatiquement.

## Navigation entre projets

Les pages projets sont reliées en boucle :

**Villa Soquet → La Dolce Vita → The Floating House → Dessins & Perspectives → Atelier Graffiti → Villa Soquet**
