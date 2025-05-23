import React from 'react'

export default function Navbar() {
  return (
    <div>
        <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card">
            <div className="card-body p-5">
              <form className="d-flex justify-content-center align-items-center mb-4">
                <div className="form-outline flex-fill">
                  <input type="text" id="form2" className="form-control" />
                  <label className="form-label" htmlFor="form2">
                    Nhập tên công việc
                  </label>
                </div>
                <button type="submit" className="btn btn-info ms-2">
                  Thêm
                </button>
              </form>
              {/* Tabs navs */}
              <ul className="nav nav-tabs mb-4 pb-2">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active">Tất cả</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link">Đã hoàn thành</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link">Chưa hoàn thành</a>
                </li>
              </ul>
              {/* Tabs navs */}
              {/* Tabs content */}
              <div className="tab-content" id="ex1-content">
                <div className="tab-pane fade show active">
                  <ul className="list-group mb-0">
                    <li
                      className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                      style={{ backgroundColor: "#f4f6f7" }}
                    >
                      <div>
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultChecked=""
                        />
                        <s>Quét nhà</s>
                      </div>
                      <div className="d-flex gap-3">
                        <i className="fas fa-pen-to-square text-warning" />
                        <i className="far fa-trash-can text-danger" />
                      </div>
                    </li>
                    <li
                      className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                      style={{ backgroundColor: "#f4f6f7" }}
                    >
                      <div>
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                        />
                        <span>Giặt quần áo</span>
                      </div>
                      <div className="d-flex gap-3">
                        <i className="fas fa-pen-to-square text-warning" />
                        <i className="far fa-trash-can text-danger" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
