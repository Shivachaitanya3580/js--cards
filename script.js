document.getElementById('see-more-btn').addEventListener('click', () => {
    
    const newCards = [
        { title: 'Card 1', description: 'This is card 1.' },
        { title: 'Card 2', description: 'This is card 2.' },
        { title: 'Card 3', description: 'This is card 3.' },
        { title: 'Card 4', description: 'This is card 4.' }
    ];

   
    document.getElementById('see-more-btn').disabled = true;
    
  
    setTimeout(() => {
        const container = document.getElementById('card-container');

        
        newCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
                <h3>${card.title}</h3>
                <p>${card.description}</p>
            `;
            container.appendChild(cardElement);
        });

     
        document.getElementById('see-more-btn').disabled = false;
    }, 2000); // 2-second delay
});
