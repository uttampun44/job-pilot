<?php

namespace App\Enum;

enum Education: string
{
    case HIGH_SCHOOL = 'High School';
    case COLLEGE = 'College';
    case MASTERS = 'Masters';
    case DOCTORATE = 'Doctorate';
}