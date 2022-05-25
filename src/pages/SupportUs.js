import MainLayout from '../layouts/MainLayout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, {useState} from 'react';
import {Form, Container, Button} from 'react-bootstrap'
import { payment } from "../apis/momoApi"

function SupportUs() {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ủng hộ chúng tôi</title>
      </Helmet>
      <MainLayout>
        <Container>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Số tiền bạn muốn ủng hộ</Form.Label>
              <Form.Control value={amount} onChange={(e)=> {setAmount(e.target.value)}}/>
            </Form.Group>
            <Button variant='primary'>Gửi</Button>
          </Form>
        </Container>
      </MainLayout>
    </>
  );
}

export default SupportUs;
