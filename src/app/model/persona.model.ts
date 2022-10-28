export class persona{
  id?:number;
  nombre:String;
  apellido:String;
  img:String;
  mail:String;
  residencia:String;
  descripcion:String;

  constructor(nombre: String, apellido:String, img:String, mail:String, residencia:String, descripcion:String){
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.mail = mail;
    this.residencia = residencia;
    this.descripcion = descripcion;
  }

}