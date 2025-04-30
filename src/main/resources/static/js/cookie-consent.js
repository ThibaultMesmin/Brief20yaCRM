import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';
/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({
    categories: {
        necessary: {
            enabled: true,
            readOnly: true // Ces cookies sont essentiels et ne peuvent pas être désactivés
        },
        analytics: {
            enabled: false, // Désactivé par défaut
            description: 'Ces cookies collectent des données utilisateur (prenom nom, email, commentaire, meetings, role) pour partager entre les utilisateurs'
        },
        marketing: {
            enabled: false, // Désactivé par défaut
            description: 'Ces cookies sont utilisés pour personnaliser les publicités et suivre les visiteurs sur différents sites.'
        }
    },
    language: {
        default: 'fr',
        translations: {
            fr: {
                consentModal: {
                    title: 'Avalanche de cookies ! &#127850',
                    description: 'Nous utilisons des cookies pour améliorer votre expérience sur notre site et le partage de données entre utilisateur. Vous pouvez gérer vos préférences ci-dessous.',
                    acceptAllBtn: 'Tout accepter &#9989',
                    acceptNecessaryBtn: 'Nécessaire uniquement',
                    showPreferencesBtn: 'Gérer les préférences'
                },
                preferencesModal: {
                    title: 'Gérer vos préférences de cookies',
                    acceptAllBtn: 'Tout accepter &#9989',
                    acceptNecessaryBtn: 'Nécessaire uniquement',
                    savePreferencesBtn: 'Enregistrer ma sélection',
                    closeIconLabel: 'Fermer',
                    sections: [
                        {
                            title: 'Cookies strictement nécessaires',
                            description: 'Ces cookies sont essentiels pour le bon fonctionnement du site et ne peuvent pas être désactivés.' +
                                'comme : nom, prénom, email, commentaire, meetings, role, documents',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Cookies de performance et d\'analyse',
                            description: 'Ces cookies collectent des informations sur la manière dont vous utilisez notre site pour nous aider à l\'améliorer.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'Cookies marketing',
                            description: 'Ces cookies sont utilisés pour personnaliser les publicités (si il y en a) et suivre les visiteurs sur différents sites.',
                            linkedCategory: 'marketing'
                        },
                        {
                            title: 'Plus d\'informations',
                            description: 'Pour toute question concernant notre politique de cookies, veuillez <a href="#contact-page">nous contacter</a>.'
                        }
                    ]
                }
            }
        }
    }
});