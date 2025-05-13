<?php 

namespace App\Enum;

enum Employment: string
{   
    case INTERNSHIP = 'internship';
    case PART_TIME = 'part_time';
    case CONTRACT = 'contract';
    case TEMPORARY = 'temporary';
    case FULL_TIME = 'full_time';
    case REMOTE = 'remote';
}