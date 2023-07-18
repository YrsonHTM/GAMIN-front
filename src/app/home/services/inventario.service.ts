import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  url = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllInventarios() {
    return this.http.get(`${this.url}/api/inventorys/all`);
  }

  getInventariosByUser(id){
    return this.http.get(`${this.url}/api/users/getInventorys/${id}`);
  }

  getInventario(inventario_id) {
    return this.http.get(`${this.url}/api/inventorys/get/${inventario_id}`);
  }

  crearInventario(usuario_id, nombre, descripcion) {
    return this.http.post(`${this.url}/api/inventorys/create`, {
      usuario_id,
      nombre,
      descripcion
    });
  }

  getProductos(inventario_id) {
    return this.http.get(`${this.url}/api/InventoryProducts/${inventario_id}/products`);
  }

  createProducto(nombre, descripcion, precio)
  {
    return this.http.post(`${this.url}/api/products/create`, { nombre, descripcion, precio });
  }

  getAllProductos() {
    return this.http.get(`${this.url}/api/products/all`);
  }

  deleteProducto(producto_id) {
    return this.http.delete(`${this.url}/api/products/delete/${producto_id}`);
  }

  deleteProductoInv(inventario_producto_id) {
    return this.http.delete(`${this.url}/api/InventoryProducts/delete/${inventario_producto_id}`);
  }

  editProducto(producto_id, nombre, descripcion, precio) {
    return this.http.put(`${this.url}/api/products/update/${producto_id}`, { nombre, descripcion, precio });
  }

  addProductInv(inventario_id, producto_id, cantidad_disponible) {
    return this.http.post(`${this.url}/api/InventoryProducts/add`, {inventario_id, producto_id, cantidad_disponible});
  }

  editarProdictoInv(inventario_producto_id, cantidad_disponible){
    return this.http.put(`${this.url}/api/InventoryProducts/update`, {inventario_producto_id, cantidad_disponible});
  }

  compartirInventario(inventario_id, correo_electronico) {
    return this.http.post(`${this.url}/api/inventorysShares/share`,  {inventario_id,correo_electronico} );
  }

  getAllProvedores() {
    return this.http.get(`${this.url}/api/providers/all`);
  }

  createProvedor(nombre_proveedor, descripcion_proveedor, usuario_id, producto_id) {
    return this.http.post(`${this.url}/api/providers/create`, { nombre_proveedor, descripcion_proveedor, usuario_id , producto_id });
  }

  updateProvedor(nombre_proveedor, descripcion_proveedor, usuario_id, producto_id, proveedor_id)
  {
    return this.http.put(`${this.url}/api/providers/update`, {nombre_proveedor, descripcion_proveedor, usuario_id, producto_id, proveedor_id});
  }

  deleteProvedor(proveedor_id) {
    return this.http.delete(`${this.url}/api/providers/delete/${proveedor_id}`);
  }

  getMovimientos(inventario_id) {
    return this.http.get(`${this.url}/api/movements/get/${inventario_id}`);
  }

}
