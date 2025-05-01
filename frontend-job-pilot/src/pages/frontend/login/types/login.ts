import { tsignupTypes } from "../../createaccount/types/SignupTypes"

type typeRemeber = {
    remeber: boolean
}

type typelogin  = Omit<tsignupTypes, "role" | "full_name" | "name" | "password_confirmation">

/*
 type intersection
 
 An intersection type combines multiple types into one, resulting in a type that has all the properties and methods of the constituent types. 
 It is denoted by the ampersand symbol (&) and is used to combine types that share common properties or methods. 
 For example, consider the following types:
 
 type Person = {
  name: string;
  age: number;
};
 
type Employee = {
  id: number;
  name: string;
  department: string;
};
 
In the following example, the type Employee & Person is used to create a new type that represents an object with properties and methods from both types:
 
type EmployeeAndPerson = Employee & Person;
*/ 

export type tLoginType = typelogin & typeRemeber;

export type trememberType = {
    email: string,
    password: string
} | null