import React, {useEffect, useState} from 'react'

export const CustomHooks = () =>{
    const [productParameters,setProductParameters] = useState([
        {
            id: 1,
            frontImage: 'https://picua.org/images/2021/08/08/2c05c6854f98816637b450ac798ee5da.png',
            backImage: 'https://picua.org/images/2021/08/08/2a4bc63aa05b4c910c647e0c8056501e.png',
            volume: 1,
            quantity: 1,
            cost: 200
        },
        {
            id: 2,
            frontImage: 'https://picua.org/images/2021/08/08/45a23511150d45e66923f9ad92126eb7.png',
            backImage: 'https://picua.org/images/2021/08/08/f648e71b6cdae5d770eb294fa0e530de.png',
            volume: 1,
            quantity: 1,
            cost: 200
        },
        {
            id: 3,
            frontImage: 'https://picua.org/images/2021/08/08/cfa967eda6dab027370c5c1eabbaafec.png',
            backImage: 'https://picua.org/images/2021/08/08/701d10acbc883afe9efeebbbdb5bac88.png',
            volume: 1,
            quantity: 1,
            cost: 200
        },
        ])
    
    useEffect(() => setProductParameters(prevState=>{
        let newState = [...prevState]
        newState.map(item=> item.price = item.volume*item.quantity*item.cost)
        return newState
    }), [])
    return {
        productParameters,
        setProductParameters
    }
}
