// import {  useState } from "react";

// export default 
//   function useFormValidation() {
//     const [values, setValues] = useState({})
//     const [errors, setErrors] = useState({})
//     const [isValid, setIsValid] = useState(false)
//     const [isInputValid, setIsInputValid] = useState({})

//   function handleChange(evt) {
//     const name = evt.target.name
//     const value = evt.target.value
//     const validationMessage = evt.target.validationMessage
//     const valid = evt.target.validity.valid
//     const form = evt.target.form


//     setValues((prevent) => {
//       return { ...prevent, [name]: value}
//     })

//     setErrors((prevent) => {
//       return { ...prevent, [name]: validationMessage }
//     })

//     setIsInputValid((prevent) => {
//       return {...prevent, [name]: valid}
      
//     })

//     setIsValid(form.checkValidity())

//     function reset(data={}) {
//       setValues(data)
//       setErrors({})
//       setIsValid(false)
//       setIsInputValid({})
//     }
    
//   }
//   return {values, errors, isValid, isInputValid, reset, handleChange}
// }













import { useCallback, useState } from "react";

export default 
  function useFormValidation() {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [isValid, setIsValid] = useState(false)
    const [isInputValid, setIsInputValid] = useState({})

  function handleChange(evt) {
    
    const name = evt.target.name
    const value = evt.target.value
    const validationMessage = evt.target.validationMessage
    const valid = evt.target.validity.valid
    const form = evt.target.form



    setValues((prevent) => {
      return { ...prevent, [name]: value}
    })

    setErrors((prevent) => {
      return { ...prevent, [name]: validationMessage }
    })

    setIsInputValid((prevent) => {
      return {...prevent, [name]: valid}
      
    })

    setIsValid(form.checkValidity())
  }

  const reset = useCallback((data = {}) => {
    setValues(data)
    setErrors({})
    setIsInputValid({})
    setIsValid(false)
  },[])

  const setValue = useCallback((name, value) => {
    setValues((prevent) => {
      return { ...prevent, [name]: value}
    })
  }, [])

  return {values, errors, isValid, isInputValid, handleChange, reset, setValue}
}