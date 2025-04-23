import React from 'react'

export default function Delete() {
    return (
        <>
            <div className="overlay" hidden="">
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
            </div>

        </>
    )
}
