const fs = require('fs');

const fileName = 'example.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Помилка під час зчитування файлу:', err);
        return;
    }
    const characters = data.split('');
    
    for (let i = 2; i < characters.length; i += 3) {
        if (/[a-z]/.test(characters[i])) {
            characters[i] = characters[i].toUpperCase();
        }
    }

    const modifiedText = characters.join('');

    console.log('Модифікований текст:', modifiedText);
});
