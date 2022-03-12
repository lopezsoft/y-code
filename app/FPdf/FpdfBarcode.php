<?php

namespace App\FPdf;

use Codedge\Fpdf\Fpdf\Fpdf;

//function hex2dec
//returns an associative array (keys: R,G,B) from
//a hex html code (e.g. #3FE5AA)
function hex2dec($couleur = "#000000"){
    $R = substr($couleur, 1, 2);
    $rouge = hexdec($R);
    $V = substr($couleur, 3, 2);
    $vert = hexdec($V);
    $B = substr($couleur, 5, 2);
    $bleu = hexdec($B);
    $tbl_couleur = array();
    $tbl_couleur['R']=$rouge;
    $tbl_couleur['V']=$vert;
    $tbl_couleur['B']=$bleu;
    return $tbl_couleur;
}

//conversion pixel -> millimeter at 72 dpi
function px2mm($px){
    return $px*25.4/72;
}

function txtentities($html){
    $trans = get_html_translation_table(HTML_ENTITIES);
    $trans = array_flip($trans);
    return strtr($html, $trans);
}

class FpdfBarcode extends FPDF
{
    protected $javascript;
    protected $n_js;

    //variables of html parser
    var $B;
    var $I;
    var $U;
    var $HREF;
    var $fontList;
    var $issetfont;
    var $issetcolor;


    function __construct($orientation='P', $unit='mm', $format='A4')
    {
        //Call parent constructor
        parent::__construct($orientation,$unit,$format);
        //Initialization
        $this->B=0;
        $this->I=0;
        $this->U=0;
        $this->HREF='';
        $this->fontlist=array('arial', 'times', 'courier', 'helvetica', 'symbol');
        $this->issetfont=false;
        $this->issetcolor=false;
    }

    function IncludeJS($script, $isUTF8 = false)
    {
        if (!$isUTF8)
            $script = utf8_encode($script);
        $this->javascript = $script;
    }

    function _putjavascript()
    {
        $this->_newobj();
        $this->n_js = $this->n;
        $this->_put('<<');
        $this->_put('/Names [(EmbeddedJS) ' . ($this->n + 1) . ' 0 R]');
        $this->_put('>>');
        $this->_put('endobj');
        $this->_newobj();
        $this->_put('<<');
        $this->_put('/S /JavaScript');
        $this->_put('/JS ' . $this->_textstring($this->javascript));
        $this->_put('>>');
        $this->_put('endobj');
    }

    function _putresources()
    {
        parent::_putresources();
        if (!empty($this->javascript)) {
            $this->_putjavascript();
        }
    }

    function _putcatalog()
    {
        parent::_putcatalog();
        if (!empty($this->javascript)) {
            $this->_put('/Names <</JavaScript ' . ($this->n_js) . ' 0 R>>');
        }
    }

    function AutoPrint($printer = '')
    {
        // Open the print dialog
        if ($printer) {
            $printer = str_replace('\\', '\\\\', $printer);
            $script = "var pp = getPrintParams();";
            $script .= "pp.interactive = pp.constants.interactionLevel.full;";
            $script .= "pp.printerName = '$printer'";
            $script .= "print(pp);";
        } else
            $script = 'print(true);';
        $this->IncludeJS($script);
    }

    function EAN13($x, $y, $barcode, $h = 16, $w = .35)
    {
        return $this->Barcode($x, $y, $barcode, $h, $w, 13);
    }

    function UPC_A($x, $y, $barcode, $h = 16, $w = .35)
    {
        $this->Barcode($x, $y, $barcode, $h, $w, 12);
    }

    function GetCheckDigit($barcode)
    {
        //Compute the check digit
        $sum = 0;
        for ($i = 1; $i <= 11; $i += 2)
            $sum += 3 * $barcode[$i];
        for ($i = 0; $i <= 10; $i += 2)
            $sum += $barcode[$i];
        $r = $sum % 10;
        if ($r > 0)
            $r = 10 - $r;
        return $r;
    }

    function TestCheckDigit($barcode)
    {
        //Test validity of check digit
        $sum = 0;
        for ($i = 1; $i <= 11; $i += 2)
            $sum += 3 * $barcode[$i];
        for ($i = 0; $i <= 10; $i += 2)
            $sum += $barcode[$i];
        return ($sum + $barcode[12]) % 10 == 0;
    }

    function Barcode($x, $y, $barcode, $h, $w, $len)
    {
        //Padding
        $barcode = str_pad($barcode, $len - 1, '0', STR_PAD_LEFT);
        if ($len == 12)
            $barcode = '0' . $barcode;
        //Add or control the check digit
        if (strlen($barcode) == 12)
            $barcode .= $this->GetCheckDigit($barcode);
        elseif (!$this->TestCheckDigit($barcode))
            $this->Error('Incorrect check digit');
        //Convert digits to bars
        $codes = array(
            'A' => array(
                '0' => '0001101', '1' => '0011001', '2' => '0010011', '3' => '0111101', '4' => '0100011',
                '5' => '0110001', '6' => '0101111', '7' => '0111011', '8' => '0110111', '9' => '0001011'
            ),
            'B' => array(
                '0' => '0100111', '1' => '0110011', '2' => '0011011', '3' => '0100001', '4' => '0011101',
                '5' => '0111001', '6' => '0000101', '7' => '0010001', '8' => '0001001', '9' => '0010111'
            ),
            'C' => array(
                '0' => '1110010', '1' => '1100110', '2' => '1101100', '3' => '1000010', '4' => '1011100',
                '5' => '1001110', '6' => '1010000', '7' => '1000100', '8' => '1001000', '9' => '1110100'
            )
        );
        $parities = array(
            '0' => array('A', 'A', 'A', 'A', 'A', 'A'),
            '1' => array('A', 'A', 'B', 'A', 'B', 'B'),
            '2' => array('A', 'A', 'B', 'B', 'A', 'B'),
            '3' => array('A', 'A', 'B', 'B', 'B', 'A'),
            '4' => array('A', 'B', 'A', 'A', 'B', 'B'),
            '5' => array('A', 'B', 'B', 'A', 'A', 'B'),
            '6' => array('A', 'B', 'B', 'B', 'A', 'A'),
            '7' => array('A', 'B', 'A', 'B', 'A', 'B'),
            '8' => array('A', 'B', 'A', 'B', 'B', 'A'),
            '9' => array('A', 'B', 'B', 'A', 'B', 'A')
        );
        $code = '101';
        $p = $parities[$barcode[0]];
        for ($i = 1; $i <= 6; $i++)
            $code .= $codes[$p[$i - 1]][$barcode[$i]];
        $code .= '01010';
        for ($i = 7; $i <= 12; $i++)
            $code .= $codes['C'][$barcode[$i]];
        $code .= '101';
        //Draw bars
        for ($i = 0; $i < strlen($code); $i++) {
            if ($code[$i] == '1')
                $this->Rect($x + $i * $w, $y, $w, $h, 'F');
        }
        //Print text uder barcode
        // $this->SetFont('Arial', '', 12);
        // $this->Text($x, $y + $h + 11 / $this->k, substr($barcode, -$len));
        return substr($barcode, -$len);
    }

    function WriteHTML($vhtml, &$parsed)
    {
        //HTML parser
        $html = strip_tags($vhtml, "<p><br>"); //supprime tous les tags sauf ceux reconnus
        $html = str_replace("\n", ' ', $html); //remplace retour à la ligne par un espace
        $a = preg_split('/<(.*)>/U', $html, -1, PREG_SPLIT_DELIM_CAPTURE); //éclate la chaîne avec les balises
        foreach ($a as $i => $e) {
            // if ($e == "") continue;
            if ($i % 2 == 0) {
                //Text
                // if ($this->HREF)
                //     $this->PutLink($this->HREF, $e);
                // else
                if($e == "") {
                    if($parsed){
                        $parsed .= "\n";
                    }
                }else {
                    $parsed .= stripslashes(txtentities($e));
                }
            }
        }
    }


}
