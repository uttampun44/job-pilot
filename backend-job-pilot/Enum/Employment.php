<?php 

namespace App\Enum;

enum Employment: string
{   
    case INTERNSHIP = 'internship';
    case PART TIME = 'part_time';
    case CONTRACT = 'contract';
    case TEMPORARY = 'temporary';
    case FULL TIME = 'full_time';
    case REMOTE = 'remote';
}