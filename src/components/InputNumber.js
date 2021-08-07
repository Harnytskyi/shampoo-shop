import React, { useEffect, useState } from 'react'
import styles from '../style.module.css'

export function InputNumber({productQuantity, setProductQuantity, id}){
    let minusButton
    let plusButton
    let numberField
    let currentNumber =1 
    const [objects, setObject] = useState({})
    useEffect(()=>{
        minusButton = document.getElementById(`minus${id}`);
        plusButton = document.getElementById(`plus${id}`);
        numberField = document.getElementById(`numberField${id}`);
        numberField.value=currentNumber
        setObject({'minusButton': minusButton, 'plusButton': plusButton, 'numberField': numberField})
    },[])
    function checkValue(){
        if(isNaN(Number(objects.numberField.value)))
        objects.numberField.value = currentNumber;
        else
        currentNumber = objects.numberField.value
    }
    
    function subtractOne(){
        const number = Number(objects.numberField.value);
        if(number!==1){
            objects.numberField.value = number-1
        currentNumber = number-1
        setProductQuantity(number-1)
        }
    }
    function addOne(){
        const number = Number(objects.numberField.value);
        objects.numberField.value = number+1
        currentNumber = number+1
        setProductQuantity(number+1)
    }
    return(
        <div className={styles.input_number}>
            <div onClick={subtractOne} id={`minus${id}`} className={styles.input_number__minus}>-</div>
            <input onChange={checkValue} className={styles.input_number__input} id={`numberField${id}`} name="quantity" type="text" pattern="^[0-9]+$"/>
            <div onClick={addOne} id={`plus${id}`} className={styles.input_number__plus}>+</div>
        </div>
    )
}