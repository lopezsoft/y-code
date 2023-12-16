<?php

namespace App\Services;

use App\Queries\DeleteTable;
use App\Queries\InsertTable;
use App\Queries\QueryTable;
use App\Queries\TableList;
use App\Queries\UpdateTable;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TableCrudService
{
    /**
     * @throws Exception
     */
    public static function create(Request $request): JsonResponse
    {
        $params  = self::extractParams($request);
        return InsertTable::insert($request, $params);
    }

    /**
     * @throws Exception
     */
    public static function read(Request $request): JsonResponse
    {
        $params = self::extractParams($request);
        return QueryTable::query($request, $params);
    }

    /**
     * @throws Exception
     */
    public static function update(Request $request, $id): JsonResponse
    {
        $request->uuid  = $id;
        $params         = self::extractParams($request);
        $records        = $params->records;
        return UpdateTable::update($request, $records, $params->table);
    }

    /**
     * @throws Exception
     */
    public static function delete(Request $request, $id): JsonResponse
    {
        $params = self::extractParams($request);
        return DeleteTable::delete($request, $id, $params->table);
    }

    protected static function extractParams(Request $request): object
    {
        try {
            $tbPrefix           = $request->input('tbPrefix') ?? null;
            $company            = null;
            $records            = json_decode($request->records) ?? null;
            $where              = json_decode($request->where, true) ?? [];
            $order              = json_decode($request->order, true) ?? [];
            $table              = TableList::getTable($tbPrefix);
            if ($records) {
                $records->company_id= $company->id;
            }
            return (object) [
                'table'     => $table,
                'company'   => $company,
                'records'   => $records,
                'where'     => $where,
                'order'     => $order,
            ];
        }catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
