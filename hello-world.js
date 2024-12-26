 //console.log("Hello world");

 /*const http = require('http');
 const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello Node !!!!</h1>\n');
    });
    server.listen(3000, () => {
        console.log('Server is running at http://localhost:3000/');
    });
 */

/*
 const fs = require('fs');
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
     
    if (err) {
     console.log('Erreur lors de la création du fichier:', err);
    return;
    }

console.log('Le fichier welcome.txt a été créé avec succès !');
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
     console.log('Erreur lors de la lecture du fichier:', err);
    return;
    }

console.log('Contenu du fichier:', data);
});

});*/

/*
const generatePassword = require('generate-password');
    function generateRandomPassword() {
        const password = generatePassword.generate({
            length: 12,
            numbers: true,
            symbols: true,
            uppercase: true,
            symbols: true,
            lowercase: true
        });
console.log('Mot de passe généré:', password);
}
generateRandomPassword();
*/

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'votre-email@gmail.com',
    pass: 'votre-mot-de-passe'
    }
    });

const mailOptions = {
    from: 'votre-email@gmail.com',
    to: 'votre-email@gmail.com',
    subject: 'Test envoi email avec Node.js',
    text: 'Ceci est un email envoyé avec Node.js'
    };

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
    console.log('Erreur lors de l\'envoi du mail:', err);
    }
    else {
        console.log('Email envoyé :', info.response);
    }
});

    
