<?php

namespace App\Models\Persons;

use App\Core\MasterModel;
use App\Interfaces\Persons\PersonsInterface;
use Illuminate\Http\Request;
use Exception;
use App\Models\Persons\BillingPayment;
use App\Models\Persons\InsertPersons;

class Customers extends MasterModel implements PersonsInterface
{
    public function createPerson(Request $request)
    {
        try {
            $company    = $this->getCompany();
            $data       = [
                'address'           => $request->address,
                'city_name'         => $request->city_name,
                'company_name'      => $request->company_name,
                'country_id'        => $request->country_id,
                'currency_id'       => $request->currency_id,
                'dni'               => $request->dni,
                'email'             => $request->email,
                'full_name'         => $request->full_name,
                'last_name'         => $request->last_name,
                'location'          => $request->location,
                'mobile'            => $request->mobile,
                'names'             => $request->names,
                'is_secondary'      => $request->is_secondary ?? false,
                'person_type_id'    => 1,
                'phone'             => $request->phone,
                'postal_code'       => $request->postal_code,
                'state_name'        => $request->state_name,
                'title'             => $request->title,
                'web'               => $request->web,
                'state'             => 1,
            ];
            return InsertPersons::insert($request, $data, $company);
        } catch (Exception $e) {
            return $this->getErrorResponse($e->getMessage());
        }
    }

    public function readPerson(Request $request)
    {
        try {
            $company= $this->getCompany();
            $start  = $request->start;
            $limit  = $request->limit;
            $uid    = $request->uid;
            $query  = $request->input('query');
            if($company){
                $db     = $company->database_name.'.';
                $limit  = isset($limit) ? $limit : 20;
                $start  = isset($start) ? $start : 0;
                $where  = "a.state = 1 and a.person_type_id = 1";
                if(isset($uid)){
                    $where  = "a.id={$uid}";
                }
                $sqlStatement =
                    "SELECT a.*, b.description, c.tax_rate_id, c.means_payment_id, c.time_limit_id, c.sales_term,
                    c.accounting_account_id, c.initial_balance, c.initial_date, d.parent_id, d.child_id
                    FROM {$db}persons a
                    LEFT JOIN {$db}type_persons AS b ON a.person_type_id = b.id
                    LEFT JOIN {$db}billing_payment AS c ON c.customer_id = a.id
                    LEFT JOIN {$db}secondary_persons AS d ON d.child_id = a.id";
                $sqlStatementCount =
                    "SELECT count(a.id) as total
                     FROM {$db}persons a
                     LEFT JOIN {$db}type_persons b ON a.person_type_id = b.id ";

                $searchFields = ['a.full_name', 'a.dni', 'a.company_name', 'a.names', 'a.last_name'];
                return $this->sqlQuery($sqlStatement, $sqlStatementCount, $searchFields ,$query, $start, $limit, $where, 'a.full_name');
            }else{
                return $this->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            return $this->getErrorResponse($e->getMessage());
        }
    }

    public function updatePerson($id, Request $request)
    {
        try {
            $records    = json_decode($request->input('records'));
            $ip         = $request->ip();
            $company    = $this->getCompany();
            if($company){
                $db             = "{$company->database_name}.";

                BillingPayment::createOrUpdate($id, $records, $company);
                SecundaryPersons::createOrUpdate($id, $records, $company);

                $table          ="{$db}persons";
                $records->id    = $id;
                return   $this->updateData($records,$table, $ip);
            }else{
                return $this->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            return $this->getErrorResponse($e->getMessage());
        }
    }

    public function deletePerson($id, Request $request)
    {
        try {
            $ip         = $request->ip();
            $company    = $this->getCompany();
            if($company){
                $table          = "{$company->database_name}.persons";
                $records = (object)[
                    'id'    => $id,
                    'state' => 2
                ];
                return   $this->updateData($records,$table, $ip);
            }else{
                return $this->getErrorResponse('Error en el servidor.');
            }
        } catch (Exception $e) {
            return $this->getErrorResponse($e->getMessage());
        }
    }
}
