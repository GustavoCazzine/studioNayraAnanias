/* ========================================================================== */
/* ==================== CONFIGURAÇÕES E DADOS DO SITE ==================== */
/* ========================================================================== */

/**
 * CONFIG_SITE
 * Configurações centralizadas: redes sociais, endereços e links
 */
const CONFIG_SITE = {
    social: {
        whatsapp: "5519999670165",
        instagram: "https://www.instagram.com/studionayraananias/",
        maps_google: "https://maps.app.goo.gl/6kBuc2u9k7DqHvrP9",
        waze: "https://waze.com/ul?q=Rua+Quinze+de+Novembro+567+Piracicaba"
    },
    enderecos: {
        fisico: "R. XV de Novembro, 567 - Centro, Piracicaba - SP",
        telefone_visivel: "(19) 99967-0165"
    },
    gerarLinkZap: function(texto = "") {
        const mensagem = texto ? `?text=${encodeURIComponent(texto)}` : "";
        return `https://wa.me/${this.social.whatsapp}${mensagem}`;
    }
};

/* ========================================================================== */
/* ========================== DADOS: SERVIÇOS ========================== */
/* ========================================================================== */

const servicosSobrancelhas = [
    {
        titulo: "Brow Lamination",
        descricao: "A tendência global das passarelas. Fios encorpados, alinhados para cima e com aquele efeito 'wild' e volumoso que dura semanas.",
        caracteristicas: ["Super Volume", "Efeito Fashion", "Nutrição"],
        imagem: "assets/img/servicos/sobrancelhas/BrowLamination.avif"
    },
    {
        titulo: "Nanobrows",
        descricao: "Esqueça a maquiagem diária. Fios desenhados artisticamente na pele para corrigir falhas com uma naturalidade tão alta que ninguém diz que é micro.",
        caracteristicas: ["Hiper-realismo", "Sem Dor", "Longa Duração"],
        imagem: "assets/img/servicos/sobrancelhas/Nanobrows.avif"
    },
    {
        titulo: "Design com Henna",
        descricao: "O equilíbrio perfeito entre cor e forma. Realçamos o desenho natural das suas sobrancelhas preenchendo falhas com um acabamento ombré sofisticado.",
        caracteristicas: ["Efeito Maquiagem", "Definição", "Durabilidade"],
        imagem: "assets/img/servicos/sobrancelhas/DesignHenna.avif"
    },
    {
        titulo: "Design Personalizado",
        descricao: "Não é apenas limpar fios. É um estudo de visagismo para criar a arquitetura perfeita que harmoniza, levanta e valoriza seus traços únicos.",
        caracteristicas: ["Visagismo", "Harmonia", "Spa dos Fios"],
        imagem: "assets/img/servicos/sobrancelhas/DesignPers.avif"
    }
];

const servicosCilios = [
    {
        titulo: "Lash Lifting",
        descricao: "Seus cílios naturais, na sua melhor versão. Curvatura intensa, hidratação profunda e coloração para um 'efeito rímel' sem manutenção complexa.",
        caracteristicas: ["100% Natural", "Tratamento", "Sem Manutenção"],
        imagem: "assets/img/servicos/cilios/LashLifting.avif"
    },
    {
        titulo: "Volume Moana",
        descricao: "Leveza tropical. Uma técnica que mistura texturas para criar o cobiçado 'efeito molhado' (wet look), entregando volume sem perder a delicadeza.",
        caracteristicas: ["Efeito Molhado", "Textura", "Leveza"],
        imagem: "assets/img/servicos/cilios/VolumeMoana.avif"
    },
    {
        titulo: "Efeito Fox Eyes",
        descricao: "O segredo do olhar delineado. Construção estratégica com fios mais longos no canto externo para um efeito lifting imediato, sensual e felino.",
        caracteristicas: ["Efeito Delineado", "Olhar Felino", "Lifting"],
        imagem: "assets/img/servicos/cilios/FoxEyses.avif"
    },
    {
        titulo: "Volume Brasileiro",
        descricao: "O queridinho do Brasil. Fios tecnológicos em formato de Y que garantem um preenchimento preto intenso, ótima retenção e um olhar marcante.",
        caracteristicas: ["Retenção Alta", "Preto Intenso", "Volume Y"],
        imagem: "assets/img/servicos/cilios/VolumeBrasileiro.avif"
    },
    {
        titulo: "Volume Jasmine",
        descricao: "Sofisticação com personalidade. Um design texturizado com 'picos' aparentes que cria um visual de boneca moderna, cheio de atitude.",
        caracteristicas: ["Estilo Wispy", "Sofisticado", "Texturizado"],
        imagem: "assets/img/servicos/cilios/VolumeJasmine.avif"
    }
];

/* ========================================================================== */
/* ========================== DADOS: FEEDBACKS ========================== */
/* ========================================================================== */

const slidesFeedbacks = [
    { 
        nome: "@brubsg2",
        texto: "Nunca fui ao studio, mas acompanhando aqui vejo seu empenho ❤️ continue!",
        imagem: "/assets/img/feedbacks/Cliente01.avif", 
        rating: 5,
        source: "instagram",
        destaque: "Acompanhando aqui vejo seu empenho."
    },
    { 
        nome: "@aline_bocatto",
        texto: "Um atendimento seu é muito mais do que um simples procedimento, é uma energia positiva vinda de você, um carinho, uma atenção... a autoestima e o brilho que você trás para nós não tem preço ❤️ amo seu trabalho Nayra 🥰",
        imagem: "/assets/img/feedbacks/Cliente06.avif", 
        rating: 5,
        source: "instagram",
        destaque: "Um atendimento seu é muito mais do que um simples procedimento."
    },
    { 
        nome: "@gabrielasantos5692",
        texto: "Maravilhosa, impecável, caprichosa, eu sou suspeita falar pq eu sou realmente fã 😍",
        imagem: "/assets/img/feedbacks/Cliente02.avif",
        rating: 5,
        source: "instagram",
        destaque: "Maravilhosa, impecável, caprichosa."
    },
    { 
        nome: "Mikaela Boaretto",
        texto: "Maravilhosos! Eu fiquei sem por um período, pois estava me adaptando novamente com os cílios kkkk. Para piscar, é maravilhoso! Realmente, a sensação de que não estou com extensão. O volume atendeu todas as minhas expectativas, não ardeu quando abri os olhos e, depois, também não ardeu nada.",
        imagem: "/assets/img/feedbacks/Cliente07.avif", 
        rating: 5,
        source: "whatsapp",
        destaque: "Realmente, a sensação de que não estou com extensão."
    },
    { 
        nome: "@bii_rodriguees",
        texto: "Foca em cada detalhe!!! Cílios, sobrancelha, maquiagem, simplesmente peritaaa no q faz",
        imagem: "/assets/img/feedbacks/Cliente03.avif", 
        rating: 5,
        source: "instagram",
        destaque: "Foca em cada detalhe!!! Simplesmente perita no que faz."
    },
    { 
        nome: "@eder_sillva019",
        texto: "Sou seu fã 😍",
        imagem: "/assets/img/feedbacks/Cliente04.avif",
        rating: 5,
        source: "instagram",
        destaque: "Sou seu fã!"
    },
    { 
        nome: "@prettyboxbraids2",
        texto: "Muito boa, inclusive sdds do seu atendimento",
        imagem: "/assets/img/feedbacks/Cliente05.avif",
        rating: 5,
        source: "instagram",
        destaque: "Muito boa, inclusive sinto saudades do seu atendimento."
    },
    { 
        nome: "@bii_rodriguees",
        texto: "Desde quando vc começou sempre faço qualquer procedimento com vc!!! Impecável",
        imagem: "/assets/img/feedbacks/Cliente03.avif",
        source: "instagram",
        destaque: "Sempre faço qualquer procedimento com você! Impecável."
    },
    { 
        nome: "Mikaela Boaretto",
        texto: "Você arrasou! Amei tudo. O atendimento foi de suma importância, especialmente quando você me mostrou detalhadamente os tamanhos e como seria feito, atendendo ao contorno dos meus olhos e à minha satisfação. De atendimento, nota 10; procedimento, nota 10.",
        imagem: "/assets/img/feedbacks/Cliente07.avif",
        rating: 5,
        source: "whatsapp",
        destaque: "Atendimento, nota 10; procedimento, nota 10."
    },
    { 
        nome: "Aline Guimarães",
        texto: "Me senti tão confortável e bem acolhida por você! Por ser o meu primeiro atendimento, a gente fica com vergonha, mas você sabe como lidar com a cliente do início ao fim. Atenciosa com nosso conforto, bem-estar e trabalho impecável. Não poderia estar mais contente com a escolha da profissional.",
        imagem: "/assets/img/feedbacks/Cliente08.avif", 
        rating: 5,
        source: "whatsapp",
        destaque: "Me senti tão confortável e bem acolhida por você!"
    }
];

/* ========================================================================== */
/* ========================== DADOS: COMBOS ============================= */
/* ========================================================================== */

const combos = [
    {
        nome: "Combo Impacto Laminado",
        imagem: "assets/img/combos/Combo1.avif", 
        descricao: "A escolha nº 1 das clientes. Une o volume intenso dos cílios à modernidade das sobrancelhas laminadas. Ideal para quem quer acordar pronta e impactante.",
        servicos: ["Volume Brasileiro", "Brow Lamination", "Bônus: Hidratação"],
        destaque: true,
        tag: "O Mais Vendido ⭐"
    },
    {
        nome: "Combo Moana Perfeito",
        imagem: "assets/img/combos/Combo2.avif", 
        descricao: "O equilíbrio exato entre charme e naturalidade. Um olhar marcante com efeito molhado e sobrancelhas desenhadas para harmonizar com seu rosto.",
        servicos: ["Volume Moana (Wet)", "Design com Henna", "Spa dos Fios"],
        destaque: false
    },
    {
        nome: "Combo Lifting Total",
        imagem: "assets/img/combos/Combo3.avif",
        descricao: "Beleza natural potencializada. Curvamos seus cílios e alinhamos suas sobrancelhas mantendo a saúde dos fios. O verdadeiro 'Glow Up' sem artificios.",
        servicos: ["Lash Lifting", "Brow Lamination", "Nutrição Profunda"],
        destaque: false
    }
];

/* ========================================================================== */
/* ========================== DADOS: CURSOS ============================= */
/* ========================================================================== */

const cursos = [
    { 
        titulo: "Formação Lash Designer de Elite", 
        chamada: "Do zero à sua independência financeira. Aprenda a técnica clássica com segurança e comece a faturar na primeira semana.",
        imagem: "assets/img/cursos/lash.avif",
        tags: ["Iniciante", "Com Certificado"],
        conteudo: {
            "para_quem": "Mulheres que desejam liberdade de horário e um negócio lucrativo, mesmo sem nenhuma experiência na área da beleza.",
            "aprendizado": ["Anatomia e saúde ocular (Biossegurança)", "Mapping e Visagismo personalizado", "Técnica Fio a Fio Clássico perfeita", "Como conquistar as primeiras clientes", "Precificação e Marketing para Lashes"],
            "incluso": ["Kit Profissional Completo (Para 30 atendimentos)", "Apostila Didática Premium", "Certificado Válido em Todo Território Nacional", "Suporte Vitalício no WhatsApp"],
            "duracao": "Imersão de 2 Dias (Teoria + Prática em Modelos)"
        }
    },
    { 
        titulo: "Especializações em Tecnológicos", 
        chamada: "As técnicas mais pedidas nos studios. Aumente seu ticket médio e entregue o volume e a retenção que suas clientes sonham.",
        imagem: "assets/img/cursos/cilios.avif",
        tags: ["Avançado", "Alta Procura"],
        conteudo: {
            para_quem: "Lash Designers que já dominam o clássico e querem se destacar da concorrência oferecendo técnicas avançadas.",
            aprendizado: [
            "Domínio dos fios tecnológicos (Y e W)",
            "Capping e Cristalização para retenção máxima",
            "Efeitos de Visagismo: Delineado, Fox e Boneca",
            "Correção de simetria e mapeamento",
            "Fotografia estratégica para vender no Instagram"
            ],
            incluso: [
            "Apostila de Especialização Completa",
            "Certificado de Especialista",
            "Lista de Fornecedores Exclusivos",
            "Mentoria de Carreira"
            ],
            duracao: "1 Dia Intensivo (Hands-on)"
        }
    },
    { 
        titulo: "Master em Sobrancelhas & Henna", 
        chamada: "A porta de entrada para a estética. Domine a geometria facial e transforme olhares com a naturalidade da henna e design estratégico.",
        imagem: "assets/img/cursos/sobrancelhas.avif",
        tags: ["Iniciante", "Rentável"],
        conteudo: {
            "para_quem": "Quem busca uma profissão com baixo investimento inicial e alto retorno rápido.",
            "aprendizado": ["Mapeamento Facial com Linha (Geometry)", "Visagismo aplicado", "Colorimetria e preparação da Henna", "Design Masculino e Feminino", "Epilação egípcia (bônus)"],
            "incluso": ["Kit de Design Inicial", "Apostila Ilustrada", "Certificado Master Designer", "Estágio supervisionado (1 modelo)"],
            "duracao": "2 Dias (Teoria + Muita Prática)"
        }
    }
];

/* ========================================================================== */
/* ================= UTILITÁRIOS E FUNÇÕES AUXILIARES ==================== */
/* ========================================================================== */

/**
 * Debounce - Delay de execução para otimizar performance
 * @param {Function} func - Função a ser executada
 * @param {number} wait - Tempo de espera em ms
 */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/* ========================================================================== */
/* ===================== COMPONENTES: HEADER ========================== */
/* ========================================================================== */

/**
 * Inicializa cabeçalho responsivo com menu toggle
 */
function inicializarCabecalhoResponsivo() {
    const cabecalho = document.getElementById('cabecalho');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.cabecalho__link');
    const body = document.body;

    function toggleMenu() {
        body.classList.toggle('menu-aberto');
        const isOpen = body.classList.contains('menu-aberto');
        menuToggle.setAttribute('aria-label', isOpen ? 'Fechar Menu' : 'Abrir Menu');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    document.addEventListener('click', (e) => {
        const isClickInsideMenu = document.getElementById('cabecalho-nav').contains(e.target);
        const isClickOnToggle = menuToggle.contains(e.target);
        
        if (body.classList.contains('menu-aberto') && !isClickInsideMenu && !isClickOnToggle) {
            toggleMenu();
        }
    });

    function onScroll() {
        if (window.scrollY > 20) {
            cabecalho.classList.add('cabecalho--scrolled');
        } else {
            cabecalho.classList.remove('cabecalho--scrolled');
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
}

/* ========================================================================== */
/* =================== COMPONENTES: ANIMAÇÕES GLOBAIS =================== */
/* ========================================================================== */

/**
 * Anima elementos ao entrar na viewport
 */
function inicializarAnimacoesDeScroll() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (!("IntersectionObserver" in window) || animatedElements.length === 0) {
        animatedElements.forEach(element => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observerInstance.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => observer.observe(element));
}

/**
 * Botão WhatsApp flutuante que aparece ao scroll
 */
function inicializarBotaoWhatsApp() {
    const whatsappButton = document.querySelector('.whatsapp-button');
    const whatsappTooltip = document.querySelector('.whatsapp-tooltip');
    if (!whatsappButton || !whatsappTooltip) return;

    let tooltipShown = false;

    function toggleWhatsAppButton() {
        if (window.scrollY > 100) {
            whatsappButton.classList.add('visible');
            if (!tooltipShown) {
                whatsappTooltip.classList.add('visible');
                tooltipShown = true;
                setTimeout(() => {
                    whatsappTooltip.classList.add('fade-out');
                    setTimeout(() => whatsappTooltip.classList.remove('visible', 'fade-out'), 500);
                }, 2000);
            }
        } else {
            whatsappButton.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', debounce(toggleWhatsAppButton, 100));
    toggleWhatsAppButton();
}

/* ========================================================================== */
/* =================== SEÇÃO: CATÁLOGO (SERVIÇOS) ==================== */
/* ========================================================================== */

/**
 * Alterna entre abas de sobrancelhas e cílios
 */
function alternarServico(tipo) {
    const toggleContainer = document.querySelector('.toggle-container');
    const botoes = document.querySelectorAll('.toggle-item');
    
    toggleContainer.setAttribute('data-active', tipo);
    
    botoes.forEach(btn => btn.classList.remove('ativo'));
    if (tipo === 'sobrancelhas') {
        botoes[0].classList.add('ativo');
    } else {
        botoes[1].classList.add('ativo');
    }

    mostrarServicos(tipo);
}

/**
 * Renderiza cards de serviços no catálogo
 */
function mostrarServicos(tipo) {
    const container = document.getElementById('catalogo-carrossel');
    const botoes = document.querySelectorAll('.toggle-item');
    const toggleContainer = document.querySelector('.toggle-container');
    
    if (!container || !botoes.length || !toggleContainer) return;

    botoes.forEach(btn => btn.classList.remove('ativo'));
    if (tipo === 'sobrancelhas') {
        botoes[0].classList.add('ativo');
        toggleContainer.setAttribute('data-active', 'sobrancelhas');
    } else {
        botoes[1].classList.add('ativo');
        toggleContainer.setAttribute('data-active', 'cilios');
    }

    const lista = tipo === 'sobrancelhas' ? servicosSobrancelhas : servicosCilios;

    container.innerHTML = '';
    container.style.opacity = 0;
    setTimeout(() => { container.style.opacity = 1; }, 200);

    lista.forEach(servico => {
        const imgMobile = servico.imagem.replace('.avif', '_mobile.avif');
        const textoZap = `Olá, Nayra! Gostaria de saber mais sobre: ${servico.titulo}`;
        const linkZap = (typeof CONFIG_SITE !== 'undefined') 
                        ? CONFIG_SITE.gerarLinkZap(textoZap) 
                        : `https://wa.me/5519999670165`;

        const tagsHTML = servico.caracteristicas.slice(0, 2).map(tag => 
            `<span class="tag-overlay">${tag}</span>`
        ).join('');

        const card = document.createElement('div');
        card.className = 'catalogo__card';
        
        card.innerHTML = `
            <div class="catalogo__imagem-box">
                <img 
                    src="${servico.imagem}" 
                    srcset="${imgMobile} 480w, ${servico.imagem} 800w"
                    sizes="(max-width: 768px) 90vw, 350px"
                    alt="${servico.titulo}" 
                    loading="lazy"
                    width="350"
                    height="260"
                >
                <div class="tags-container-overlay">
                    ${tagsHTML}
                </div>
            </div>

            <div class="catalogo__card__conteudo">
                <h3 class="catalogo__card__titulo">${servico.titulo}</h3>
                <p class="catalogo__card__descricao">${servico.descricao}</p>
                
                <a href="${linkZap}" target="_blank" class="botao-principal catalogo-btn" data-name="${servico.titulo}"       
                    data-category="Serviço">>
                    AGENDAR HORÁRIO
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * Navegação por setas no carrossel
 */
function inicializarNavegacaoCarrossel() {
    const track = document.getElementById('catalogo-carrossel');
    const btnPrev = document.querySelector('.carrossel-btn.prev');
    const btnNext = document.querySelector('.carrossel-btn.next');

    if (!track || !btnPrev || !btnNext) return;

    const scrollAmount = 360;

    btnPrev.addEventListener('click', () => {
        track.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    btnNext.addEventListener('click', () => {
        track.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}

/**
 * Destaca o card mais centralizado do carrossel
 */
function aplicarSnapHighlight() {
    const container = document.getElementById("catalogo-carrossel");
    if (!container) return;

    const destacarCardCentral = () => {
        const cards = container.querySelectorAll(".catalogo__card");
        if (cards.length === 0) return;
        const containerCenter = container.getBoundingClientRect().left + container.getBoundingClientRect().width / 2;

        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distancia = Math.abs(containerCenter - cardCenter);
            card.classList.toggle("destacado", distancia < (cardRect.width / 2) * 0.8);
        });
    };
    
    container.onscroll = () => window.requestAnimationFrame(destacarCardCentral);
    window.requestAnimationFrame(destacarCardCentral);
}

/**
 * Permite arrastar carrossel com mouse
 */
function inicializarDragToScroll(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    let isDown = false, startX, scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    
    const stopDrag = () => { isDown = false; container.classList.remove('active'); };
    container.addEventListener('mouseleave', stopDrag);
    container.addEventListener('mouseup', stopDrag);
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
}

/* ========================================================================== */
/* =================== SEÇÃO: COMBOS ================================ */
/* ========================================================================== */

/**
 * Renderiza cards de combos promocionais
 */
function renderizarCombos() {
    const container = document.querySelector('.combos__container');
    if (!container) return;
    
    container.innerHTML = '';

    combos.forEach(combo => {
        const imgMobile = combo.imagem.replace('.avif', '_mobile.avif');
        const cardDiv = document.createElement('div');
        cardDiv.className = 'combo-card';
        if (combo.destaque) cardDiv.classList.add('destaque');

        const subtextoValor = combo.destaque ? "Melhor Custo-Benefício" : "Condição Especial";
        const textoZap = `Olá, Nayra! Amei o ${combo.nome} e gostaria de aproveitar essa condição especial.`;
        const linkZap = CONFIG_SITE.gerarLinkZap(textoZap);

        cardDiv.innerHTML = `
            ${combo.destaque ? `<div class="combo-card__badge">${combo.tag || 'VIP'}</div>` : ''}
            
            <div class="combo-card__imagem">
                <img 
                    src="${combo.imagem}" 
                    srcset="${imgMobile} 480w, ${combo.imagem} 800w"
                    sizes="(max-width: 768px) 90vw, 350px"
                    alt="${combo.nome}" 
                    loading="lazy"
                    width="350"
                    height="240"
                >
            </div>

            <div class="combo-card__conteudo">
                <h3 class="combo-card__title">${combo.nome}</h3>
                <p class="combo-card__description">${combo.descricao}</p>

                <div class="combo-card__divisor"><span>♦</span></div>

                <ul class="combo-card__servicos">
                    ${combo.servicos.map(servico => `<li><i class="fas fa-check-circle"></i> ${servico}</li>`).join('')}
                </ul>

                <p style="font-size: 0.8rem; color: var(--cor-vinho); margin-bottom: 5px; font-weight: bold;">
                    ${subtextoValor}
                </p>

                <a href="${linkZap}" class="combo-card__cta" target="_blank" data-name="${combo.nome}"
                    data-category="Combo">>
                    ${combo.destaque ? 'Quero Ser VIP' : 'Agendar Combo'}
                </a>
            </div>
        `;
        container.appendChild(cardDiv);
    });
}

/* ========================================================================== */
/* =================== SEÇÃO: CURSOS ================================ */
/* ========================================================================== */

/**
 * Renderiza cards de cursos
 */
function renderizarCursos() {
    const container = document.getElementById('cursos-lista');
    if (!container) return;
    
    container.innerHTML = '';

    cursos.forEach(curso => {
        const imgMobile = curso.imagem.replace('.avif', '_mobile.avif');
        const cardDiv = document.createElement('div');
        cardDiv.className = 'curso-card';

        const tagsHTML = curso.tags ? curso.tags.map(tag => `<span class="curso-tag">${tag}</span>`).join('') : '';
        const textoZap = `Olá, Nayra! Quero saber próximas turmas do ${curso.titulo}`;
        const linkZap = CONFIG_SITE.gerarLinkZap(textoZap);
        const textoZapInscricao = `Quero me inscrever no curso ${curso.titulo}`;
        const linkZapInscricao = CONFIG_SITE.gerarLinkZap(textoZapInscricao);

        cardDiv.innerHTML = `
            <div class="curso-card__preview">
                <div class="curso-card__imagem-container">
                    <img 
                        src="${curso.imagem}" 
                        srcset="${imgMobile} 480w, ${curso.imagem} 800w"
                        sizes="(max-width: 768px) 100vw, 240px"
                        alt="Curso ${curso.titulo}" 
                        class="curso-card__imagem" 
                        loading="lazy"
                        width="240"
                        height="180"
                    >
                </div>

                <div class="curso-card__info">
                    <div class="curso-tags-header">${tagsHTML}</div>
                    <h3>${curso.titulo}</h3>
                    <p>${curso.chamada}</p>
                    
                    <div class="card-botoes-container">
                        <button class="curso-card__toggle-btn">
                            Ver Grade Completa <i class="fas fa-chevron-down" style="margin-left:5px"></i>
                        </button>
                        
                        <a href="${linkZap}" target="_blank" class="botao-principal" style="padding: 0.8rem 1.5rem; font-size: 0.85rem;" data-name="${curso.titulo}"
   data-category="Curso">>
                            Falar com a Professora
                        </a>
                    </div>
                </div>
            </div>

            <div class="curso-card__detalhes">
                <div class="detalhes-wrapper">
                    <div class="detalhes__grid">
                        <div class="detalhe-bloco">
                            <h4><i class="fas fa-bullseye"></i> Para Quem é?</h4>
                            <p style="font-size:0.95rem; line-height:1.5; color:#555;">${curso.conteudo.para_quem}</p>
                        </div>
                        <div class="detalhe-bloco">
                            <h4><i class="fas fa-book-open"></i> O Que Você Vai Aprender</h4>
                            <ul>${curso.conteudo.aprendizado.map(item => `<li><i class="fas fa-check"></i> ${item}</li>`).join('')}</ul>
                        </div>
                        <div class="detalhe-bloco ouro">
                            <h4><i class="fas fa-gift"></i> Incluso no Investimento</h4>
                            <ul>${curso.conteudo.incluso.map(item => `<li><i class="fas fa-star"></i> ${item}</li>`).join('')}</ul>
                        </div>
                        <div class="detalhe-bloco">
                            <h4><i class="fas fa-clock"></i> Duração</h4>
                            <p style="font-size: 1.1rem; color: var(--cor-vinho); font-weight: bold;">${curso.conteudo.duracao}</p>
                        </div>
                    </div>
                    <div class="detalhes__cta-final">
                        <p style="margin-bottom: 1rem; font-size: 0.9rem; color: #666;">
                            <i class="fas fa-exclamation-circle" style="color:var(--cor-dourado)"></i> Vagas limitadas.
                        </p>
                        <a href="${linkZapInscricao}" class="botao-principal" target="_blank" data-name="${curso.titulo}"
   data-category="Curso">>
                            Garantir Minha Vaga
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(cardDiv);
    });
}

/**
 * Torna cards de cursos expansíveis
 */
function inicializarCardsDeCursoExpansiveis() {
    const container = document.getElementById('cursos-lista');
    if(!container) return;

    const novoContainer = container.cloneNode(true);
    container.parentNode.replaceChild(novoContainer, container);

    novoContainer.addEventListener('click', (e) => {
        const botao = e.target.closest('.curso-card__toggle-btn');
        
        if (botao) {
            const card = botao.closest('.curso-card');
            card.classList.toggle('expandido');

            if (card.classList.contains('expandido')) {
                botao.innerHTML = 'Fechar Grade <i class="fas fa-chevron-up" style="margin-left:5px"></i>';
            } else {
                botao.innerHTML = 'Ver Grade Completa <i class="fas fa-chevron-down" style="margin-left:5px"></i>';
            }
        }
    });
}

/* ========================================================================== */
/* =================== SEÇÃO: FEEDBACKS ============================== */
/* ========================================================================== */

/**
 * Renderiza cards de feedbacks de clientes
 */
function popularFeedbacks() {
    const list = document.getElementById('feedbacks-list');
    if (!list) return;

    list.innerHTML = '';

    slidesFeedbacks.forEach(slide => {
        const listItem = document.createElement('li');
        
        let estrelasHTML = Array(slide.rating).fill('<i class="fas fa-star"></i>').join('');
        
        let sourceIcon = '';
        if (slide.source === 'instagram') sourceIcon = '<i class="fab fa-instagram" style="color:#E1306C"></i>';
        if (slide.source === 'whatsapp') sourceIcon = '<i class="fab fa-whatsapp" style="color:#25D366"></i>';
        if (slide.source === 'google') sourceIcon = '<i class="fab fa-google" style="color:#4285F4"></i>';

        listItem.innerHTML = `
            <div class="card-feedback">
                <div class="card-feedback__header">
                    <img src="${slide.imagem}" alt="Cliente ${slide.nome}" onerror="this.src='assets/img/placeholder-avatar.png'">
                    
                    <div class="user-info">
                        <strong>${slide.nome}</strong>
                        <span class="verified-badge"><i class="fas fa-check-circle"></i> Cliente Verificada</span>
                    </div>
                    
                    <div class="source" title="Avaliação via ${slide.source}">${sourceIcon}</div>
                </div>

                <div class="rating-source">
                    <div class="estrelas">${estrelasHTML}</div>
                </div>

                <div>
                    <p class="frase-destaque">"${slide.destaque}"</p>
                    <p class="texto-completo">${slide.texto}</p>
                </div>
            </div>
        `;
        list.appendChild(listItem);
    });

    inicializarCarrosselInfinito();
}

/**
 * Carrossel infinito de feedbacks
 */
function inicializarCarrosselInfinito() {
    const scroller = document.querySelector(".scroller");
    if (!scroller) return;

    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
    });
}

/* ========================================================================== */
/* =================== SEÇÃO: ANIMAÇÕES ESPECIAIS ==================== */
/* ========================================================================== */

/**
 * Anima cards da seção "Propósito"
 */
function inicializarAnimacaoProposito() {
    const secaoProposito = document.getElementById('proposito');
    
    if (secaoProposito) {
        const cards = secaoProposito.querySelectorAll('.proposito-v2__card');

        const observador = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    cards.forEach(card => {
                        card.classList.add('borda-animada');
                        card.classList.add('conteudo-revelado');
                    });
                    observador.unobserve(secaoProposito);
                }
            });
        }, { threshold: 0.3 });

        observador.observe(secaoProposito);
    }
}

/* ========================================================================== */
/* =================== LINKS E INFORMAÇÕES DINÂMICAS ================== */
/* ========================================================================== */

/**
 * Atualiza links estáticos baseado em CONFIG_SITE
 */
function atualizarLinksEstaticos() {
    const linksZap = document.querySelectorAll('.js-link-whatsapp');
    linksZap.forEach(link => {
        const msgPersonalizada = link.getAttribute('data-msg') || "Olá! Gostaria de agendar um horário.";
        link.href = CONFIG_SITE.gerarLinkZap(msgPersonalizada);
    });

    const linksInsta = document.querySelectorAll('.js-link-instagram');
    linksInsta.forEach(link => {
        link.href = CONFIG_SITE.social.instagram;
    });

    const textosFone = document.querySelectorAll('.js-texto-telefone');
    textosFone.forEach(el => {
        el.textContent = CONFIG_SITE.enderecos.telefone_visivel;
    });
    
    const btnWaze = document.querySelector('.btn-rota.waze');
    const btnGoogle = document.querySelector('.btn-rota.google');
    
    if(btnWaze) btnWaze.href = CONFIG_SITE.social.waze;
    if(btnGoogle) btnGoogle.href = CONFIG_SITE.social.maps_google;
}

/**
 * Lazy load do mapa (carrega apenas quando visível)
 */
document.addEventListener("DOMContentLoaded", function() {
    const lazyMap = document.querySelector('.lazy-map');
    
    if (lazyMap) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    iframe.src = iframe.getAttribute('data-src');
                    observer.unobserve(iframe);
                }
            });
        }, { rootMargin: "200px" });
        
        observer.observe(lazyMap);
    }
});

/* ========================================================================== */
/* =================== RASTREAMENTO FACEBOOK (MASTER) ===================== */
/* ========================================================================== */

document.addEventListener('click', function(e) {
    const link = e.target.closest('a');

    // Se não é link ou não tem href, ignora
    if (!link || !link.href) return;

    // Pega os dados da etiqueta (se existirem)
    const nomeItem = link.getAttribute('data-name') || 'Item Geral';
    const categoriaItem = link.getAttribute('data-category') || 'Geral';

    // --- CENÁRIO 1: WHATSAPP (Contato) ---
    if (link.href.includes('wa.me') || link.href.includes('whatsapp.com')) {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Contact', {
                content_name: nomeItem,
                content_category: categoriaItem
            });
            console.log(`✅ Pixel (Contact): ${categoriaItem} - ${nomeItem}`);
        }
    }
    
    // --- CENÁRIO 2: MAPAS (Localização) ---
    // Verifica se o link tem waze, maps.google ou google.com/maps
    else if (link.href.includes('waze.com') || link.href.includes('maps')) {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'FindLocation', {
                content_name: nomeItem,     // Vai mostrar "Waze" ou "Google Maps"
                content_category: 'Rota'
            });
            console.log(`📍 Pixel (FindLocation): ${nomeItem}`);
        }
    }
});

/* ========================================================================== */
/* ================= INICIALIZAÇÃO GERAL (DOM READY) ================== */
/* ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Componentes básicos
    inicializarCabecalhoResponsivo();
    inicializarAnimacoesDeScroll();
    inicializarBotaoWhatsApp();
    atualizarLinksEstaticos();
    inicializarNavegacaoCarrossel();
    
    // Catálogo de serviços
    if (document.getElementById('catalogo-carrossel')) {
        mostrarServicos("sobrancelhas");
        inicializarDragToScroll('.catalogo__carrossel');
    }

    // Combos
    if (document.querySelector('.combos__container')) {
        renderizarCombos();
    }
    
    // Cursos
    if (document.getElementById('cursos-lista')) {
        renderizarCursos();
        inicializarCardsDeCursoExpansiveis();
    }
    
    // Feedbacks
    if (document.getElementById('feedbacks-list')) {
        popularFeedbacks();
    }

    // Animações especiais
    inicializarAnimacaoProposito();
});
