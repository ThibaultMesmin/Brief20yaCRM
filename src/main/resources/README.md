# README

## Projet : Brief 20 RGPD et HTMX

### Description
En tant que développeur web, je dois intégrer une évolution fonctionnelle sur une application existante :**

Informer l’utilisateur de la collecte et de l’utilisation de ses données via un bandeau cookie conforme au RGPD.
Améliorer la performance et l’expérience utilisateur en utilisant HTMX pour effectuer des requêtes partielles et éviter les rechargements complets de page.
---

### Fonctionnalités principales
1. **Register et Login** :
    - Les utilisateurs peuvent s'inscrire via un formulaire.
    - Après inscription, un message de confirmation s'affiche.

2. **Bandeau de consentement aux cookies** :
    - Affiché dès la première visite.
    - Permet de gérer les préférences des cookies (nécessaires (exemple: nom prenom...) , analytiques, marketing (factice)).

3. **HTMX** :
    - Utilisé pour l'inscription.

4. **Sécurité (fait par formateur)** :
    - Gestion des utilisateurs avec **Spring Security**.
    - Cryptage des mots de passe avec **BCrypt**.

---

### Technologies utilisées
- **Thymeleaf** pour les pages HTML.
- **HTMX** pour des interactions dynamiques.
- **CookieConsent.js** pour la gestion des cookies.
- **Docker** pour la base de données car j'ai un souci ave psql.
- **Maven** ou **Gradle** pour la gestion des dépendances.

---

### Installation et exécution

#### Étapes
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/ThibaultMesmin/Brief20yaCRM.git
   ```

2. Installez les dépendances :
   ```bash
   ./mvnw clean install
   ```
   ou 
   ```bash
    ./gradlew build
    ```

3. Lancez l'application :
   ```bash
   ./mvnw spring-boot:run
   ```
   ou 
   ```bash
    ./gradlew bootRun
    ```

4. Accédez à l'application dans votre navigateur :
   ```
   http://localhost:8080
   ```

---

### Fonctionnalités HTMX
- **Formulaire d'inscription** :
    - Le formulaire utilise HTMX pour envoyer les données.

---

### Bandeau de cookies
- **CookieConsent.js** est utilisé pour afficher un bandeau de consentement.
- Les users peuvent gérer leurs préférences pour les cookies nécessaires, analytiques et marketing (factice).

---

### Critères de performance
1. Le bandeau RGPD respecte les exigences légales (explication claire, gestion du consentement).
2. HTMX améliore la réactivité en limitant les transferts de données.
3. Le code est propre, commenté et versionné sur GitHub.
4. L'interface reste inchangée.
5. La documentation est claire et complète.

---