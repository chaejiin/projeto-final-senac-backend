document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica da Barra de Busca ---
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    // Mapeamento das matérias para suas respectivas páginas.
    // As chaves estão em minúsculo e sem acentos para facilitar a busca.
    const subjectPages = {
        'matematica': 'matematica.html',
        'logica de programacao': 'logica-programacao.html',
        'portugues': 'portugues.html',
        'espanhol': 'espanhol.html'
    };

    searchForm.addEventListener('submit', (event) => {
        // Previne o comportamento padrão do formulário de recarregar a página
        event.preventDefault(); 
        
        // Pega o valor digitado, remove espaços em branco e converte para minúsculo
        const query = searchInput.value.trim().toLowerCase();
        
        // Normaliza o texto para remover acentos (ex: "matemática" vira "matematica")
        const normalizedQuery = query.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (subjectPages[normalizedQuery]) {
            // Se a matéria existir no nosso mapeamento, redireciona para a página
            window.location.href = subjectPages[normalizedQuery];
        } else {
            // Se não encontrar, avisa o usuário
            alert('Matéria não encontrada. Por favor, tente um dos cursos disponíveis.');
            searchInput.focus(); // Coloca o foco de volta na barra de busca
        }
    });


    // --- Lógica do Modal de Login ---
    const loginIcon = document.getElementById('login-icon');
    const loginModal = document.getElementById('login-modal');
    const closeModalButton = document.getElementById('close-modal');

    loginIcon.addEventListener('click', () => {
        loginModal.classList.remove('modal--hidden');
    });

    closeModalButton.addEventListener('click', () => {
        loginModal.classList.add('modal--hidden');
    });

    loginModal.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.classList.add('modal--hidden');
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !loginModal.classList.contains('modal--hidden')) {
            loginModal.classList.add('modal--hidden');
        }
    });


    // --- Lógica do Botão de Contato ---
    const contactButton = document.getElementById('contact-button');
    contactButton.addEventListener('click', () => {
        const phoneNumber = '5511999999999'; // Substitua pelo número correto
        const message = 'Olá! Gostaria de saber mais sobre as aulas.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });


    // --- Lógica do Carrossel de Cursos ---
    const courses = ['Matemática', 'Lógica de Programação', 'Português', 'Espanhol'];
    const carouselContainer = document.querySelector('.courses__carousel');
    const prevButton = document.getElementById('prev-course');
    const nextButton = document.getElementById('next-course');

    let currentIndex = 0;

    function renderCourses() {
        carouselContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const courseIndex = (currentIndex + i) % courses.length;
            const courseName = courses[courseIndex];

            const card = document.createElement('div');
            card.className = 'courses__card';
            card.innerHTML = `
                <div class="courses__card-icon-container">
                     <img src="https://i.imgur.com/your-paperplane-icon.png" alt="Ícone de Avião de Papel" class="courses__card-icon">
                </div>
                <h3 class="courses__card-title">${courseName}</h3>
            `;
            carouselContainer.appendChild(card);
        }
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % courses.length;
        renderCourses();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + courses.length) % courses.length;
        renderCourses();
    });

    renderCourses();

});