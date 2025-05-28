<?php

namespace App\Enum;

enum CourseStatus: string
{
  case Enrolled = 'enrolled';
  case Pending = 'pending';
  case Completed = 'completed';
}