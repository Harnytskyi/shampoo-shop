import React, { useEffect, useRef } from 'react'
import styles from '../style.module.css'

export function Dropdown({ id }) {
    const dropdownRef = useRef(null)
    const arrowRef = useRef(null)
    const selectRef = useRef(null)
    const buttonRef = useRef(null)
    let selectLabel

    useEffect(() => {
        selectLabel = document.getElementById(`selectLabel${id}`)
    }, [])

    function addHidden() {
        const dropDownNode = dropdownRef.current;
        const arrowNode = arrowRef.current
        dropDownNode.classList.add(styles.hidden);
        arrowNode.classList.remove(styles.transform)
        buttonRef.current.classList.remove(styles.button_open)
    }
    function deleteHidden() {
        const dropDownNode = dropdownRef.current;
        const arrowNode = arrowRef.current
        dropDownNode.classList.remove(styles.hidden);
        arrowNode.classList.add(styles.transform)
        buttonRef.current.classList.add(styles.button_open)
    }

    function setSelectTitle(e) {
        const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
        selectRef.current.innerText = labelElement;
        deleteHidden();
    };

    return (<div onClick={deleteHidden} onMouseLeave={addHidden} className={styles.select_group}>

        <div id={`button${id}`} className={styles.button} ref={buttonRef}>
            <span id={`selectLabel${id}`} ref={selectRef}>Цвет</span>
            <div id={`arrow${id}`} className={styles.arrow} ref={arrowRef}></div>
        </div>

        <div className={`${styles.dropdown} ${styles.hidden}`} ref={dropdownRef} id={`dropdown${id}`}>
            <input onClick={setSelectTitle} type="radio" id={`select-yellow${id}`} name="where" value="yellow" className={styles.option} />
            <label htmlFor={`select-yellow${id}`} className={styles.select_item}>Желтый</label>

            <input onClick={setSelectTitle} type="radio" id={`select-red${id}`} name="where" value="red" className={styles.option} />
            <label htmlFor={`select-red${id}`} className={styles.select_item}>Красный</label>

            <input onClick={setSelectTitle} type="radio" id={`select-green${id}`} name="where" value="green" className={styles.option} />
            <label htmlFor={`select-green${id}`} className={styles.select_item}>Зеленый</label>

            <input onClick={setSelectTitle} type="radio" id={`select-black${id}`} name="where" value="black" className={styles.option} />
            <label htmlFor={`select-black${id}`} className={styles.select_item}>Черный</label>

            <input onClick={setSelectTitle} type="radio" id={`select-white${id}`} name="where" value="white" className={styles.option} />
            <label htmlFor={`select-white${id}`} className={styles.select_item}>Белый</label>
        </div>
    </div>
    )
}
