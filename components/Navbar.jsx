import React from 'react'
import Main from './Main'

export default function Navbar() {
    return (
        <div>
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
               <Main />
                {/* Modal xác nhận xóa */}
                {/* <div className="overlay" hidden="">
                    <div className="modal-custom">
                        <div className="modal-header-custom">
                            <h5>Xác nhận</h5>
                            <i className="fas fa-xmark" />
                        </div>
                        <div className="modal-body-custom">
                            <p>Bạn chắc chắn muốn xóa công việc quét nhà?</p>
                        </div>
                        <div className="modal-footer-footer">
                            <button className="btn btn-light">Hủy</button>
                            <button className="btn btn-danger">Xóa</button>
                        </div>
                    </div>
                </div> */}
                {/* Modal cảnh báo lỗi */}
                {/* <div className="overlay" hidden="">
                    <div className="modal-custom">
                        <div className="modal-header-custom">
                            <h5>Cảnh báo</h5>
                            <i className="fas fa-xmark" />
                        </div>
                        <div className="modal-body-custom">
                            <p>Tên công việc không được phép để trống.</p>
                        </div>
                        <div className="modal-footer-footer">
                            <button className="btn btn-light">Đóng</button>
                        </div>
                    </div>
                </div> */}
                {/* MDB */}
            </>

        </div>
    )
}
