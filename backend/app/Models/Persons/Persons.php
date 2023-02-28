<?php

namespace App\Models\Persons;

use App\Interfaces\Persons\PersonsInterface;
use Illuminate\Http\Request;

class Persons
{
    /**
     * Crea una nueva persona en la base de datos
     *
     * @param  mixed $request
     * @param  mixed $person Instancia de la clase que implementa la Interface PersonsInterface
     * @return JSON
     */
    public static function create(Request $request, PersonsInterface $person)
    {
        return $person->createPerson($request);
    }

    /**
     * Realiza una consulta en la base de datos
     *
     * @param  mixed $request
     * @param  mixed $person Instancia de la clase que implementa la Interface PersonsInterface
     * @return JSON
     */
    public static function read(Request $request,  PersonsInterface $person)
    {
        return $person->readPerson($request);
    }

    /**
     * update
     *
     * @param  mixed $id Identificador de la persona
     * @param  mixed $request
     * @param  mixed $person Instancia de la clase que implementa la Interface PersonsInterface
     * @return JSON
     */
    public static function update($id, Request $request,  PersonsInterface $person)
    {
        return $person->updatePerson($id, $request);
    }

    /**
     * delete
     *
     * @param  mixed $id Identificador de la
     * @param  mixed $request
     * @param  mixed $person Instancia de la clase que implementa la Interface PersonsInterface
     * @return JSON
     */
    public static function delete($id, $request,  PersonsInterface $person)
    {
        return $person->deletePerson($id, $request);
    }
}
