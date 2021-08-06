import React, {useEffect, useRef} from 'react'
import styles from '../style.module.css'

export function Dropdown(){
    const dropdownRef = useRef(null)
    let select
    let selectLabel
    let arrow

    console.log(styles)
    useEffect(()=>{
    
    select = document.querySelector("#dropdown");
    arrow = document.querySelector("#arrow")
    const options = document.querySelectorAll(styles.option);
    selectLabel = document.getElementById('selectLabel')
    },[])

    // function buttonClick (e) {
    //     e.preventDefault();
    //   toggleHidden();
    // }
    function addHidden() {
        
        const dropDownNode = dropdownRef.current;
        dropDownNode.classList.add(styles.hidden);
        arrow.classList.remove(styles.transform)
        //select.classList.toggle("hidden");
    }
    function deleteHidden() {
        
        const dropDownNode = dropdownRef.current;
        dropDownNode.classList.remove(styles.hidden);
        arrow.classList.add(styles.transform)
        //select.classList.toggle("hidden");
    }
    // options.forEach(function(option) {
    //     option.addEventListener("click", function (e) {
    //         console.log('aaa')
    //         setSelectTitle(e);
    //     });
    // });
    function setSelectTitle(e) {
        const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
        selectLabel.innerText = labelElement;
        deleteHidden();
    };
    

    return(<div onMouseEnter ={deleteHidden} onMouseLeave ={addHidden} className={styles.select_group}>

        <div  id="button" className={styles.button}>
          <span id="selectLabel">Цвет</span>
          <div id="arrow" className={styles.arrow}></div>
        </div>
        
        <div className={`${styles.dropdown} ${styles.hidden}`} ref={dropdownRef} id="dropdown">
          <input onClick={setSelectTitle} type="radio" id="select-internet" name="where" value="internet" className={styles.option}/>
          <label htmlFor="select-internet" className={styles.select_item}>Желтый</label>
  
          <input onClick={setSelectTitle} type="radio" id="select-family" name="where" value="family" className={styles.option}/>
          <label htmlFor="select-family" className={styles.select_item}>Красный</label>
    
          <input onClick={setSelectTitle} type="radio" id="select-existing" name="where" value="existing" className={styles.option}/>
          <label htmlFor="select-existing" className={styles.select_item}>Зеленый</label>
          
          <input onClick={setSelectTitle} type="radio" id="select-family" name="where" value="family" className={styles.option}/>
          <label htmlFor="select-family" className={styles.select_item}>Черный</label>
    
          <input onClick={setSelectTitle} type="radio" id="select-existing" name="where" value="existing" className={styles.option}/>
          <label htmlFor="select-existing" className={styles.select_item}>Белый</label>
        </div>
        
      </div>
      )
}
