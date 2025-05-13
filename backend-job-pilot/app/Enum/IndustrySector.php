<?php
namespace App\Enum;

enum IndustrySector: string
{
    case HealthSector = 'Health Sector';
    case EducationSector = 'Education Sector';
    case FinanceSector = 'Finance Sector';
    case ITSector = 'IT Sector';
    case PharmaceuticalSector = 'Pharmaceutical Sector';
    case RetailSector = 'Retail Sector';
    case TelecommunicationSector = 'Telecommunication Sector';
    case TransportSector = 'Transport Sector';
    case UtilitiesSector = 'Utilities Sector';
    case OtherSector = 'Other Sector';
}