import React, { useCallback, useReducer } from 'react'

  //Form reducer updates  state of each input element (their value and validity),
 //  and also the entire form 's validity 
 const formReducer = (state, action) => {

    switch (action.type) {
      case 'INPUT_CHANGE':
        let isFormValid = true;
        for (let inputId in state.inputs) {

          if(! state.inputs[inputId]) //if that input id doesn't exist in form state
          continue;


          if (inputId == action.inputId)
            isFormValid = isFormValid && action.isValid;
          else
          isFormValid= isFormValid && state.inputs[inputId].isValid

        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: {
              value: action.value,
              isValid: action.isValid
            }
          },
          isValid: isFormValid
        }
        case 'SET_INPUT': return {
            inputs: action.inputs,
            isValid: action.isValid
        }
       default: return state;

    }
  }



export  function useForm(inputs,isValid){
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: inputs,
        isValid: isValid
    });

  //the input handler is called from the Input component whener input id, value or isValid changes. 
  const inputHandler = useCallback((id, inputValue, isValid) => {

    dispatch({ type: 'INPUT_CHANGE', inputId: id, value: inputValue, isValid: isValid });
  }, [])

  const setInputs = useCallback((inputs,isValid)=>{
         dispatch({type: 'SET_INPUT',inputs: inputs, isValid: isValid});
  },[]);

  return [formState,inputHandler,setInputs];
}
