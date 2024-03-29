<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		{{-- <link rel="stylesheet" type="text/css" href="{{ asset('assets/reports/css/header.css') }} "> --}}
		<style>
			body{
				font-family: sans-serif;
			}
			@page {
				margin: 10px 10px;
			}
			header { 
				/* position: fixed; */
				left: 0px;
				top: -10px;
				right: 0px;
				height: auto;
				background-color: #fff;
				text-align: center;
			}
			header h1{
				margin: 10px 0;
			}
			header h2{
				margin: 0 0 10px 0;
			}

			header img {
				max-height: 128px;
			}

			#content {
				/* position: relative; */
				background-color: #fff;
			}

			#content table {
				font-size: 12px;
			}

			#content #totals-lines {
				font-size: 8;
				font-weight: bold;
				text-align: right;
				padding: 2px;
			}
			#content #totals-lines #unit {
				width: 18px;
			}
			#content #totals-lines #amount {
				width: 30px;
			}
			#content #totals-lines #code {
				width: 40px;
			}

			#content #total {
				font-size: 8;
				font-weight: bold;
				padding: 2px;
			}

			#content #total #left {
				font-size: 7;
				width: 148px;
				text-align: left;
			}

			#content #total #right {
				width: 124px;
				text-align: right;
			}
		</style>
	</head>
	<body>
		<header>
			<table>
				@if (isset($logo))
				<tr>
					<th>
						<img src="{{ $logo }}">
					</th>
				</tr>
				@endif
				@if (isset($headerLine1))
				<tr>
					<th>
						<div>
							{!! $headerLine1 !!}
						</div> 
					</th>
				</tr>
				@endif
				@if (isset($headerLine2))
				<tr>
					<th>
						{!! $headerLine2 !!}
					</th>
				</tr>
				@endif
			</table>
		</header>
		<div id="content">
			<hr>
			<table>
				<tr>
					<th>
						{{ "{$saleMaster->invoice_name} Nº." }}  {{ "{$saleMaster->prefix}{$saleMaster->invoice_nro}" }}
					</th>
				</tr>
				<tr>
					<th>
						{{ "CLIENTE: {$saleMaster->company_name}" }}
					</th>
				</tr>
			</table>
			<table>
				<tr>
					<th>Fecha</th>
					<th>Hora</th>
				</tr>
				<tr>
					<td>{{ date('d/m/Y',strtotime($saleMaster->invoice_date)) }}</td>
					<td>{{ date('h:i:s A',strtotime($saleMaster->invoice_time)) }}</td>
				</tr>
			</table>
			<hr>
			<table>
				@foreach ($details as $line)
				<tr>
					<td  colspan="5">
						{{ $line->detail }}
					</td>
				</tr>
				<tr id="totals-lines">
					<td id="code">
						{{ $line->sku ?? $line->internal_code }}
					</td>
					<td id="amount">
						{{ $line->amount }}
					</td>
					<td id="unit">
						{{ $line->abbre_unit }}
					</td>
					<td>
						{{ $line->unit_price}}
					</td>
					<td>
						{{ $line->total}}
					</td>
				</tr>
				@endforeach
			</table>
			<hr>
			<table id="total">
				<tr>
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
				<tr>
					<th id="left">
						VALOR RECIBIDO 
					</th>
					<th id="right">{{ "{$saleMaster->Symbol} ".number_format($saleMaster->cash,2,".",",") }}</th>
				</tr>
				<tr>
					<th id="left">
						CAMBIO 
					</th>
					<th id="right">{{ "{$saleMaster->Symbol} ".number_format($saleMaster->payment_change,2,".",",") }}</th>
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