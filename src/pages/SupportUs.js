import MainLayout from '../layouts/MainLayout';
import { Helmet } from 'react-helmet-async';
import React, {useState} from 'react';
import {Form, Container, Button} from 'react-bootstrap'
import momoApi from "../apis/momoApi";
import './SupportUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function SupportUs() {
  const [amount, setAmount] = useState(0);

  const handleSend = async (e)=> {
    e.preventDefault();
    const res = await momoApi.payment(amount);
    window.open(res.payUrl, '_self');
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ủng hộ chúng tôi</title>
      </Helmet>
      <MainLayout>
        <Container>
          <div className="d-flex flex-row justify-content-around mb-2">
            <div className="w-50">
              <div className="fs-3 fw-bold text-secondary">
                Xin chào những học giả tiềm năng. Hãy bắt đầu tạo nên những điều
                phi thường cùng nhau. Hãy ủng hộ chúng tôi để có thể cùng phát
                triển một môi trường học tập lành mạnh và chất lượng hơn nữa.
              </div>
              <Form onSubmit={handleSend}>
                <Form.Label>Số tiền bạn muốn ủng hộ</Form.Label>
                <Form.Group className="mb-3 d-flex flex-row ">
                  <Form.Control
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                  <Button variant="primary" type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Button>
                </Form.Group>
              </Form>
            </div>
            <img
              src="/images/home/donate 2.png"
              alt=""
              className="side-img-sp"
            />
          </div>
          <div className="d-flex flex-row justify-content-around">
            <img
              src="/images/home/image 24.png"
              alt=""
              className="side-img-sp"
            />
            <div className="w-50">
              <div className="fs-1 fw-bold text-end">
                Let's make <br />
                donation to create <br />
                incredible things <br />
                <div className="text-danger">together</div>
              </div>
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
}

export default SupportUs;
