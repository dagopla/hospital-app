import { ValidationErrors } from "@angular/forms";

export const errorMessages =(errors:ValidationErrors):any=> ({
    required: '\u2717 Este campo es requerido',
    noEmail: '\u2717 El campo debe ser un email válido.',
    existEmail: '\u2717 El email ya existe.',
    minlength: `\u2717 Mínimo ${errors['minlength']?.requiredLength} caracteres.`,
    pattern: '\u2717 La contraseña no es válida. Ejemplo: Pepe\u2717 -333',
    maxlength: `\u2717 Máximo ${errors['maxlength']?.requiredLength} caracteres.`,
    priorityRequired: 'Este campo es requerido',
    isNumeric: '\u2717 Error: El campo debe ser numérico',
    noIp: '\u2717 Error: El campo debe ser una dirección IP válida',
    ipExist: '\u2717 Error: La dirección IP ya existe',
    notLess: '\u2717 El tiempo preferencial debe ser menor al tiempo estándar',
    min: `\u2717 El valor mínimo debe ser ${errors['min']?.min}`,
    max: `\u2717 El valor máximo debe ser ${errors['max']?.max}`,
    errorServicesModule: '\u2717 Hubo un error al actualizar los servicios del módulo',
  });
  export const errorMessagesPassword =(errors:ValidationErrors):any=> ({
    required: '\u2717 Este campo es requerido',
    haveNumber: '\u2717 Al menos un número... (1234)',
    haveCaracter: '\u2717 Al menos un símbolo... (,./)',
    haveInit: '\u2717 La contraseña debe iniciar con una letra o numero... (123)',
    haveMayus: '\u2717 Al menos una mayúscula... (ASD)',
    haveMinus: '\u2717 Al menos una minúscula... (asd)',
    minlength: `\u2717 Mínimo ${errors['minlength']?.requiredLength} caracteres.`,
  });