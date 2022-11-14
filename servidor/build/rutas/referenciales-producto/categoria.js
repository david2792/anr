"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pacientes_control_1 = require("../../controlador/referenciales-personas/pacientes_control");
class CategoriaRutas {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/listar', pacientes_control_1.votocontrol.listarUno);
    }
}
const categoriaRutas = new CategoriaRutas();
exports.default = categoriaRutas.router;
