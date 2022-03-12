<?php

require __DIR__.'/vendor/autoload.php';

namespace App\HtmlPdf;

use Spipu\Html2Pdf\Html2Pdf;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;

class HtmlPdf extends Html2Pdf{
	
	
	public function __construct()
	{
		parent::__construct();
	}

	public function save($path)
	{
		// $this->render();
		Storage::put($path, $this->output("","S"));
	}

	function setPaper80mm(){
		$paper_size = array(0,0,226,2500);
		// $this->setPaper($paper_size);
	}
    
    /**
     * Load a View and convert to HTML
     *
     * @param  mixed $view
     * @param  mixed $data
     * @param  mixed $mergeData
     * @param  mixed $encoding
     * @return void
     */
    public function loadView($view, $data = array(), $mergeData = array(), $encoding = null){
			$html = View::make($view, $data, $mergeData)->render();
			return $this->writeHTML($html, $encoding);
	}
	

}