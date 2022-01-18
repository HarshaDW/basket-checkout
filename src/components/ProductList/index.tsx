import axios from 'axios';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from './ListItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9001/products').then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);
  console.log('products', products);
  return (
    <List
      dense
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    >
      {products.map((product, inx) => (
        <ListItem key={inx} {...product} />
      ))}
    </List>
  );
};

export default ProductList;
