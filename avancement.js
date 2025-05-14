
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
            return "Avancement des différentes tâches. ";
        case "Février 2025":
            return "Finalisation du site internet. Création de différents niveaux. Son du jeu prêt à mettre en place.";
        case "Mars 202":
            return "";
        case "Avril":
            return "";
        case "Mai":
            return "";
        
        case "Octobre 2024":
            return "Le projet a début. Les premières idées d’« Objectif Lune ! » sont survenues lors d’une discussion autour d’un repas.<br> Au départ, nous n’avions qu’un nom, repris pour sa sonorité d’une série de vidéos Minecraft créée par Frigiel, un Youtubeur français reconnu pour ses vidéos Minecraft, accompagné d’autres créateurs de contenu. Cette série de vidéos avait pour but d’atteindre la Lune, en ne partant de rien, en équipe ou seul, seulement équipé de sa capacité à réfléchir à un moyen de survivre pour atteindre son objectif. Nous avons donc construit les débuts d’”Objectif Lune !” à partir de nos propres idées ainsi qu’en reprenant le concept de la série. Pour écrire le fil directeur de l’introduction au jeu, nous nous sommes inspirés du début de la série Netflix, “The Rain” en reprenant l’environnement post-apocalyptique dû à un incident : un virus pour la série et un accident nucléaire pour notre jeu. “Objectif Lune !” offrira donc une expérience captivante alliant exploration et survie.";
        case "Novembre 2024":
            return "Début de la familiarisation avec l'environnement et l'utilisation d'Unity.";
        case "Décembre 2024":
            return "Premier prototype.";
        default:
            return "Aucune information disponible pour ce mois.";
    }
}
