const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

// Configuração do multer para salvar as imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Rota para o upload de imagens
app.post('/upload', upload.single('carImage'), (req, res) => {
    res.send(`Arquivo enviado: <a href="/uploads/${req.file.filename}">${req.file.filename}</a>`);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
