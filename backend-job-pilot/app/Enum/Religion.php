<?php

namespace App\Enum;

enum Religion: string
{
    case Islam = 'Islam';
    case Christianity = 'Christianity';
    case Hinduism = 'Hinduism';
    case Buddhism = 'Buddhism';
    case Judaism = 'Judaism';
    case Sikhism = 'Sikhism';
    case Other = 'Other';
}