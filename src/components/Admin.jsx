import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Spinner,
  Table,
} from 'reactstrap';

function Admin() {
  const [form, setForm] = useState({});
  const [form2, setForm2] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [Properties, setProperties] = useState(null);
  const [RoyalFamily, setRoyalFamily] = useState(null);

  console.log(Properties);
  console.log(RoyalFamily);

  useEffect(() => {
    axios
      .get(`http://localhost:3090/api/v1/royalfamily`)
      .then((res) => setRoyalFamily(res.data));
  }, []);

  const postRoyalFamily = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      // eslint-disable-next-line no-unused-vars
      const { data } = await axios.post(
        'http://localhost:3090/api/v1/royalfamily',
        {
          Name: form2.Name,
          RoyalTitle: form2.RoyalTitle,
          Picture: form2.Picture,
        }
      );
    } catch (err) {
      setError(err);
    }
  };
  /* const postProperties = useCallback(async (e) => {
    try {
      setError(null);
      // eslint-disable-next-line no-unused-vars
      const { data } = await axios.post(
        'http://localhost:3090/api/v1/properties',
        {
          Title: form.Title,
          Price: form.Price,
          Lieux: form.Lieux,
          RoyalFamilyId: form.RoyalFamilyId,
          Description: form.Description,
          Picture1: form.Picture1,
          Picture2: form.Picture2,
          Picture3: form.Picture3,
        }
      );
    } catch (err) {
      setError(err);
    }
  }, []); */

  useEffect(() => {
    axios
      .get(`http://localhost:3090/api/v1/properties`)
      .then((res) => setProperties(res.data));
  }, []);

  const postProperties = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      // eslint-disable-next-line no-unused-vars
      const { data } = await axios.post(
        'http://localhost:3090/api/v1/properties',
        {
          Title: form.Title,
          Price: form.Price,
          Lieux: form.Lieux,
          RoyalFamilyId: form.RoyalFamilyId,
          Description: form.Description,
          Picture1: form.Picture1,
          Picture2: form.Picture2,
          Picture3: form.Picture3,
        }
      );
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      <div style={{ display: 'flex' /* , justifyContent: 'space-between'  */ }}>
        <Form
          className="ml-5 mt-5"
          onSubmit={postProperties}
          style={{ minWidth: '30vw' }}
        >
          <Col sm={12}>
            <FormGroup>
              <Input
                required
                type="text"
                name="Title"
                id="Title"
                placeholder="Title"
                bsSize="lg"
                onChange={(e) => setForm({ ...form, Title: e.target.value })}
              />
            </FormGroup>
          </Col>

          <Col sm={12}>
            <FormGroup>
              <Input
                required
                type="number"
                name="Price"
                id="Price"
                placeholder="Price"
                bsSize="lg"
                onChange={(e) => setForm({ ...form, Price: e.target.value })}
              />
            </FormGroup>
          </Col>

          <FormGroup>
            <Col sm={12}>
              <Input
                required
                type="text"
                name="Lieux"
                id="Lieux"
                placeholder="Lieux"
                bsSize="lg"
                onChange={(e) => setForm({ ...form, Lieux: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <Input
                required
                type="number"
                name="RoyalFamilyId"
                id="RoyalFamilyId"
                placeholder="Id du propriétaire"
                bsSize="lg"
                onChange={(e) =>
                  setForm({ ...form, RoyalFamilyId: e.target.value })
                }
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <Input
                type="url"
                name="Picture3"
                id="Picture3"
                placeholder="Short Description"
                bsSize="lg"
                onChange={(e) => setForm({ ...form, Picture3: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <Input
                required
                type="text"
                name="Descrition"
                id="Descrition"
                placeholder="URL vers l'image 1"
                bsSize="lg"
                onChange={(e) =>
                  setForm({ ...form, Descrition: e.target.value })
                }
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <Input
                type="url"
                name="Picture1"
                id="Picture1"
                placeholder="URL vers l'image 2"
                bsSize="lg"
                onChange={(e) => setForm({ ...form, Picture1: e.target.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <Input
                type="url"
                name="Picture2"
                id="Picture2"
                placeholder="URL vers l'image 3"
                bsSize="lg"
                onChange={(e) => setForm({ ...form, Picture2: e.target.value })}
              />
            </Col>
          </FormGroup>
          <Button type="button" onClick={postProperties}>
            Ajouter une propriété
          </Button>
        </Form>

        {Properties ? (
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Id proprio</th>
                  <th>Title</th>
                  <th>Lieux</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {Properties.map((e) => (
                  <tr>
                    <td style={{ border: '1px solid #333' }}>
                      {e.RoyalFamilyId}
                    </td>
                    <td style={{ border: '1px solid #333' }}>{e.Title}</td>
                    <td style={{ border: '1px solid #333' }}>{e.Lieux}</td>
                    <td style={{ border: '1px solid #333' }}>
                      {e.Price} ecocup / nuit
                    </td>
                    <td>
                      <Button type="button" color="danger">
                        X
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        ) : (
          <Spinner success />
        )}
      </div>
      <div style={{ display: 'flex' /* , justifyContent: 'space-between'  */ }}>
        <Form
          className="ml-5 mt-5"
          onSubmit={postRoyalFamily}
          style={{ minWidth: '30vw' }}
        >
          <Col sm={12}>
            <FormGroup>
              <Input
                required
                type="text"
                name="Name"
                id="Name"
                placeholder="Nom "
                bsSize="lg"
                onChange={(e) => setForm2({ ...form2, Name: e.target.value })}
              />
            </FormGroup>
          </Col>

          <Col sm={12}>
            <FormGroup>
              <Input
                required
                type="text"
                name="RoyalTitle"
                id="RoyalTitle"
                placeholder="Titre royal"
                bsSize="lg"
                onChange={(e) =>
                  setForm2({ ...form2, RoyalTitle: e.target.value })
                }
              />
            </FormGroup>
          </Col>

          <FormGroup>
            <Col sm={12}>
              <Input
                required
                type="url"
                name="Picture"
                id="Picture"
                placeholder="URL vers l'avatar"
                bsSize="lg"
                onChange={(e) =>
                  setForm2({ ...form2, Picture: e.target.value })
                }
              />
            </Col>
          </FormGroup>

          <Button type="button" onClick={postRoyalFamily}>
            Ajouter un membre
          </Button>
        </Form>

        {RoyalFamily ? (
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Titre Royal</th>
                  <th>profil pic </th>
                </tr>
              </thead>
              <tbody>
                {RoyalFamily.map((e) => (
                  <tr>
                    <td style={{ border: '1px solid #333' }}>{e.Name}</td>
                    <td style={{ border: '1px solid #333' }}>{e.RoyalTitle}</td>
                    <td style={{ border: '1px solid #333' }}>
                      <img
                        style={{ width: '70px' }}
                        src={e.Picture}
                        alt={e.Name}
                      ></img>
                    </td>
                    <td>
                      <Button type="button" color="danger">
                        X
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        ) : (
          <Spinner success />
        )}
      </div>
    </>
  );
}
export default Admin;
