import React from 'react'
import Navbar from './Navbar'
import Delete from './Delete'
import Erro from './Erro'

export default function Couter() {
    // useSelector: Lấy dữ liệu trong store
  return (
    <>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="./index.css" />
  {/* Font Awesome */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />
  {/* Google Fonts */}
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    rel="stylesheet"
  />
  {/* MDB */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.min.css"
    rel="stylesheet"
  />

  <Navbar />

  {/* Modal xác nhận xóa */}
  <Delete />

  {/* Modal cảnh báo lỗi */}
  <Erro />
  
  {/* MDB */}
</>

    </>
  )
}
