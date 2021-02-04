import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

function Auth() {
  const history = useHistory();
  const [form, setForm] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  console.log(form);

  const sendData = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const { data } = await axios.post('http://localhost:3090/api/v1/auth', {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem('TOKEN', data.token);
      localStorage.setItem('USER', data.admin.email);
      history.push('/admin');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form onSubmit={sendData}>
        <FormGroup row>
          <Label className="mr-2" for="email" sm={2} size="lg">
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              bsSize="lg"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="mr-2" for="password" sm={2} size="lg">
            Password
          </Label>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              id="passwordAdmin"
              placeholder="enter your secret password"
              bsSize="lg"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </Col>
        </FormGroup>
        {error && (
          <div>
            <p
              style={{
                color: 'red',
              }}
            >
              {error.message}
            </p>
          </div>
        )}
        <Button type="button" onClick={sendData}>
          Se Connecter
        </Button>
      </Form>
    </div>
  );
}

export default Auth;
