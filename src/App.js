import { Product } from './components/Product'
import { CustomHooks } from './data/CustomHooks'
import styles from './style.module.css'
function App() {
  const {
    productParameters,
    setProductParameters,
    productQuantity,
    setProductQuantity,
    arrayProducts
  } = CustomHooks();
  return (
    <div className={styles.app} >
      <Product key={1} id={1} productParameters={productParameters}
        setProductParameters={setProductParameters}
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity} 
        />
      <Product key={2} id={2} productParameters={productParameters}
        setProductParameters={setProductParameters}
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity} 
      />
      <Product key={3} id={3} productParameters={productParameters}
        setProductParameters={setProductParameters}
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity} 
        />
    </div>
  );
}

export default App;
