<?php

namespace Controllers;

use MVC\Router;

class MenuController {

    public static function index(Router $router) {
        $router->render('menu/index', []);
    }

    // Agrega aquí más métodos para manejar funcionalidad específica de la página de menú si es necesario

}

