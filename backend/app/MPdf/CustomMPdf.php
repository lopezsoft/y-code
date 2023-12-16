<?php

namespace App\MPdf;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use Mpdf\Mpdf;
use Mpdf\MpdfException;

class CustomMPdf extends Mpdf
{
    /**
     * @throws MpdfException
     */
    public function save($path): void
    {
        Storage::put($path, $this->Output('file.pdf', 'S'));
    }
    /**
     * @throws MpdfException
     */
    public function public($path): void
    {
        Storage::disk('public')->put($path, $this->Output('file.pdf', 'S'));
    }
    /**
     * @throws MpdfException
     */
    public function cloud($path): void
    {
        Storage::cloud()->put($path, $this->Output('file.pdf', 'S'));
    }
    /**
     * Load a View and convert to HTML
     * @throws MpdfException
     */
    public function loadView($view, array $data = [], array $mergeData = []): void
    {
        $this->WriteHTML(View::make($view, $data, $mergeData)->render());
    }
}
