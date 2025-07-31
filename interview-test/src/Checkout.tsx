import { useEffect, useState } from 'react';
import styles from './Checkout.module.css';
import { LoadingIcon } from './Icons';
import { getProducts } from './dataService';

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  - The total shown for each product should be calculated based on the ordered quantity and the price
//  - The total in the order summary should be calculated
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places



const Product = ({ id, name = "product", availableCount = 0, price = 0, orderedQuantity = 0, total = 0, handleAdd = () => {}, handleRemove = () => {} }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price}</td>
      <td>{orderedQuantity}</td>   
      <td>${total}</td>
      <td>
        <button className={styles.actionButton} onClick={() => handleAdd(id)} disabled={orderedQuantity === availableCount}>+</button>
        <button className={styles.actionButton} onClick={() => handleRemove(id)} disabled={orderedQuantity === 0}>-</button>
      </td>
    </tr>    
  );
}


const Checkout = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState({total: 0, current: 0})
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    setLoading(true)

    getProducts()
      .then((data) => {
        console.log(data)
        const newProducts = data.map(row => ({...row, orderedQuantity: 0, total: 0}))
        setProducts(newProducts);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    let current = 0

    if(total.total > 1000) {
      const discount = total.total * 0.10;
      setDiscount(discount)
      current = total.total - discount;
    } else if(discount > 0) {
      setDiscount(0)
    }

    setTotal(prev => ({...prev, current: current}))
  }, [total.total])

  const handleAdd = (id) => {
    const product = products.find(row => row.id === id);
    const newArray = products.filter(row => row.id !== id)

    const total = product.total + product.price;

    const newProduct = {...product, orderedQuantity: Number(product.orderedQuantity) + 1, total: total}
    newArray.splice(id - 1, 0, newProduct)

    setTotal(prev => ({...prev, total: prev.total + product.price}))
    setProducts([...newArray])
  }

  const handleRemove = (id) => {
    const product = products.find(row => row.id === id);
    const newArray = products.filter(row => row.id !== id)

    const total = product.total - product.price;

    const newProduct = {...product, orderedQuantity: Number(product.orderedQuantity) - 1, total}
    newArray.splice(id - 1, 0, newProduct)

    setTotal(prev => ({...prev, total: prev.total - product.price}))
    setProducts([...newArray])
  }

  return (
    <div>
      <header className={styles.header}>        
        <h1>Electro World</h1>        
      </header>
      <main>
        {loading && <LoadingIcon />}        
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((row: {id: string, name: string, availableCount: number, price: number, orderedQuantity: number, total: number}, idx) => (
              <Product {...row} key={idx} handleAdd={handleAdd} handleRemove={handleRemove}/>
            ))}
          </tbody>
        </table>
        <h2>Order summary</h2>
        <p>Discount: $ {discount}</p>
        <p>Total: $ {total.current}</p>       
      </main>
    </div>
  );
};

export default Checkout;