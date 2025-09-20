export const validateDni = (number: string) => {
    if (number.length !== 8) {
        return { invalidDni: true }
    }
    return null
}

export const validateCuil = (number: string) => {
    if (number.length !== 11) {
        return { invalidCuilLength: true }
    }
    if (!/^[0-9]+$/.test(number)) {
        return { invalidCuilFormat: true }
    }
    if (![20, 23, 24, 27].includes(parseInt(number.slice(0, 2)))) {
        return { invalidCuilPrefix: true }
    }
    return null
}
