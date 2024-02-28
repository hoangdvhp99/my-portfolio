import React from 'react';
import { Button } from 'react-bootstrap';

export const Page404: React.FC = () => (
  <div>
    Xin lỗi, trang của bạn đang truy nhập không tồn tại.
    <br />
    <br />
    <Button href={'/'} variant='outline-primary'>
      Trở về trang chủ
    </Button>
  </div>
);
