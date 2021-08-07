import React, {useEffect, useState}from 'react'
import styles from '../style.module.css'
import {Dropdown} from './Dropdown'
import { InputNumber } from './InputNumber'


export function Product({productParameters, setProductParameters, productQuantity, setProductQuantity, id}){
    
    let prices = {
        '100ml': 1,
        '200ml': 1.8,
        '300ml': 3.6,
    }
    let form
    useEffect(()=>{
        form = document.getElementById(`form${id}`)
        form.addEventListener('change', (event)=>{
            const target = event.target
            let targetInput = target.closest('input')
            let value 
            if(targetInput.name === 'volume'){
                value = targetInput.value;
                setProductParameters(prices[value])
            }
            else if(targetInput.name === 'quantity'){
                value = targetInput.value;
                setProductQuantity(value)
            }
        })
        
    },[])
    return(
        <div className={styles.product}>
            <span className={styles.new_span}><p className={styles.new_text}>NEW</p></span>
            
            <div className={`${styles.compare_block} ${styles.button_transition}`}>
                <label>
                    <input type="checkbox" className={styles.compare_checkbox}/>
                    <div className={styles.compare_content}/>
                </label>
            </div>
            <div className={styles.picture}></div>
            <h4 className={styles.product_title}>Шампунь</h4>
            <p className={styles.product_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <form className={styles.form} id={`form${id}`}>
                <div className={styles.dropdown_price}>
                    <Dropdown/>                
                    <p className={styles.price}>{productParameters*productQuantity*200} грн</p>
                </div>
                <div className={styles.form_group}>
                  <input type="radio" name="volume" id={`100ml${id}`} className={styles.volume_checkbox} value="100ml" defaultChecked/> 
                  <label htmlFor={`100ml${id}`} className={styles.volume_label}>100 мл</label>  
                </div>

                <div className={styles.form_group}>
                  <input type="radio" name="volume" id={`200ml${id}`}className={styles.volume_checkbox} value="200ml"/> 
                  <label htmlFor={`200ml${id}`} className={styles.volume_label}>200 мл</label>  
                </div>

                <div className={styles.form_group}>
                  <input type="radio" name="volume" id={`300ml${id}`} className={styles.volume_checkbox} value="300ml"/> 
                  <label htmlFor={`300ml${id}`} className={styles.volume_label}>300 мл</label>  
                </div>
                <div className={styles.submit_group}>
                    <InputNumber productQuantity={productQuantity} id={id} setProductQuantity={setProductQuantity}/>
                    <input type="submit" className={`${styles.submit_button} ${styles.button_transition}`} value="Купить"/>
                </div>
            </form>
        </div>
    )
}
