import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd'
import React from 'react'
import TableVenta from '../Table/TableVenta'

const DrawerVenta = ({ visible, setVisible }) => {
    return (
        <Drawer
            width={950}
            visible={visible}
            onClose={() => setVisible(false)}
            footer={
                <div>
                    Hello soy el footer
                </div>
            }
        >
            <Row gutter={16} style={{marginBottom:18}}>

                <Col span={15}>

                    <Form layout='vertical'>

                        <Col >
                            <Row gutter={12}>
                                <Col md={12}>
                                    <Form.Item label="DNI">
                                        <Select size='large' showSearch placeholder="DNI">
                                            <Select.Option value="34567832">34567832</Select.Option>
                                            <Select.Option value="49345678">49345678</Select.Option>
                                            <Select.Option value="23570234">23570234</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col md={12}>
                                    <Form.Item label="Nombre">
                                        <Button block type='primary'>Buscar online</Button>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={12}>
                                <Col md={12}>
                                    <Form.Item label="Nombres">
                                        <Input placeholder="Jhon " />
                                    </Form.Item>
                                </Col>
                                <Col md={12}>
                                    <Form.Item label="Apellidos">
                                        <Input placeholder='Doe' />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item label="Direccion">
                                <Input placeholder='av la paz 123' />
                            </Form.Item>

                        </Col>



                    <Button block type='primary'>Generar venta</Button>

                    </Form>
                </Col>
                <Col span={9}>
                    <Form layout='vertical'>
                        <Form.Item label="Producto">
                            <Select size='large' showSearch placeholder="Producto">
                                <Select.Option value="Producto 1">Producto 1</Select.Option>
                                <Select.Option value="Producto 2">Producto 2</Select.Option>
                                <Select.Option value="Producto 3">Producto 3</Select.Option>
                                <Select.Option value="Producto 4">Producto 4</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="cantdiad">
                            <Input size='large'  type={"number"} placeholder="cantidad"/>                     
                        </Form.Item>

                        <Form.Item label="Precio">
                            <Input size='large' type={"number"}  placeholder="Producto"/>
                            
                          
                        </Form.Item>
                        <Button type='primary' block>Agregar producto</Button>
                    </Form>

                </Col>

            </Row>
            <TableVenta />
        </Drawer>
    )
}

export default DrawerVenta