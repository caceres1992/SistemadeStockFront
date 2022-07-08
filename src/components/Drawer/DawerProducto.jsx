import { Button, Drawer, Form, Input, Radio, Row, Select, Space, Tag, Upload } from 'antd'
import { Listbox } from '@headlessui/react'
import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { useState, Fragment } from 'react'
import { UploadOutlined } from '@ant-design/icons'

const categoriasList = [
    { id: 1, name: 'Jean' },
    { id: 2, name: 'Casaca' },
    { id: 3, name: 'Pantalon' },
    { id: 4, name: 'Drill' },
    { id: 5, name: 'Poleras' },
    { id: 6, name: 'Short' },
]
const ProductSize = ["small", "medium", "large", "x large"]
const DawerProducto = ({ visible, setVisible }) => {

    // const [selectCategoria, setSelectCategoria] = useState(categoriasList[0])
    const [selectSize, setSelectSize] = useState(ProductSize[0])

    const [saveProducto, setSaveProducto] = useState({
        categoria: 0,
        brandName: "",
        modelName: "",
        color: "",
        urlProducto:"",
        size: "",
        quantity: "",
        price: "",
    })
    const { categoria, brandName, modelName, color, size, quantity, price } = saveProducto;
    const ProductColors = ["red", "blue", "green", "black", "white"]


    const { Option } = Select;



    const onChangeHandle = (e) => {
        setSaveProducto({ ...saveProducto, [e.target.name]: e.target.value })
    }

    const submitProducto = (e) => {
        e.preventDefault();
        console.log(saveProducto)
        setVisible(false)
    }
    return (
        <Drawer
            width={400}
            onClose={() => setVisible(false)}
            visible={visible}
            footer={
                <Button form='formularioProducto' block htmlType='submit'>Agregar</Button>
            }
        >
            <Form id='formularioProducto' layout='vertical' onSubmitCapture={submitProducto}>
                <Form.Item label="Categoria">
                    <select className='select_custom' name='categoria' value={categoria} onChange={onChangeHandle}>
                        {categoriasList.map((cat, index) => (
                            <option key={index} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </Form.Item>
                <Form.Item label="Marca">
                <Upload
                    name='picture'
                    listType="picture"
                    maxCount={1}
                    beforeUpload={() => false}
                >
                    <Button icon={<UploadOutlined />}>cargar una imagen</Button>
                    </Upload>
                </Form.Item>
           
          
                <Form.Item label="Nombre de la Marca">
                    <Input name='brandName' onChange={onChangeHandle} value={brandName} placeholder='Ingresar Marca' />
                </Form.Item>
                <Form.Item label="Nombre de Modelo">
                    <Input placeholder='Ingresar Modelo' onChange={onChangeHandle} value={modelName} name='modelName' />
                </Form.Item>
                <Form.Item label="Seleccionar Color">
                    <Space>
                        <Radio.Group
                            options={ProductColors}
                            buttonStyle="solid"
                            name='color'
                            onChange={onChangeHandle}
                            value={color}
                            optionType="button"

                        >

                        </Radio.Group>
                    </Space>
                </Form.Item>

                <Form.Item label="Seleccionar Talla">
                    <select value={size} className="select_custom" name='size' onChange={onChangeHandle} placeholder="Seleccione una talla" >
                        {ProductSize.map((size, index) => (
                            <option key={index} value={size}>{size.toUpperCase()}</option>
                        ))}
                    </select>
                </Form.Item>
                <Form.Item label="Insertar cantidad">
                    <Input name='quantity' value={quantity} onChange={onChangeHandle} placeholder='Cantidad' />
                </Form.Item>
                <Form.Item label="Precio">
                    <Input name='price' value={price} onChange={onChangeHandle} placeholder='S/0.00' />
                </Form.Item>
            </Form>
        </Drawer>
    )
}

export default DawerProducto