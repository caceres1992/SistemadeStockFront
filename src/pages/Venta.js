/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {
  Row,
  Col,
  Card,
  Button,
  Table,
} from "antd";
import DrawerVenta from "../components/Drawer/DrawerVenta";
import { useState } from "react";

function Venta() {


const [visible, setVisible] = useState(false);

 

  return (
    <>
         <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col  xs={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Tabla de Ventas"
              extra={
                <>
                  <Button type="default" onClick={()=> setVisible(true)}>Generar Nueva Venta </Button>
                </>
              }
            >
              <div className="table-responsive">
                <h2 className="text-6xl">como</h2>
                <Table className="ant-border-space"
                />
              </div>
           <DrawerVenta visible={visible} setVisible={setVisible}/>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Venta;
