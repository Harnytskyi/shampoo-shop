import { Product } from './components/Product'
import { CustomHooks } from './data/CustomHooks'
import styles from './style.module.css'

function App() {
  const {
    productParameters,
    setProductParameters
  } = CustomHooks();
  return (
    <div className={styles.app} >
      {productParameters.map(item=>(
        <Product key={item.id} product={item} setProductParameters={setProductParameters}
          />
        )
      )}
      </div>
  );
}

export default App;
