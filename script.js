// ======================================
// JS para Navegação Suave (Smooth Scroll)
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previne o comportamento padrão (que é pular instantaneamente)
        e.preventDefault();

        // Rola suavemente para o destino (o ID referenciado no link, ex: #servicos)
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// ======================================
// JS para Navegação Suave (Smooth Scroll)
// Dá um toque sofisticado ao rolar a página
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previne o pulo abrupto da navegação padrão
        e.preventDefault();

        // Rola suavemente para o destino (o ID referenciado no link, ex: #servicos)
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ======================================
// JS para Destaque do Menu Ativo (ScrollSpy)
// Altera o link no menu conforme a seção visível
// ======================================

// 1. Seleciona todas as seções que têm um ID (que são os alvos do menu)
const sections = document.querySelectorAll('section[id]');
// 2. Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.luxury-header nav a');

function highlightNav() {
    let current = '';

    // A variável pageYOffset armazena a posição de rolagem vertical da página
    const scrollPosition = window.pageYOffset;

    // Itera sobre cada seção para verificar qual está visível
    sections.forEach(section => {
        // Ajusta o offset para que a seção seja destacada um pouco antes de chegar ao topo (por causa do cabeçalho fixo)
        const sectionTop = section.offsetTop - 150; 
        
        if (scrollPosition >= sectionTop) {
            // Guarda o ID da última seção que passou pelo ponto de destaque
            current = section.getAttribute('id');
        }
    });

    // Remove a classe 'active' de todos os links e adiciona ao link da seção atual
    navLinks.forEach(a => {
        a.classList.remove('active');
        // Verifica se o href do link contém o ID da seção atual
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
}

// Executa a função na carga inicial (para destacar o #inicio) e em cada rolagem
window.addEventListener('load', highlightNav);
window.addEventListener('scroll', highlightNav);