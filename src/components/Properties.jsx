import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardText,
  CardTitle,
  Spinner,
} from 'reactstrap';

function Properties() {
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3090/api/v1/properties`)
      .then((res) => setProperties(res.data));
  }, []);

  return properties ? (
    <CardGroup className={'m-5'}>
      {properties.map((e) => (
        <Card style={{ minWidth: '250px', maxWidth: '600px', margin: '10px' }}>
          <CardImg top width="50%" src={e.Picture1} alt={e.Title} />
          <CardBody>
            <CardTitle tag="h5">{e.Title}</CardTitle>
            <CardText>{e.Description}</CardText>
          </CardBody>
          <Button>{e.Price} ecocup /nuit</Button>
        </Card>
      ))}
    </CardGroup>
  ) : (
    <div>
      <Spinner type="grow" color="success" />
    </div>
  );
}

export default Properties;
