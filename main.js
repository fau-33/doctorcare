window.addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  // Verficar se a seção passou da linha
  // Quais dados vou precisar?

  // O topo da seção
  const sectionTop = section.offsetTop

  // A altura da seção
  const sectionHeight = section.offsetHeight

  // O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //Informações dos dados e da lógica
  //console.log('O topo da seção chegou ou passou da linha', sectionTopReachOrPassedTargetLine);

  // Verficar se a seção passou da linha
  // Quais dados vou precisar?

  // A seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight;
  
  // o final da seção passou a alvo da linha
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
 // console.log("O fundo da seção passou da linha?", sectionEndPassedTargetLine);

  // limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }

}
function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll(){
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

 
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services head,
#services .card,
#about,
#about header,
#about .content`);