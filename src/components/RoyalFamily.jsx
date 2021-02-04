import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardText,
  CardTitle,
  Spinner,
} from 'reactstrap';

function RoyalFamily() {
  const [RoyalFamily, setRoyalFamily] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3090/api/v1/RoyalFamily`)
      .then((res) => setRoyalFamily(res.data));
  }, []);

  return RoyalFamily ? (
    <CardGroup className={'m-5'}>
      {RoyalFamily.map((e) => (
        <Card style={{ minWidth: '250px', maxWidth: '600px', margin: '10px' }}>
          <CardImg top width="50%" src={e.Picture} alt={e.Name} />
          <CardBody>
            <CardTitle tag="h5">{e.Name}</CardTitle>
            <CardText>{e.RoyalTitle}</CardText>
          </CardBody>
        </Card>
      ))}
    </CardGroup>
  ) : (
    <div>
      <Spinner type="grow" color="success" />
    </div>
  );
}

export default RoyalFamily;
