const express = require('express')
const router =  express.Router()
const categoriasCtrl = require('../controllers/categoriasCtrl')


router.get('/', categoriasCtrl.categoriaListar)

router.get('/:id',categoriasCtrl.categoriaObtener)

router.post('/', categoriasCtrl.categoriaGuardar )

router.put('/',categoriasCtrl.categoriaActualizar)

router.delete('/:id',categoriasCtrl.categoriaEliminar)

module.exports = router