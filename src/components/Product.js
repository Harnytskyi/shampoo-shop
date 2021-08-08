import React, {useEffect}from 'react'
import styles from '../style.module.css'
import {Dropdown} from './Dropdown'
import { InputNumber } from './InputNumber'

export function Product({ setProductParameters, product}){
    
    const QUANTITY = 'quantity'
    const VOLUME = 'volume'

    function updateState(property, id, newValue){ 
        let itemId = id.split('-')
        itemId = Number(itemId[itemId.length-1])
        setProductParameters(prevState => {
            const newState = [...prevState];
            const index = prevState.indexOf(prevState.find(item=>item.id===itemId))
            newState[index][property] = newValue 
            if(property === VOLUME)
            newState[index].price = prevState[index].quantity*prevState[index].cost*newValue//{id:prevState[2].id, frontImage: prevState[2].frontImage +'a', backImage: prevState[2].backImage}
            if(property === QUANTITY)
            newState[index].price = prevState[index].volume*prevState[index].cost*newValue//{id:prevState[2].id, frontImage: prevState[2].frontImage +'a', backImage: prevState[2].backImage}
            return newState})
        }
    let priceOfVolume = {
        '100ml': 1,
        '200ml': 1.8,
        '300ml': 3.6,
    }
    let form
    useEffect(()=>{
        form = document.getElementById(`form${product.id}`)
        form.addEventListener('change', (event)=>{
            const target = event.target
            let targetInput = target.closest('input')
            let value 
            let itemId
            if(targetInput.name === VOLUME){
                value = targetInput.value;
                itemId = targetInput.id
                updateState(VOLUME, itemId, priceOfVolume[value] )
            }
            else if(targetInput.name === QUANTITY){
                value = targetInput.value;
                itemId = targetInput.id
                updateState(QUANTITY, itemId, value )
            }
        })
    },[])
    return(
        <div className={styles.product}>
            <span className={styles.new_span}><p className={styles.new_text}>NEW</p></span>
            
            <div className={`${styles.compare_block} ${styles.transition}`}>
                <label>
                    <input type="checkbox" className={styles.compare_checkbox}/>
                    <div className={styles.compare_content}/>
                </label>
            </div>
            <div className={styles.picture}><img className={styles.img} src={product.frontImage} onMouseOver={e=>(e.currentTarget.src = product.backImage)} onMouseOut={e=>(e.currentTarget.src = product.frontImage)}/></div>
            <h4 className={styles.product_title}>Шампунь</h4>
            <p className={styles.product_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <form className={styles.form} id={`form${product.id}`}>
                <div className={styles.dropdown_price}>
                    <Dropdown id={product.id}/>                
                    <p className={styles.price}>{product.price} грн</p>
                </div>
                <div className={styles.form_group}>
                  <input type="radio" name="volume" id={`100ml-${product.id}`} className={styles.volume_checkbox} value="100ml" defaultChecked/> 
                  <label htmlFor={`100ml-${product.id}`} className={styles.volume_label}>100 мл</label>  
                </div>

                <div className={styles.form_group}>
                  <input type="radio" name="volume" id={`200ml-${product.id}`}className={styles.volume_checkbox} value="200ml"/> 
                  <label htmlFor={`200ml-${product.id}`} className={styles.volume_label}>200 мл</label>  
                </div>

                <div className={styles.form_group}>
                  <input type="radio" name="volume" id={`300ml-${product.id}`} className={styles.volume_checkbox} value="300ml"/> 
                  <label htmlFor={`300ml-${product.id}`} className={styles.volume_label}>300 мл</label>  
                </div>
                <div className={styles.submit_group}>
                    <InputNumber id={product.id} updateState={updateState}/>
                    <button type="submit" className={`${styles.submit_button} ${styles.transition}`} >КУПИТЬ</button>
                </div>
            </form>
        </div>
    )
}
