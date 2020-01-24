class Usauario {
   constructor(email,senha) {
      this.email = email
      this.senha = senha 
   }
   isAdmim() {
       return this.admim === true;
   }
}

   class admim extends Usuario {
    constructor(email, senha){
        super();
        
        this.admim = true;
    }
   }
const user1 = new usuario('usuario@email.com','123456')
console.log(user1.isAdmim())

