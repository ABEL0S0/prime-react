import React from 'react';
import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function TablePrime() {
    const [products, setProducts] = useState([]);
    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];
    const [newProduct, setNewProduct] = useState({
        code: '', name: '', category: '', quantity: ''
    });

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    const addProduct = () => {
        ProductService.addProduct(newProduct);
        setProducts([...products, newProduct]);
        setNewProduct({ code: '', name: '', category: '', quantity: ''}); // Limpiar el formulario después de agregar
    };

    const updateField = e => {
        setNewProduct({
           ...newProduct,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div className="card">
            <input type="text" name="code" value={newProduct.code} onChange={updateField} placeholder="Código"/>
            <input type="text" name="name" value={newProduct.name} onChange={updateField} placeholder="Nombre"/>
            <input type="text" name="category" value={newProduct.category} onChange={updateField} placeholder="Categoría"/>
            <input type="number" name="quantity" value={newProduct.quantity} onChange={updateField} placeholder="Cantidad"/>
            <button onClick={addProduct}>Agregar Producto</button>

            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} />)
                )}
            </DataTable>
        </div>
    );
}