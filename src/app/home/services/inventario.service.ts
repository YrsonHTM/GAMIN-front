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

  editProducto(producto_id, nombre, descripcion, precio) {
    return this.http.put(`${this.url}/api/products/update/${producto_id}`, { nombre, descripcion, precio });
  }

  addProductInv(inventoryId, productId, quantity) {
    return this.http.post(`${this.url}/api/InventoryProducts/add/${inventoryId}`, {inventoryId, productId, quantity});
  }

  editarProdictoInv(inventoryId, productId, quantity){

  }

  compartirInventario(inventario_id, userId) {
    return this.http.post(`${this.url}/api/inventorysShares/${inventario_id}/share`,  userId );
  }

}
