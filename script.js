document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');

    if (!window.dictionaryData) {
        console.error('Dictionary data not found!');
        return;
    }

    // Render page content
    window.dictionaryData.forEach((category, index) => {
        const indexStr = String(index + 1).padStart(2, '0');

        const section = document.createElement('section');
        section.id = category.id;
        section.className = 'category-wrapper';

        const termsHtml = category.terms.map(term => `
            <div class="term-block">
                <span class="term-name">${term.name}</span>
                <p class="term-desc">${term.desc}</p>
            </div>
        `).join('');

        section.innerHTML = `
            <div class="category-left">
                <a href="#${category.id}" class="category-link">
                    <span class="index-badge">${indexStr}</span>
                    <h2 class="section-title">${category.title}</h2>
                </a>
                <div class="title-line"></div>
            </div>
            <div class="category-right">
                <p class="section-desc">${category.desc}</p>
                <div class="terms-grid">
                    ${termsHtml}
                </div>
            </div>
        `;

        mainContent.appendChild(section);
    });
});
