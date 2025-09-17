import { FormGroup } from "@angular/forms"

export const getFormErrors = (formGroup: FormGroup, controlName?: string): string => {
    const controls = Object.keys(formGroup.controls)

    const getError = (controlName: string) => {
        const formMinLenght = formGroup.get(controlName)?.errors?.["minlength"]?.requiredLength
        const formMaxLenght = formGroup.get(controlName)?.errors?.["maxlength"]?.requiredLength
        const formName = getFormName(controlName)
        const errorMessages: Record<string, string> = {
            email: "Por favor, ingrese un correo electrónico válido",
            required: `El campo '${formName}' es requerido`,
            passwordsNotMatch: "Las contraseñas no coinciden",
            invalid: "Campo inválido",
            minlength: `El campo '${formName}' debe tener al menos ${formMinLenght} caracteres`,
            maxlength: `El campo '${formName}' no puede tener más de ${formMaxLenght} caracteres`,
            min: `'${formName}' debe ser mayor o igual a ${formGroup.get(controlName)?.errors?.["min"]?.min}`,
            max: `'${formName}' debe ser menor o igual a ${formGroup.get(controlName)?.errors?.["max"]?.max}`,
            invalidDni: "El DNI debe tener 8 caracteres",
            invalidIdentification: "El DNI/CUIL debe tener 8 o 11 caracteres",
            invalidCuilLength: "El CUIL debe tener 11 caracteres",
            invalidCuilFormat: "El CUIL solo debe contener números",
            invalidCuilPrefix: "El CUIL debe tener prefijo válido",
        }
        const firstErrorKey = Object.keys(formGroup.get(controlName)?.errors || {})[0]
        return errorMessages[firstErrorKey] || "Error desconocido"
    }

    if (controlName) {
        return getError(controlName)
    }

    for (const controlName of controls) {
        const control = formGroup.get(controlName)
        if (control?.errors) {
            return getError(controlName)
        }
    }
    return ""
}


const getFormName = (text: string) => {
    const formsName: Record<string, string> = {
        firstName: "Nombre",
        lastName: "Apellido",
        age: "Edad",
        email: "Correo electrónico",
        password: "Contraseña",
        repeatedPassword: "Repetir contraseña",
        identification: "DNI/CUIL",
    }
    return formsName[text] || text
}


export const getFormError = (formGroup: FormGroup, controlName: string) => {
    const control = formGroup.get(controlName);
    if (control?.errors) {
        return getFormErrors(formGroup, controlName)
    }
    return '';
}
