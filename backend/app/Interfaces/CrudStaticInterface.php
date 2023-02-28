<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface CrudStaticInterface {
    /**
     * Crear registros en la base de datos
     *
     * @param  mixed $request
     * @return Object
     */
    public static function create(Request $request);
    /**
     * Hacer una consulta en la base de datos
     *
     * @param  mixed $request
     * @return Object
     */
    public static function read(Request $request);
    /**
     * Actualizar los cambios en la base de datos
     *
     * @param  mixed $id
     * @param  mixed $request
     * @return Object
     */
    public static function update($id, Request $request);
    /**
     * Borrar registros en la base de datos
     *
     * @param  mixed $id
     * @param  mixed $request
     * @return Object
     */
    public static function delete($id, Request $request);
}
