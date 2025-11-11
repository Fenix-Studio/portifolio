document.addEventListener('DOMContentLoaded', () => {
    // === Seleção de Elementos ===
    const nav = document.querySelector('.nav-bar');
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const backToTopBtn = document.getElementById('backToTopBtn');

    // === Lógica do Menu Mobile ===
    
    // Abre/Fecha o menu e alterna o ícone (hamburguer)
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open'); 
        mobileMenu.classList.toggle('open');
    });

    // Fecha o menu ao clicar em um link (CRÍTICO para navegação mobile)
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });


    // === Lógica de Scroll e Botão Voltar ao Topo (CONSOLIDADO) ===
    
    // Usamos um único event listener para todas as ações de scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        // 1. Lógica Sticky Nav (ao rolar 30px)
        if (scrollY > 30) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // 2. Lógica Voltar ao Topo (ao rolar 300px, conforme sua última versão)
        if (scrollY > 300) {
            // Usa 'flex' para exibir o botão (necessário para alinhamento CSS)
            backToTopBtn.style.display = "flex"; 
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Ação do botão Voltar ao Topo
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});