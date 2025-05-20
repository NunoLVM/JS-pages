// document.addEventListener("DOMContentLoaded", function() {  
//   // Attendre que le DOM soit chargé
//   const blocs = document.querySelectorAll(".accordion__bloc");  

//   blocs.forEach(function(bloc) {  
//     // Sélectionne le titre et le contenu
//     let title = bloc.querySelector(".accordion__title");  
//     let answerBloc = bloc.querySelector(".accordion__answer-bloc");  

//     title.addEventListener("click", function() {  
//       // Vérifie si le bloc est actif
//       if (bloc.classList.contains("active")) {  
//         // Ferme le bloc
//         bloc.classList.remove("active");  
//         answerBloc.style.height = "0";  
//       } else {  
//         // Ouvre le bloc et ajuste la hauteur
//         bloc.classList.add("active");  
//         answerBloc.style.height = answerBloc.querySelector(".accordion__answer").clientHeight + "px";  
//       }
//     });
//   });
// });

function initAccordion () {
  const blocs = document.querySelectorAll (".accordion__bloc");
  blocs.forEach(function(bloc){
    let title = bloc.querySelector(".accordion__title");
    title.addEventListener("click", function(){
      toggleAccordion(bloc, blocs);
      
    })
  }) 
}
initAccordion();
function toggleAccordion (bloc, blocs) {
  let isOpen = bloc.classList.contains("active");
  let wrapper = bloc.querySelector(".accordion__answer-bloc");
  const content = bloc.querySelector(".accordion__answer");
  if (isOpen) {
    bloc.classList.remove("active");
    wrapper.style.height = "0"
  } else {
    blocs.forEach(function(el){
      el.classList.remove("active");
      el.querySelector(".accordion__answer-bloc").style.height = "0";
    })

    bloc.classList.add("active");
    wrapper.style.height = content.clientHeight+"px";
  }

}