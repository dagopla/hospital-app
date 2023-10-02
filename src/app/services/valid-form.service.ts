import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { errorMessages, errorMessagesPassword } from './error-message';

@Injectable({
  providedIn: 'root'
})
export class ValidFormService {
  public patronIp: string = "^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$";
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  constructor() { }
  public isValidField( form: FormGroup, field: string ) {
    return form.controls[field].errors && form.controls[field].touched;
  }
  public isFieldOneEqualFieldTwo( field1: string, field2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if ( fieldValue1 !== fieldValue2 ) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    }
  }
  public firstFieldIsLessThanSecondField( field1: string, field2: string ) {
      
      return ( formGroup: AbstractControl ): ValidationErrors | null => {
  
        const fieldValue1 = formGroup.get(field1)?.value;
        const fieldValue2 = formGroup.get(field2)?.value;
  
        if ( fieldValue1 > fieldValue2 ) {
          formGroup.get(field1)?.setErrors({ notLess: true });
          return { notLess: true }
        }
  
        formGroup.get(field1)?.setErrors(null);
        return null;
      }
  }
  public isEmail = ( control: FormControl ): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();

    if (!value.match(this.emailPattern)) {
      return {
        noEmail: true,
      }
    }

    return null;
  }
  public priorityIsRequired= ( control: FormControl ): ValidationErrors | null =>{
    const value: number = control.value;
    if(value===0){
      return {
        priorityRequired:true,
      }
    }
    return null;
    
  };
  public isNumeric = ( control: FormControl ): ValidationErrors | null => {
    const patternNumber=/^[0-9]+$/
      const value: string = control.value.trim().toLowerCase();
  
      if (!patternNumber.test(value)) {
        return {
          isNumeric: true,
        }
      }
  
      return null;
  };
  public isIpValid= (control: FormControl): ValidationErrors | null =>{
    const value: string = control.value.trim().toLowerCase();
    if (!value.match(this.patronIp)) {
      return {
        noIp: true,
      }
    }
    return null;
  }
  public validPassword= (control: FormControl): ValidationErrors | null =>{
    const expRegulares: any={
      haveNumber:"(?=.*\\d)",
      haveCaracter:"(?=.*\\W+)",
      haveInit:"(?![.\n])",
      haveMayus:"(?=.*[A-Z])",
      haveMinus:"(?=.*[a-z])",
    }
    const value: string = control.value;
    const keyExpRegulares=Object.keys(expRegulares);
    let errors:any={};
    for (const key of keyExpRegulares) {
      if (!value.match(expRegulares[key])) {
        errors[key]=true;
      }else{
        delete errors[key];
      }
    }
    if (Object.values(errors).includes(true)) {
      return errors;
    }else{
      return null;
    }
}
  
  getFieldError( myForm:FormGroup,field: string ): string | null {
    
    if ( !myForm.controls[field] ) return null;
    const errors =myForm.controls[field].errors || {};
    for (const key of Object.keys(errors) ) {
      return errorMessages(errors)[key];
      }

    return null;
  }
  getPasswordRequired( myForm:FormGroup,field: string ): any | null {
    
    if ( !myForm.controls[field] ) return null;
    const errors =myForm.controls[field].errors || {};
    console.log(errors);
    
    const keyErrors=Object.keys(errors);
    if (keyErrors.length>0) {
      return keyErrors.map((key)=>errorMessagesPassword(errors)[key]);
    }

    return null;
  }
}

