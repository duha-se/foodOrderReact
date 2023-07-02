import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span typeof='number' className={classes.amount}>x {props.amount}</span>
          {/* <Input className={classes.amount}label='x '{... props.amount}
        input={{
          id: 'amount_' + props.id,
          type: 'number',   
          max: '5',
          step: '1',
        }}
      /> */}
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
