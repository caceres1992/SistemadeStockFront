
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Typography,
  Tag,
} from "antd";

import {HiOutlinePencilAlt} from 'react-icons/hi'

import { useEffect, useState } from "react";
import { ProductoData } from "../data/ProductoData";
import DrawerWrapper from "antd/lib/drawer";
import DawerProducto from "../components/Drawer/DawerProducto";
import { columnsproducto } from "../components/ColumnsTable/ColumnsProducto";



// table code start



function Producto() {
const [productosData,setProductosData]=useState([])
const [visible,setVisible]=useState(false)
  useEffect(() => {
      setProductosData(ProductoData)
  }, [])
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Tabla de Productos"
              extra={
                <>
                  <Button type="default" onClick={()=>setVisible(true)}>Agregar Nuevo Producto </Button>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columnsproducto}
                  dataSource={productosData}
                  className="ant-border-space"
                  
                />
              </div>
          
            </Card>
          </Col>
        </Row>
      </div>
         <DawerProducto visible={visible} setVisible={setVisible}/>   
    </>
  );
}

export default Producto;
