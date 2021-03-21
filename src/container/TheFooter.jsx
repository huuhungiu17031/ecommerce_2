import React from "react";

const TheFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="box-footer info-contact">
              <h3>Thông tin liên hệ</h3>
              <div className="content-contact">
                <p>
                  Website chuyên cung cấp thiết bị điện tử hàng đầu Việt Nam
                </p>
                <p>
                  <strong>Địa chỉ:</strong> 457/44 Tôn Đức Thắng, Liên Chiểu, Đà
                  Nẵng
                </p>
                <p>
                  <strong>Email: </strong> thietkeweb43.com@gmail.com
                </p>
                <p>
                  <strong>Điện thoại: </strong> 0358949xxx
                </p>
                <p>
                  <strong>Website: </strong> https://huykira.net
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="box-footer info-contact">
              <h3>Thông tin khác</h3>
              <div className="content-list">
                <ul>
                  <li>
                    <a href="/#">
                      <i className="fa fa-angle-double-right" /> Chính sách bảo
                      mật
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-angle-double-right" /> Chính sách đổi
                      trả
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-angle-double-right" /> Phí vẫn chuyển
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-angle-double-right" /> Hướng dẫn thanh
                      toán
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-angle-double-right" /> Chương trình
                      khuyến mãi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="box-footer info-contact">
              <h3>Form liên hệ</h3>
              <div className="content-contact">
                <form >
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <input
                        type="text"
                        name
                        id
                        className="form-control"
                        placeholder="Họ và Tên"
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                      <input
                        type="email"
                        name
                        id
                        className="form-control"
                        placeholder="Địa chỉ mail"
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                      <input
                        type="text"
                        name
                        id
                        className="form-control"
                        placeholder="Số điện thoại"
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <input
                        type="text"
                        name
                        id
                        className="form-control"
                        placeholder="Tiêu đề"
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <textarea
                        name
                        id
                        cols={30}
                        rows={10}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-contact">
                    Liên hệ ngay
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2020 HKSHOP All Rights Reserved - Design by
          THIETKEWEB43.COM
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;
