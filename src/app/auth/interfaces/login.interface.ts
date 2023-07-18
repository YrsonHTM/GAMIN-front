export interface login {
success: boolean;
user:    User;
}
   
export interface User {
correo_electronico:  string;
descripcion_usuario: string;
direccion:           string;
nombre_usuario:      string;
password:            string;
telefono:            string;
token:               string;
usuario_id:          number;
}
   