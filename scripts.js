window.onload = function() {
    window.location.href = '#home';
};

document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById('name');
    const contactLink = document.getElementById('contact-link');

    // Animación simple para el nombre y el enlace de contacto
    if (nameElement && contactLink) {
        nameElement.style.opacity = 0;
        contactLink.style.opacity = 0;

        setTimeout(() => {
            nameElement.style.transition = 'opacity 1s';
            nameElement.style.opacity = 1;

            setTimeout(() => {
                contactLink.style.transition = 'opacity 1s';
                contactLink.style.opacity = 1;
            }, 500);
        }, 500);
    }

    // Desplazamiento suave con compensación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            // Actualiza la clase 'active' para el enlace actual
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mantener la línea azul debajo del enlace activo al cargar la página
    const currentHash = window.location.hash;
    if (currentHash) {
        const activeLink = document.querySelector(`a[href="${currentHash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});
