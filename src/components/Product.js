import React from 'react'
import styles from '../style.module.css'
import {Dropdown} from './Dropdown'

export function Product(){
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
            <form className={styles.form}>
                <div className={styles.dropdown_price}>
                    <Dropdown/>                
                    <p className={styles.price}>200 грн</p>
                </div>
                <div className={styles.form_group}>
                  <input type="radio" name="volume" id="100ml" className={styles.volume_checkbox} name="terms_and_conditions" value="1"/> 
                  <label htmlFor="100ml" className={styles.volume_label}>100 мл</label>  
                </div>

                <div className={styles.form_group}>
                  <input type="radio" name="volume" id="200ml" className={styles.volume_checkbox} name="terms_and_conditions" value="1"/> 
                  <label htmlFor="200ml" className={styles.volume_label}>200 мл</label>  
                </div>

                <div className={styles.form_group}>
                  <input type="radio" name="volume" id="300ml" className={styles.volume_checkbox} name="terms_and_conditions" value="1"/> 
                  <label htmlFor="300ml" className={styles.volume_label}>300 мл</label>  
                </div>
                
            </form>
        </div>
    )
}
