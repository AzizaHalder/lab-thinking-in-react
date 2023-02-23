import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {props.products.map((singleProduct) => {
          return <ProductRow key={singleProduct.id} products={singleProduct} />;
        })}
      </table>
    </div>
  );
}

export default ProductTable;

// Table
/* <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <td>NAME</td>
    <td>PRICE</td>
  </tbody>
</table>; */

/* <div>
        <h3>Name</h3>
      </div>
      <div>
        <h3>Price</h3>
      </div> */
