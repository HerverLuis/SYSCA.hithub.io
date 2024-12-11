function toggleSubmenu(submenuId, buttonId) {
    // Ocultar todos los submenús
    document.querySelectorAll('.submenu').forEach(menu => menu.style.display = 'none');
    
    // Mostrar u ocultar el submenú correspondiente
    const submenu = document.getElementById(submenuId);
    const button = document.getElementById(buttonId);

    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
        // Calcula la posición del submenú debajo del botón
        const buttonRect = button.getBoundingClientRect();
        submenu.style.top = `${buttonRect.bottom + window.scrollY}px`;
        submenu.style.left = `${buttonRect.left + window.scrollX}px`;
    }
}

function toggleSection(sectionId) {
    // Ocultar todas las secciones y submenús
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.querySelectorAll('.submenu').forEach(menu => menu.style.display = 'none');
    
    // Mostrar la sección correspondiente
    document.getElementById(sectionId).style.display = 'block';
}

function showContent(contentId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    // Mostrar la sección seleccionada
    document.getElementById(contentId).style.display = 'block';
    
    // Ocultar todos los submenús
    document.querySelectorAll('.submenu').forEach(menu => menu.style.display = 'none');
}
