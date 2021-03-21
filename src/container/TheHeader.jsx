import React from "react";
// import Swal from "sweetalert2";

const TheHomeLayout = () => {
  // const [state, setstate] = useState("");

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setstate(e.target.value);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("submit", state);
  // };
  // const handleOnClick = () => {
  //   console.log("login");
  // };
  return (
    <header>
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>Chào mừng đến với shop bán hàng!</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="top-menu">
                <ul>
                  <li>
                    <a href="/#">Giỏ hàng</a>
                  </li>
                  <li>
                    <a href="/#">Cửa hàng</a>
                  </li>
                  <li>
                    <a href="/#">Tài khoản</a>
                  </li>
                  <li>
                    <a href="/#">Liên hệ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="container">
          <div className="row">
            <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 order-md-0 order-0">
              <div className="logo">
                <a href="/#">
                  <img src="./images/logo.png" alt="logo" />
                </a>
                <h1>Website bán hàng</h1>
              </div>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 order-md-1 order-2">
              <div className="form-seach-product">
                <form>
                  <select
                    name
                    id="input"
                    className="form-control"
                    required="required"
                  >
                    <option value>Chọn danh mục</option>
                    <option value={1}>Điện thoại</option>
                    <option value={2}>Máy tính bản</option>
                    <option value={3}>Lap top</option>
                    <option value={4}>Phụ kiện</option>
                  </select>
                  <div className="input-seach">
                    <input type="text" name="s" id className="form-control" />
                    <button type="submit" className="btn-search-pro">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                  <div className="clear" />
                </form>
              </div>
            </div>
            <div
              className="col-6 col-xs-6 col-sm-6 col-md-3 col-lg-3 order-md-2 order-1"
              style={{ textAlign: "right" }}
            >
              <a href="/#" className="icon-cart">
                <div className="icon">
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                  <span>3</span>
                </div>
                <div className="info-cart">
                  <p>Giỏ hàng</p>
                  <span>2.500.000đ</span>
                </div>
                <span className="clear" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-menu-header">
        <div className="container">
          <div id="nav-menu">
            <ul>
              <li className="current-menu-item">
                <a href="/#">Trang chủ</a>
              </li>
              <li>
                <a href="/#">Giới thiệu</a>
              </li>
              <li>
                <a href="/#">Sản phẩm</a>
                <ul>
                  <li>
                    <a href="/#">Điện thoại</a>
                  </li>
                  <li>
                    <a href="/#">Máy tính bảng</a>
                  </li>
                  <li>
                    <a href="/#">Laptop</a>
                  </li>
                  <li>
                    <a href="/#">Sản phẩm khác</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/#">Tin tức</a>
              </li>
              <li>
                <a href="/#">Tuyển dụng</a>
              </li>
              <li>
                <a href="/#">Liên hệ</a>
              </li>
            </ul>
            <div className="clear" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TheHomeLayout;
