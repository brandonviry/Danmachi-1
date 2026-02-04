# Danmachi Fan Site

Site web fan dédié à l'univers de **Danmachi** (Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka / Is It Wrong to Try to Pick Up Girls in a Dungeon?).

![Aperçu du site](src/assets/images/babel.png)

## 🌟 Présentation

Ce fansite présente l'univers de Danmachi à travers :
- Les **saisons** de l'anime (Saison 1 & 2 - Sword Oratoria)
- Les **personnages** par Familia (Hestia, Loki, Freya, etc.)
- Les **jeux vidéo** de la franchise
- Les **produits dérivés**

## 🏗️ Architecture du projet

```
Danmachi-1/
├── index.html              # Point d'entrée
├── pages/                  # Pages du site
│   ├── home.html          # Page d'accueil
│   ├── season-1.html      # Saison 1 - Familia Myth
│   ├── season-2.html      # Saison 2 - Sword Oratoria
│   ├── characters-s1.html # Personnages Saison 2
│   ├── characters-s2.html # Personnages Saison 1
│   ├── products.html      # Produits dérivés
│   ├── games.html         # Jeux vidéo
│   └── end.html           # Page de fin (animation)
├── src/
│   ├── css/               # Styles
│   │   ├── main.css       # Styles principaux
│   │   ├── responsive.css # Responsive design
│   │   └── pages/         # Styles par page
│   ├── js/                # Scripts
│   │   └── app.js         # Navigation et modal
│   └── assets/            # Ressources
│       ├── audio/         # Fichiers audio
│       └── images/        # Images (kebab-case)
```

## 🎨 Design System

### Palette de couleurs
| Couleur | Code | Utilisation |
|---------|------|-------------|
| Bleu nuit | `#0e2b40` | Fonds, titres |
| Bleu clair | `#173d59` | Hover, accents |
| Argent | `#c0c4cd` | Texte, glow |
| Blanc | `#ffffff` | Panels |
| Noir | `#000000` | Bordures |

### Typographie
- **Titres** : [Anton](https://fonts.google.com/specimen/Anton) (Google Fonts)
- **Corps** : [Abel](https://fonts.google.com/specimen/Abel) (Google Fonts)

### Composants clés
- **Modal de bienvenue** : Animation fade-in avec overlay sombre
- **Cards** : Bordures noires, ombres portées, hover effects
- **Grilles responsives** : CSS Grid adaptatif
- **Fenêtre macOS** : Page end.html avec animation

## ✨ Fonctionnalités

### Navigation
- Menu latéral avec sous-menus déroulants
- Navigation iframe sans rechargement de page
- Responsive mobile (menu hamburger)

### Animations
- **Page d'accueil** : Modal de bienvenue stylisée
- **Page de fin** : Fenêtre macOS avec personnages animés marchant sur place
- **Grilles** : Hover effects sur cards et images

### Responsive
- Mobile first (< 600px)
- Tablette (601px - 1000px)
- Desktop (> 1000px)

## 🚀 Utilisation

### Lancer le projet
Ce projet est en HTML/CSS/JS vanilla. Pas besoin de serveur :

```bash
# Ouvrir simplement index.html dans un navigateur
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

Ou utiliser un serveur local pour éviter les restrictions CORS :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis ouvrir : http://localhost:8000

## 📚 Historique du projet

Ce projet a une histoire riche qui s'étale sur plus de **6 ans** :

### 🎓 Origine universitaire (2020)
Le site a été initialement créé en **janvier 2020** dans le cadre d'un projet universitaire. À l'époque, il s'agissait d'un premier pas dans le développement web avec une structure simple et un code débutant.

**Caractéristiques de la v1 (2020)** :
- Structure basique avec dossier `bdd/` (Base De Données) mal nommé
- CSS dispersés et incohérents (`s0.css`, `s1.css`, `mag.css`...)
- Nomenclature des fichiers problématique (espaces, casse mixte)
- Navigation fonctionnelle mais basique

### 🏗️ Refonte complète (2026)
Après une longue période de sommeil, le projet a bénéficié d'une **refonte totale** en 2026 pour transformer ce projet étudiant en une architecture professionnelle.

**Transformations majeures** :
| Aspect | Avant (2020) | Après (2026) |
|--------|--------------|--------------|
| **Architecture** | `bdd/`, `css/`, `js/` dispersés | Structure `src/` moderne et organisée |
| **Nomenclature** | `s1.html`, `mag.css`, `babel.png` | `season-1.html`, `products.css`, `babel.png` (kebab-case) |
| **Design** | Styles inconsistants par page | Design System unifié (variables CSS, composants) |
| **Responsive** | Non existant | Mobile-first avec breakpoints |
| **Navigation** | Simple iframe | Navigation avancée avec modal de bienvenue |
| **Page de fin** | Page basique | Fenêtre macOS interactive avec animations |

**Étapes de la refonte** :
1. **Refonte du layout** : Mise en place de la navigation responsive
2. **Correction des styles** : Fix des backgrounds, grilles, et cohérence visuelle
3. **Unification CSS** : Création d'un Design System avec variables et composants réutilisables
4. **Amélioration UX** : Remplacement des alert() par une modal de bienvenue stylisée
5. **Restructuration architecture** : Migration vers une structure professionnelle avec `src/`, `pages/`, `assets/`

Cette refonte représente l'évolution d'un développeur, passant du code académique aux standards professionnels actuels.

## 📝 Notes

- Images officielles © Danmachi / Fujino Omori
- Site à but non lucratif, créé initialement pour l'entraînement au développement web en faculté
- Toutes les images sont issues du site officiel Danmachi

## 🛠️ Technologies

- HTML5 sémantique
- CSS3 (Variables, Grid, Flexbox, Animations)
- JavaScript ES6+ (Vanilla)
- Google Fonts (Anton, Abel)

## 📱 Compatibilité

- Chrome / Edge / Firefox / Safari (dernières versions)
- Responsive : iPhone, iPad, Desktop

---

**Auteur** : VIRY Brandon  
**Date** : 2024
