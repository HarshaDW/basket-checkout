import { ListItem as MUIListItem } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import { Product } from '../../types/Product';
import { useAppDispatch } from '../../redux/hooks';
import { addToBasket } from '../../redux/product/productSlice';

const ListItem = (props: Product) => {
  const dispatch = useAppDispatch();
  const handleAddToBasket = item => {
    dispatch(addToBasket(item));
  };

  return (
    <MUIListItem>
      <ListItemText primary={props.name} />
      <ListItemText primary={props.price} />
      <Button
        variant="contained"
        onClick={e => {
          e.preventDefault;
          handleAddToBasket(props);
        }}
        color="primary"
      >
        Add to basket
      </Button>
    </MUIListItem>
  );
};

export default ListItem;
