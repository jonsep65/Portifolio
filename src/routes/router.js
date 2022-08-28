const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).render('index', {title: "Home Page", path: "/"});
});
router.get('/contato', (req, res) => {
    return res.status(200).render('contato', {title: "Contato", path: "/contato"});
});
router.get('/projetos', (req, res) => {
    return res.status(200).render('projetos', {title: "Projetos", path: "/projetos"});
});
router.get('/formacao-academica', (req, res) => {
    return res.status(200).render('formacao-academica', {title: "Formação Acadêmica", path: "/formacao-academica"});
});

module.exports = router;