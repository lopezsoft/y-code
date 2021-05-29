<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<link rel="stylesheet" type="text/css" href="{{ asset('assets/reports/css/invoice.css') }} ">
	</head>
	<body>
		<header>
			<table>
				<tr>
					@if (isset($logo))
					<th rowspan="2">
						<img src="{{ $logo }}">
					</th>
					@endif
					@if (isset($headerLine1))
					<th>
						<div>
							{!! $headerLine1 !!}
						</div> 
					</th>
					@endif
				</tr>
				<tr>
					@if (isset($headerLine2))
					<th>
						{!! $headerLine2 !!}
					</th>
					@endif
				</tr>
			</table>
		</header>
		<div id="content">
			<hr>
			<table>
				<tr>
					<td>
						{{ "CLIENTE: {$saleMaster->company_name} R.T.N: {$saleMaster->dni}" }}
					</td>
				</tr>
				<tr>
					<td>
						{{ "DIRECCIÓN: {$saleMaster->address}" }}
					</td>
				</tr>
			</table>
			<hr>
			<table>
				<tr>
					<th>Fecha</th>
					<th>Hora</th>
					<th>{{ "{$saleMaster->invoice_name} Nº." }}</th>
				</tr>
				<tr>
					<td>{{ date('d/m/Y',strtotime($saleMaster->invoice_date)) }}</td>
					<td>{{ date('h:i:s A',strtotime($saleMaster->invoice_time)) }}</td>
					<td> {{ "{$saleMaster->prefix}{$saleMaster->invoice_nro}" }}</td>
				</tr>
			</table>
			<hr>
			{{-- Detalle  --}}
			<table>
				<tr id="header-lines">
					{{-- <th>CÓDIGO</th> --}}
					<th>CANT.</th>
					<th>U/M</th>
					<th>DESCRIPCIÓN</th>
					<th>PRECIO UNITARIO</th>
					<th>DESCUENTO</th>
					<th>TOTAL</th>
				</tr>
				@foreach ($details as $line)
				<tr id="detail-lines">
					{{-- <td id="code">
						{{ $line->sku ?? $line->internal_code }}
					</td> --}}
					<td id="amount">
						{{ $line->amount }}
					</td>
					<td id="unit">
						{{ $line->abbre_unit }}
					</td>
					<td id="detail">
						{{ $line->detail }}
					</td>
					<td id="totals">
						{{ $line->unit_price}}
					</td>
					<td id="totals">
						{{ $line->discount }}
					</td>
					<td id="totals">
						{{ $line->total}}
					</td>
				</tr>
				@endforeach
			</table>
			<hr>
			{{-- Footer --}}
			@if (strlen($saleMaster->notes) > 0)
			<table>
				<tr>
					<td>
						Observaciones: {{ $saleMaster->notes }}
					</td>
				</tr>
			</table>
			@endif
			<table id="total">
				<tr>
					<th rowspan="{{$rowspan}}" id="rowspan">
						{{ $letters }} 
					</th>
					<th id="left">
						SUBTOTAL 
					</th>
					<th id="right">{{ "{$saleMaster->Symbol} ".number_format($saleMaster->subtotal,2,".",",") }}</th>
				</tr>
				@foreach ($taxAll as $tax)
				<tr>
					<th id="left">
						{{ $tax->description_in_sales }} 
					</th>
					<th id="right">{{ "{$saleMaster->Symbol} ".number_format($tax->total,2,".",",") }}</th>
				</tr>
				@endforeach
				<tr>
					<th id="left">
						DESCUENTOS Y REBAJAS
					</th>
					<th id="right">{{ "{$saleMaster->Symbol} ".number_format($saleMaster->discount,2,".",",") }}</th>
				</tr>
				<tr>
					<th rowspan="{{$rowspan}}" id="rowspan">
						{{$saleMaster->username}}
					</th>
				</tr>
				@foreach ($taxAll as $tax)
					@if ($tax->decimal_rate > 1)
						<tr>
							<th id="left">
								{{ $tax->name_taxe }} {{ number_format($tax->rate_value,0,".",",") }}%
							</th>
							<th id="right">{{ "{$saleMaster->Symbol} ".number_format($tax->tax_value,2,".",",") }}</th>
						</tr>
					@endif
				@endforeach
				<tr>
					<th id="left">
						TOTAL 
					</th>
					<th id="right">{{ "{$saleMaster->Symbol} ".number_format($saleMaster->total,2,".",",") }}</th>
				</tr>
			</table>
			<hr>
			<table>
				<tr>
					<th>
						{!! $saleMaster->footline1 !!}
					</th>
				</tr>
				<tr>
					<th>
						{!! $saleMaster->footline2 !!}
					</th>
				</tr>
				<tr>
					<th>
						{!! $saleMaster->footline3 !!}
					</th>
				</tr>
				<tr>
					<th>
						{!! $saleMaster->footline4 !!}
					</th>
				</tr>
			</table>
		</div>
	</body>
</html>