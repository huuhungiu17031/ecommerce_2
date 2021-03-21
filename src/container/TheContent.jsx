import Carousel from "../View/Carousel";
import React from "react";

const TheContent = () => {
  return (
    <div id="content">
      <Carousel />
      <div className="product-box">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 order-lg-0 order-1">
              <div className="sidebar">
                <div className="category-box">
                  <h3>Danh mục sản phẩm</h3>
                  <div className="content-cat">
                    <ul>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="/#">Điện thoại</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="/#">Máy tính bảng</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="/#">laptop</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="/#">Apple</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="/#">Đồng hồ thông minh</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="/#">Thiết bị đeo tay</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="/#">Camera</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="/#">Tivi</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right" />{" "}
                        <a href="/#">Sản phẩm khác</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h3>
                    <i className="fa fa-bars" />
                    Tin tức
                  </h3>
                  <div className="content-w">
                    <ul>
                      <li>
                        <a href="/#">
                          <img src="images/news.jpg" />
                        </a>
                        <h4>
                          <a href="/#">
                            Thương hiệu đồng hồ thông minh Sinophy của nước nào?
                          </a>
                        </h4>
                        <div className="clear" />
                      </li>
                      <li>
                        <a href="/#">
                          <img src="images/news.jpg" />
                        </a>
                        <h4>
                          <a href="/#">
                            Thương hiệu đồng hồ thông minh Sinophy của nước nào?
                          </a>
                        </h4>
                        <div className="clear" />
                      </li>
                      <li>
                        <a href="/#">
                          <img src="images/news.jpg" />
                        </a>
                        <h4>
                          <a href="/#">
                            Thương hiệu đồng hồ thông minh Sinophy của nước nào?
                          </a>
                        </h4>
                        <div className="clear" />
                      </li>
                      <li>
                        <a href="/#">
                          <img src="images/news.jpg" />
                        </a>
                        <h4>
                          <a href="/#">
                            Thương hiệu đồng hồ thông minh Sinophy của nước nào?
                          </a>
                        </h4>
                        <div className="clear" />
                      </li>
                      <li>
                        <a href="/#">
                          <img src="images/news.jpg" />
                        </a>
                        <h4>
                          <a href="/#">
                            Thương hiệu đồng hồ thông minh Sinophy của nước nào?
                          </a>
                        </h4>
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h3>
                    <i className="fa fa-bars" />
                    Quảng cáo
                  </h3>
                  <div className="content-banner">
                    <a href="/#">
                      <img src="images/banner.png" />
                    </a>
                  </div>
                </div>
                <div className="widget">
                  <h3>
                    <i className="fa fa-facebook" />
                    Facebook
                  </h3>
                  <div className="content-fb">
                    <div
                      className="fb-page"
                      data-href="https://www.facebook.com/huykiradotnet/"
                      data-tabs="timeline"
                      data-width
                      data-height={200}
                      data-small-header="false"
                      data-adapt-container-width="true"
                      data-hide-cover="false"
                      data-show-facepile="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 order-lg-1 order-0">
              <div className="product-section">
                <h2 className="title-product">
                  <a href="/#" className="title">
                    Sản phẩm nổi bật
                  </a>
                  <div className="bar-menu">
                    <i className="fa fa-bars" />
                  </div>
                  <div className="list-child">
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
                        <a href="/#">Phụ kiện</a>
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                </h2>
                <div className="content-product-box">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            15%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại iPhone Xs Max 256GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">28.990.000₫</span>
                            <span className="price-old">33.990.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp2.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            10%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại OPPO A5 (2020) 128GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">4.790.000₫</span>
                            <span className="price-old">4.790.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            15%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại iPhone Xs Max 256GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">28.990.000₫</span>
                            <span className="price-old">33.990.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp2.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            10%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại OPPO A5 (2020) 128GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">4.790.000₫</span>
                            <span className="price-old">4.790.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp2.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            10%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại OPPO A5 (2020) 128GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">4.790.000₫</span>
                            <span className="price-old">4.790.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            15%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại iPhone Xs Max 256GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">28.990.000₫</span>
                            <span className="price-old">33.990.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp2.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            10%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại OPPO A5 (2020) 128GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">4.790.000₫</span>
                            <span className="price-old">4.790.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            15%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại iPhone Xs Max 256GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">28.990.000₫</span>
                            <span className="price-old">33.990.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/#">
                <img src="https://phongtrodn.com/wp-content/uploads/2020/02/huykira.png" />
              </a>
              <br />
              <br />
              <div className="product-section">
                <h2 className="title-product">
                  <a href="/#" className="title">
                    Điện thoại
                  </a>
                  <div className="bar-menu">
                    <i className="fa fa-bars" />
                  </div>
                  <div className="list-child">
                    <ul>
                      <li>
                        <a href="/#">Iphone</a>
                      </li>
                      <li>
                        <a href="/#">Samsung</a>
                      </li>
                      <li>
                        <a href="/#">Sony</a>
                      </li>
                      <li>
                        <a href="/#">HTC</a>
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                </h2>
                <div className="content-product-box">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            15%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại iPhone Xs Max 256GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">28.990.000₫</span>
                            <span className="price-old">33.990.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp2.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            10%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại OPPO A5 (2020) 128GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">4.790.000₫</span>
                            <span className="price-old">4.790.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            15%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại iPhone Xs Max 256GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">28.990.000₫</span>
                            <span className="price-old">33.990.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp2.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            10%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại OPPO A5 (2020) 128GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">4.790.000₫</span>
                            <span className="price-old">4.790.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp2.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            10%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại OPPO A5 (2020) 128GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">4.790.000₫</span>
                            <span className="price-old">4.790.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            15%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại iPhone Xs Max 256GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">28.990.000₫</span>
                            <span className="price-old">33.990.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp2.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            10%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại OPPO A5 (2020) 128GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">4.790.000₫</span>
                            <span className="price-old">4.790.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="item-product">
                        <div className="thumb">
                          <a href="/#">
                            <img src="images/sp.png" />
                          </a>
                          <span className="sale">
                            Giảm <br />
                            15%
                          </span>
                          <div className="action">
                            <a href="/#" className="buy">
                              <i className="fa fa-cart-plus" /> Mua ngay
                            </a>
                            <a href="/#" className="like">
                              <i className="fa fa-heart" /> Yêu thích
                            </a>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="info-product">
                          <h4>
                            <a href="/#">Điện thoại iPhone Xs Max 256GB</a>
                          </h4>
                          <div className="price">
                            <span className="price-current">28.990.000₫</span>
                            <span className="price-old">33.990.000₫</span>
                          </div>
                          <a href="/#" className="view-more">
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheContent;
