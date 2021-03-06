import { StarFilled } from "@ant-design/icons";
import { Card, Col, Divider, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../../App";
import { fetchProducts } from "../../../Store/Actions/ProductActions";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
const HomeContent = (props) => {
  const products = useSelector((state) => state.products.products);
  const count = useSelector((state) => state.products.count);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const filterProduct = products?.filter((product) =>
    product.title.toLowerCase().includes(props.searchInput.toLowerCase())
  );
  const hadlePageChange = (page = 1) => {
    setPageNumber(page);
    dispatch(fetchProducts(page));
  };
  useEffect(() => {
    dispatch(fetchProducts(1));
  }, []);
  return (
    <div style={{ padding: "10px" }}>
      {
        products.length < 1 && <LoadingComponent />
      }
      <Row style={{ justifyContent: "space-around" }}>
        {filterProduct?.map((dt) => (
          <Col
            key={dt._id}
            sm={16}
            md={11}
            lg={7}
            style={{
              boxShadow: "0px 0px 5px 1px rgb(0, 0, 0, 0.1)",
              marginTop: "15px",
              borderRadius: "15px",
            }}
          >
            <Link to={`/product-details/${dt._id}`}>
              <Card hoverable cover={<img src={getImageUrl(dt.image)} alt="productimage" />}>
                <Divider />

                <h3> {dt.title}</h3>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Price: {dt.price}</h3>
                  <h3>
                    <span style={{ paddingRight: "5px" }}>Rating:</span>
                    {Array.from(Array(3), (e) => (
                      <span style={{ paddingLeft: "2px" }}>
                        <StarFilled
                          style={{ color: "orange", fontSize: "20px" }}
                        />
                      </span>
                    ))}
                  </h3>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <div style={{ margin: "auto" }}>
        <Pagination
          current={pageNumber}
          total={count}
          onChange={hadlePageChange}
          pageSize={9}
        />
      </div>
    </div>
  );
};

export default HomeContent;
