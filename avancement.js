
document.addEventListener('DOMContentLoaded', function() {
    
    const months = document.querySelectorAll('.month');
    const monthDetails = document.getElementById('month-details');
    const monthTitle = document.getElementById('month-title');
    const monthDescription = document.getElementById('month-description');
    
    
    months.forEach(month => {
        month.addEventListener('click', function() {
            
            const monthName = this.getAttribute('data-month');
            
            
            monthTitle.textContent = monthName;
            monthDescription.textContent = getMonthDetails(monthName);

            
            months.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


function getMonthDetails(month) {
    switch (month) {
        case "Janvier 2025":
            return "Rassemblement des différents travaux et recherches des membres du groupe pour créer le début du jeu.<br>Mise en place du personnage principal avec ses fonctionnalités. Mais également d'un menu provisoire pour accéder à un niveau provisoire.<br>Nous avons également l'apparition d'un code fonctionnel pour le déplacement des ennemies.";
        case "Février 2025":
            return "Finalisation des différents sons du jeu et implémentation des différents sons à la scène dont il correspond.<br>Ajout de script en JavaScript pour le site internet afin de rendre le site plus dynamique.<br>Création de plusieurs niveaux.";
        case "Mars 2025":
            return "Finalisation du code des ennemis et implémentation des ennemis sur les niveaux.";
        case "Avril 2025":
            return "Amélioration du site internet en ajoutant les dernières informations nécessaires.<br>Création des derniers niveaux.";
        case "Mai 2025":
            return "Finalisation du projet.<br>- Une histoire captivante pour attirer l'attention du joeur.<br>- Le jeu possède une fonctionnalité pour jouer en multijoueur, en étant sur un ordinateur différent.<br>- Le site internet est mis en ligne et accessible à tous.<br>- Des niveaux variés afin de rendre le jeu plus dynamique.<br>- Des ennemis présent pour barrer la route au joueur et d'augmenter la difficulté du jeu.<br>- Un système de vie pour permettre au joueur de prendre un temps de réflexion avant d'agir.";
        
        case "Octobre 2024":
            return "Le projet a début. Les premières idées d’« Objectif Lune ! » sont survenues lors d’une discussion autour d’un repas.<br>Au départ, nous n’avions qu’un nom, repris pour sa sonorité d’une série de vidéos Minecraft créée par Frigiel, un Youtubeur français reconnu pour ses vidéos Minecraft, accompagné d’autres créateurs de contenu. Cette série de vidéos avait pour but d’atteindre la Lune, en ne partant de rien, en équipe ou seul, seulement équipé de sa capacité à réfléchir à un moyen de survivre pour atteindre son objectif. Nous avons donc construit les débuts d’”Objectif Lune !” à partir de nos propres idées ainsi qu’en reprenant le concept de la série. Pour écrire le fil directeur de l’introduction au jeu, nous nous sommes inspirés du début de la série Netflix, “The Rain” en reprenant l’environnement post-apocalyptique dû à un incident : un virus pour la série et un accident nucléaire pour notre jeu. “Objectif Lune !” offrira donc une expérience captivante alliant exploration et survie.";
        case "Novembre 2024":
            return "Début de la familiarisation avec l'environnement et l'utilisation d'Unity.<br>Création des premiers prototypes.<br>Nous avons commencé par créer une scène simple avec un fond et un personnage.<br>Les premiers prototypes ont été réalisé avec difficulté du fait d'un environnement nouveau.";
        case "Décembre 2024":
            return "Amélioration des premiers prototypes.<br>L'ajout des déplacements nous permets de visualiser d'avantage la scène et de découvrir de nouvelles fonctionnalités dont nous n'avions pas connaissance.<br>Création des premiers prototypes de code pour les ennemis, c'est-à-dire leur déplacement automatique avec l'intelligence artificielle.<br>Début de la création du site internet en HTML et CSS. Le site est pour le moment statique.";
        default:
            return "Aucune information disponible pour ce mois.";
    }
}
