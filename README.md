# Becc's Studio — Portfolio de Binta Kande

Portfolio personnel de Binta Kande — Chief of Staff · MSc IA & Data · Freelance Marketing Digital.

## Modifier le site

Tout le contenu est dans **`index.html`** — un seul fichier, pas de build nécessaire.

### Ce que tu peux modifier facilement

| Ce que tu veux changer | Où dans le fichier |
|---|---|
| Nom, titre, description | `const CONTENT = { fr: { heroName, heroSubtitle, heroDescription... }` |
| Email de contact | `contactEmail: "binta@beccsstudio.com"` |
| Textes FR / EN | Objet `CONTENT` — section `fr:` et `en:` |
| Missions Chief of Staff | `cosMissions: [...]` |
| Services freelance | `services: [...]` |
| Cas clients (stats) | `cases: [...]` |
| Chiffres clés | `stats: [...]` |
| Outils / compétences | `skillCategories: [...]` |
| Articles du journal | `blog: [...]` |
| Couleur principale | Cherche `--accent:` dans le `<style>` |

### Remplacer les photos

Les zones rayées "portrait · drop in" sont des placeholders. Pour les remplacer :

1. Ajoute ta photo dans le repo (ex: `photo.jpg`)
2. Dans `index.html`, cherche `hero__visual-photo` ou `portrait-slot`
3. Remplace le background `repeating-linear-gradient(...)` par `background: url('photo.jpg') center/cover`

### Brancher le formulaire de contact

Le formulaire simule l'envoi pour l'instant. Pour le rendre fonctionnel :

1. Crée un compte sur [Formspree](https://formspree.io)
2. Dans `index.html`, cherche `const submit = (e) =>`
3. Ajoute un `fetch('https://formspree.io/f/TON_ID', {...})` avant le `setSent(true)`

## Déployer (GitHub Pages)

Le site se met à jour automatiquement à chaque `git push` si GitHub Pages est activé sur la branche `main`.

## Stack

- React 18 (CDN, pas de build)
- Babel Standalone (transpile JSX dans le navigateur)
- CSS custom properties (tokens de design)
- Google Fonts : Fraunces, Inter, JetBrains Mono
