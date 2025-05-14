document.addEventListener("DOMContentLoaded", function() {  
  // Attendre que le DOM soit chargé
  const blocs = document.querySelectorAll(".accordion__bloc");  

  blocs.forEach(function(bloc) {  
    // Sélectionne le titre et le contenu
    let title = bloc.querySelector(".accordion__title");  
    let answerBloc = bloc.querySelector(".accordion__answer-bloc");  

    title.addEventListener("click", function() {  
      // Vérifie si le bloc est actif
      if (bloc.classList.contains("active")) {  
        // Ferme le bloc
        bloc.classList.remove("active");  
        answerBloc.style.height = "0";  
      } else {  
        // Ouvre le bloc et ajuste la hauteur
        bloc.classList.add("active");  
        answerBloc.style.height = answerBloc.querySelector(".accordion__answer").clientHeight + "px";  
      }
    });
  });
});
