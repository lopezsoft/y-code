<?php
function extractVariationsValue($array): string
{
    return collect($array)->map(function($row) {
        return "{$row->term_name}";
    })->join(' / ');
}
