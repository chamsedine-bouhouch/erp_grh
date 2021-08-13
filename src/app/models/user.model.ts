export class User{

  id:number;
  name:string;
  email:string;
  role:string;
  constructor(name:string,email:string) {
    this.id=0;
    this.name=name;
    this.email=email;
    this.role="";
  }

}
