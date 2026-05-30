document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('newsModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalFullContent');
    const closeModal = document.querySelector('.close-modal');
    const newsCards = document.querySelectorAll('.news-card');
    const menuLinks = document.querySelectorAll('.menu a');
    const searchInput = document.getElementById('mainSearch');

    // Función para abrir noticia
    newsCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const img = card.getAttribute('data-img');
            const content = card.getAttribute('data-content');

            modalTitle.innerText = title;
            modalImg.src = img;
            modalContent.innerHTML = `<p>${content}</p><br><p>Reporte extendido: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Cerrar modal
    closeModal.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // Filtros por categoría
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const filter = link.getAttribute('data-filter');
            
            newsCards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (filter === 'all' || cardCat === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Buscador en vivo
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        newsCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Efecto de scroll para el header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            header.style.padding = '15px 0';
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
});