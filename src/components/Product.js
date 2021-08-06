import React, {useEffect, useState}from 'react'
import styles from '../style.module.css'
import {Dropdown} from './Dropdown'
import { InputNumber } from './InputNumber'

export function Product(){
    let prices = {
        '100ml': 1,
        '200ml': 1.8,
        '300ml': 3.6,
    }
    const [productParameters,setProductParameters] = useState({volume: 1, quantity: 1, price: 200});
    let form
    useEffect(()=>{
        form = document.getElementById('form')
        form.addEventListener('change', (event)=>{
            const target = event.target
            let targetInput = target.closest('input')
            let value 
            if(targetInput.name === 'volume'){
                value = targetInput.value;
                setProductParameters({
                    volume: prices[value], 
                    quantity: productParameters.quantity,
                    price: prices[value]*productParameters.quantity*200
                })
            }
            else if(targetInput.name === 'quantity'){
                value = targetInput.value;
                setProductParameters({
                    volume: productParameters.volume,
                    quantity: value,
                    price: productParameters.volume*value*200
                })
            }
            
            
            
        })
        form.addEventListener('click', (event)=>{
            const target = event.target
            let targetInput = target.closest('div');
            if(targetInput.id === "plus"){
                setProductParameters({
                    volume: productParameters.volume, 
                    quantity: productParameters.quantity+1,
                    price: productParameters.volume*(productParameters.quantity+1)*200
                })
            }
            else if(targetInput.id === "minus"){
                setProductParameters({
                    volume: productParameters.volume, 
                    quantity: productParameters.quantity-1,
                    price: productParameters.volume*(productParameters.quantity-1)*200
                })
            }
        })
    },[])
    useEffect(()=>{console.log(productParameters)}, [productParameters])
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
            <form className={styles.form} id="form">
                <div className={styles.dropdown_price}>
                    <Dropdown/>                
                    <p className={styles.price}>{productParameters.price} грн</p>
                </div>
                <div className={styles.form_group}>
                  <input type="radio" name="volume" id="100ml" className={styles.volume_checkbox} value="100ml" defaultChecked/> 
                  <label htmlFor="100ml" className={styles.volume_label}>100 мл</label>  
                </div>

                <div className={styles.form_group}>
                  <input type="radio" name="volume" id="200ml" className={styles.volume_checkbox} value="200ml"/> 
                  <label htmlFor="200ml" className={styles.volume_label}>200 мл</label>  
                </div>

                <div className={styles.form_group}>
                  <input type="radio" name="volume" id="300ml" className={styles.volume_checkbox} value="300ml"/> 
                  <label htmlFor="300ml" className={styles.volume_label}>300 мл</label>  
                </div>
                <div className={styles.submit_group}>
                    <InputNumber/>
                    <input type="submit" className={styles.submit_button} value="Купить"/>
                </div>
            </form>
        </div>
    )
}
