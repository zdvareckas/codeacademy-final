import React from 'react';
import { useParams } from 'react-router-dom';
import { bikeService } from '../../services/bikes-service';

const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const data = await bikeService.fetchById(itemId);
      setItem(data);
      console.log(data);
    })();
  }, [itemId]);

  return (
    <pre>{JSON.stringify(item, null, 4)}</pre>
  );
};

export default ItemPage;
