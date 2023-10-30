function escrevendoLetra(){
    function ativaLetra(elemento, delay) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, delay + 75 * i);
        });
    }
    
    const titulo1 = document.querySelector('.digitando1');
    const titulo2 = document.querySelector('.digitando2');
    
    ativaLetra(titulo1, 0);
    ativaLetra(titulo2,titulo2.innerHTML.length * 75 + 100);
    // usei esse comando para dar o efeito de 'Digitando...' ao texto.//

}

escrevendoLetra(); // Usa-se essa linha para chamar a função que está a cima. //

function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')
    
    
    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-xmark');
        navMenu.classList.toggle('ativado');
    }) // cód para a parte das tres barras virar um x. //
}

menuMobol();

function sobreMim(){
    const experiencia = document.querySelectorAll('.experience_content div');
    const botao = document.querySelectorAll('.experience_content ul li')
    


    experiencia[0].classList.add('ativo')
    botao[0].classList.add('ativo')
    

    function slideShow(index){
        experiencia.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botao.forEach((item)=>{
            item.classList.remove('ativo')
        });
        experiencia[index].classList.add('ativo')
        botao[index].classList.add('ativo')
    }

   


    botao.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

}
sobreMim();




const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.project_navegacao li');
const buttonALL = document.querySelector('.project_models .all');

listaALL.forEach((item)=>{
    item.classList.add('ativo');
})

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    })
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
})

function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    });

    if(buttom == 'design'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
    }
    if(buttom == 'graphic'){
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }

    if(buttom == 'website'){
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }

    if(buttom == 'all'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showLista(listaALL);
        } if(currentButton.classList.contains('design')){
            showLista(listaALL, "design")
        }

        if(currentButton.classList.contains('graphic')){
            showLista(listaALL, "graphic")
        }

        if(currentButton.classList.contains('website')){
            showLista(listaALL, "website")
        }

        if(currentButton.classList.contains('all')){
            showLista(listaALL, "all")
        }
    });
});

//PARTE PARA DEIXAR O EFEITO DE TRANSIÇÃO DE PAGINA MAIS SUAVE//

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll(".scroll-link");
    const externalLinks = document.querySelectorAll(".external-link");

    scrollLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    externalLinks.forEach(link => {
        link.addEventListener("click", openInNewTab);
    });

    function scrollToSection(event) {
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    }

    function openInNewTab(event) {
        const targetUrl = this.getAttribute("href");

        if (targetUrl) {
            event.preventDefault();
            window.open(targetUrl, "_blank");
        }
    }
});

//DARK MODE//

const darkModeToggle = document.getElementById("dark-mode-toggle-checkbox");
const body = document.body;

// Função para ativar o modo escuro
function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled"); // Salva o estado no localStorage
}

// Função para desativar o modo escuro
function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled"); // Salva o estado no localStorage
}

// Verifique se o modo escuro está ativado no localStorage e atualize a interface
const storedMode = localStorage.getItem("dark-mode");

if (storedMode === "enabled") {
    enableDarkMode();
    darkModeToggle.checked = true;
} else {
    disableDarkMode();
}

// Adicione um ouvinte de evento para alternar o modo escuro quando a caixa de seleção for clicada
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Função para alternar entre os modos claro e escuro
function toggleDarkMode() {
    const darkModeCheckbox = document.getElementById('dark-mode-toggle-checkbox');
    const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');

    if (darkModeCheckbox.checked) {
        // Modo escuro ativado
        darkModeStylesheet.setAttribute('href', 'style-dark.css');
    } else {
        // Modo claro ativado
        darkModeStylesheet.setAttribute('href', 'style.css');
    }
}

// Adicione um ouvinte de evento para detectar a mudança no estado do checkbox
document.getElementById('dark-mode-toggle-checkbox').addEventListener('change', toggleDarkMode);


