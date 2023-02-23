function ProductRow(props) {
  console.log('Products Row:', props.products.inStock);
  // const inStock = () =>{
  //   if(props.products.inStock === "true"){
  //     return props.products.inStock
  //   }
  // }
  return (
    <tr>
      <td>
        {/* {props.products.name !== 'Football' ? <style={{"color: red"}}> : <style={{"color: black"}}>} */}
        {/* <p>Hello</p> : <p>Not hello</p> */}
        {/* && props.products.inStock */}
      </td>
      {/* <style {{"color: red"}}> : <style = {{"color: black"}}> */}
      <td>{props.products.price}</td>
    </tr>
  );
}

export default ProductRow;
