<?php

namespace App\Models\Persons;

use App\Models\Persons\Customers;
use Illuminate\Http\Request;
use Exception;

class Providers extends Customers
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
                'person_type_id'    => 2,
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
                $where  = "a.state = 1 and a.person_type_id = 2";
                if(isset($uid)){
                    $where  = "a.id={$uid}";
                }
                $sqlStatement =
                    "SELECT a.*, b.description, c.tax_rate_id, c.means_payment_id, c.time_limit_id, c.sales_term,
                    c.accounting_account_id, c.initial_balance, c.initial_date
                    FROM {$db}persons a
                    LEFT JOIN {$db}type_persons b ON a.person_type_id = b.id
                    LEFT JOIN {$db}billing_payment AS c ON c.customer_id = a.id";
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


}
