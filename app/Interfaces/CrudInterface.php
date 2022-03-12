<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

Interface CrudInterface {
    /**
     * Crear registros en la base de datos
     *
     * @param  mixed $request
     * @return Object
     */
    public function create(Request $request);
    /**
     * Hacer una consulta en la base de datos
     *
     * @param  mixed $request
     * @return Object
     */
    public function read(Request $request);
    /**
     * Actualizar los cambios en la base de datos
     *
     * @param  mixed $id
     * @param  mixed $request
     * @return Object
     */
    public function update($id, Request $request);
    /**
     * Borrar registros en la base de datos
     *
     * @param  mixed $id
     * @param  mixed $request
     * @return Object
     */
    public function delete($id, Request $request);
}
