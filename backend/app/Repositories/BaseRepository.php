<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Pagination\Paginator;

/**
 * ✅ BASE REPOSITORY
 * 
 * Patrón: Repository Pattern para abstracción de datos
 * Principio: DRY - Código reutilizable para todas las entidades
 * SOLID: Single Responsibility - Acceso a datos
 */
abstract class BaseRepository
{
    protected Model $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * Obtener todos los registros
     */
    public function all(): Collection
    {
        return $this->model->all();
    }

    /**
     * Obtener con paginación
     */
    public function paginate(int $perPage = 60): Paginator
    {
        return $this->model->paginate($perPage);
    }

    /**
     * Obtener por ID
     */
    public function find(int $id): ?Model
    {
        return $this->model->find($id);
    }

    /**
     * Obtener o fallar
     */
    public function findOrFail(int $id): Model
    {
        return $this->model->findOrFail($id);
    }

    /**
     * Crear registro
     */
    public function create(array $data): Model
    {
        return $this->model->create($data);
    }

    /**
     * Actualizar registro
     */
    public function update(int $id, array $data): bool
    {
        $model = $this->findOrFail($id);
        return $model->update($data);
    }

    /**
     * Eliminar registro
     */
    public function delete(int $id): bool
    {
        return $this->findOrFail($id)->delete();
    }

    /**
     * Búsqueda simple por campos
     */
    public function search(string $field, mixed $value): Collection
    {
        return $this->model->where($field, $value)->get();
    }

    /**
     * Obtener con relaciones
     */
    public function with(array $relations): Collection
    {
        return $this->model->with($relations)->get();
    }

    /**
     * Contar registros
     */
    public function count(): int
    {
        return $this->model->count();
    }

    /**
     * Existe el registro
     */
    public function exists(int $id): bool
    {
        return $this->model->where('id', $id)->exists();
    }
}
