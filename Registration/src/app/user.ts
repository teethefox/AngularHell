export class User {
    constructor(
      public id: number = null,
      public fname: string = "",
      public lname: string = "",
      public email: string = "",
      public password: string = "",
      public confirm: string = "",
      public lucky: string = "",
      public street: string ="",
      public city: string="",
      public unit: any="",
      public state: string="",
      public created_at: Date = new Date(),
      public updated_at: Date = new Date()
    ){}
  }
