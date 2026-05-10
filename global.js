(() => {
    const tabs = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {
        tab.addEventListener('click', showTab);
    });

    function showTab(event) {
        console.log('Tab clicada:', event.target.dataset.tab);
        // Esconde todas as tabs do exemplo atual
        const example = event.target.closest('.code-tabs');
        const tabContents = example.querySelectorAll('.tab-content');
        const tabBtns = example.querySelectorAll('.tab-btn');

        tabContents.forEach(content => content.classList.remove('active'));
        tabBtns.forEach(btn => btn.classList.remove('active'));

        // Mostra a tab clicada
        const targetTab = example.querySelector(`#${event.target.dataset.tab}`);
        const targetBtn = event.target;

        targetTab.classList.add('active');
        targetBtn.classList.add('active');
    }

    setTimeout(() => {
        if (window.Prism) {
            console.log('Highlighting code blocks with Prism...');
            Prism.highlightAll();
        }
    }, 10);
})();