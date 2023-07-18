export interface ResInventario {
    createdInventories: CreatedInventory[];
    sharedInventories:  CreatedInventory[];
   }
   
   export interface CreatedInventory {
    descripcion:   string;
    inventario_id: number;
    nombre:        string;
   }
   