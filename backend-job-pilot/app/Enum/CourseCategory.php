<?php 

namespace App\Enum;

enum CourseCategory: string
{
  case ProfessionalDevelopment = 'Professional Development';
  case DataScience = 'Data Science';
  case SoftwareEngineering = 'Software Engineering';
  case CyberSecurity = 'Cyber Security';
  case Business = 'Business';
  case InformationTechnology = 'Information Technology';
  case ComputerScience = 'Computer Science';
  case Mathematics = 'Mathematics';
}