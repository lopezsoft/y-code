<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Core\MasterModel;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Support\Facades\Storage;
use App\Models\Companies\CreateDB;

class CompanyController extends Controller
{
	public function createDb(Request $request)
	{
		return CreateDB::create($request);
	}

	public function createCompany(Request $request)
	{
		DB::beginTransaction();
		try {
			$records    = $request;
			$NotAssig   = NULL;

			$user       = auth()->user();
			$ip         = $request->ip();
			$model      = new MasterModel();
			$company    = $model->getCompany();
			if ($company) {

				$dataCompany    = [
					'country_id'            => $records->country_id ?? 113,
					'currency_id'           => $records->currency_id    ?? 4,
					'identity_document_id'  => $records->identity_document_id ?? 3,
					'type_organization_id'  => $records->type_organization_id ?? 1,
					'number_employees'      => $records->number_employees ?? 1,
					'company_name'          => $records->company_name ?? $NotAssig,
					'dni'                   => $records->dni,
					'dv'                    => $records->dv ?? 0,
					'address'               => $records->address ?? $NotAssig,
					'location'              => $records->location ?? $NotAssig,
					'postal_code'           => $records->postal_code ?? '',
					'mobile'                => $records->mobile ?? '',
					'phone'                 => $records->phone  ?? '',
					'email'                 => $records->email ?? '',
					'web'                   => $records->web ?? ''
				];

				$table      = $company->database_name . ".company";

				$query        = DB::table($table)->first();

				if (!$query) {
					$companyId    = DB::table($table)->insertGetId($dataCompany);
					$model->audit($user->id, $ip, $table, 'UPDATE', $dataCompany);
					$dataCompany       = [
						'id'                    => $companyId,
						'country_id'            => $records->country_id ?? 113,
						'currency_id'           => $records->currency_id    ?? 4,
						'identity_document_id'  => $records->identity_document_id ?? 3,
						'type_organization_id'  => $records->type_organization_id ?? 1,
						'company_name'          => $records->company_name ?? $NotAssig,
						'number_employees'      => $records->number_employees ?? 1,
						'dni'                   => $records->dni,
						'dv'                    => $records->dv ?? 0,
						'address'               => $records->address ?? $NotAssig,
						'location'              => $records->location ?? $NotAssig,
						'postal_code'           => $records->postal_code ?? '',
						'mobile'                => $records->mobile ?? '',
						'phone'                 => $records->phone  ?? '',
						'email'                 => $records->email ?? '',
						'web'                   => $records->web ?? ''
					];
				}

				$data       = [
					'folder_name'           => $company->id
				];

				DB::table('companies')->where('id', $company->id)->update($data);

				$model->audit($user->id, $ip, 'companies', 'UPDATE', $data);

				Storage::disk('company')->makeDirectory($company->id);
				DB::commit();
				return $model->getReponseJson($dataCompany, 1);
			} else {
				DB::rollBack();
				$model->getErrorResponse('Error en el servidor.');
			}
		} catch (Exception $e) {
			DB::rollBack();
			$model->getErrorResponse($e->getMessage());
		}
	}


	public function getCompany(Request $request)
	{
		$model  = new MasterModel();
		$company = $model->getCompany();
		$start  = $request->start;
		$limit  = $request->limit;
		if ($company) {
			$table      = $company->database_name . '.company';
			$limit  = isset($limit) ? $limit : 1;
			return $model->getTable($table, '', $start, $limit);
		} else {
			return $model->getErrorResponse('Error en el servidor.');
		}
	}

	public function updateCompany($id, Request $request)
	{
		$records    = json_decode($request->input('records'));
		$ip         = $request->ip();
		$model      = new MasterModel();
		$company    = $model->getCompany();
		$table      = $company->database_name . '.company';
		$records->id    = $id;
		if (isset($records->imgdata)) {
			$occcurs    = strpos($records->imgdata, ",");
			//get the base-64 from data
			$base64_str = substr($records->imgdata, strpos($records->imgdata, ",") + 1);

			if (strlen($base64_str)  > 0 &&  $occcurs > 0) {
				//decode base64 string
				$image              = base64_decode($base64_str);
				$imgname            = $records->imgname;
				$records->image     = $this->putFile($company->id, $image, $imgname);
				$result = $model->updateData($records, $table, $ip);
			} else {
				$result = $model->updateData($records, $table, $ip);
			}
		} else {
			$result =   $model->updateData($records, $table, $ip);
		}
		return $result;
	}

	public function deleteCompany($id, Request $request)
	{
		$table      = 'business_users';
		$records    = json_decode($request->input('records'));
		$ip         = $request->ip();
		$model      = new MasterModel();
		$company    = $model->getCompany();
		$customerId = DB::table('business_users')->where(['customer_id' => $id, 'company_id' => $company->id])->first();
		$records->id = $customerId->id;
		return $model->deleteData($records, $table, $ip);
	}

	private function putFile($company_id, $data, $imgname)
	{
		$path  = "companies/{$company_id}/logo/" . $imgname;
		Storage::disk('public')->put($path, $data);
		return Storage::url($path);
	}
}