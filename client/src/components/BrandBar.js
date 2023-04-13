import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Card, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  const { brands } = device;
  console.log(device.selectedBrand);
  return (
    <Row md={3} className="d-flex">
      {brands?.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="p-3"
          onClick={() => console.log(device.setSelectedBrand(brand))}
          border={brand.id === device?.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
