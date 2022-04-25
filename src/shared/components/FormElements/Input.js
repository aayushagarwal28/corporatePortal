import React, { useEffect, useReducer } from 'react'
import { validate } from '../../util/validators';



export default function Input(props) {

    const initialState={value:props.initialValue || '',isValid:props.initialValid || false,isTouched:false};

    const inputReducer=(state,action)=>{
        switch(action.type){
            case 'CHANGE': return{
                ...state,
                value: action.val,
                isValid: validate(action.val,action.validators)

            }
            case 'TOUCH': return {
                ...state,
                isTouched: true
            }
        }
    }
    const [inputState,dispatch]=useReducer(inputReducer,initialState);
    //want to update state and validate the input.
    // useReducer used to manage the state 

    const changeHandler=(event)=>{
        dispatch({type: 'CHANGE',val: event.target.value,
        validators: props.validators // array of object of validations
    });
    }

    const touchHandler=()=>{
        dispatch({type: 'TOUCH'});
    }

    const {id,inputHandler}=props;
    const {value,isValid}= inputState;

    useEffect(()=>{
       inputHandler(id,value,isValid);
    },[id,value,isValid,inputHandler])


    const content= props.element == 'input'?
    <input className={props.className} id={props.id} type={props.type} value={inputState.value} placeholder={props.placeholder} onBlur={touchHandler} onChange={changeHandler}/>:
    <textarea id={props.id}  value={inputState.value} rows={props.rows || 3}  onBlur={touchHandler} onChange={changeHandler}/>

  return (
    <div className={` ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
        {/* <label htmlFor={props.id}>{props.label}</label> */}
        {content}
        {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  )
}
