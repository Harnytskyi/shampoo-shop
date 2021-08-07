import React, {useState} from 'react'

export const CustomHooks = () =>{
    const [productParameters,setProductParameters] = useState(1)
    const [productQuantity, setProductQuantity] = useState(1)
    
    return {
        productParameters,
        setProductParameters,
        productQuantity,
        setProductQuantity
    }
}
