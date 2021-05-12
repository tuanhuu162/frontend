
export const onBlurInput = (state, setMessenge, field, isValidate = true) => {
    if (!state || (typeof state === 'string' && state.trim() === "")) {
        setMessenge(`Please input ${field}`)
        return false
    }
    if (isValidate && !validate(field, state)) {
        let mess;
        if (field.toLowerCase().includes("password")){
            mess = "password"
        } else if (field.toLowerCase().includes("email")) {
            mess = "email"
        } else {
            mess = field
        }
        setMessenge(`${mess}_warning`)
        return false
    }
    return true 
} 

export const beforeSubmit = (data, setDisableButton) => {
    const _data = Object.entries(data).reduce((a, [key, {value}]) => {
        if (typeof value === "string") {
            return value.trim()
        }
        return value 
    });
    const fieldErrors = Object.keys(data).filter(field => {
        if (
            typeof data[field].setMessenge === "function" && 
            !onBlurInput(data[field].value, data[field].setMessenge, data[field].title, data[field].isValidateValue)
        ) {
            return field
        } 
        if (
            typeof data[field].validate === 'function' && 
            typeof data[field].setMessenge === 'function'
        ) {
            const messenge = data[field].validate(data[field].value)
            if (typeof messenge === 'string') {
                data[field].setMessenge(messenge)
            } else if (!messenge) {
                data[field].setMessenge(`${field}_validate`)
            } else {

            }
        }
    })
}