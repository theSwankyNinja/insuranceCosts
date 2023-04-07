export class Doctor {

    constructor(
      public id: number,
      public doctorName: string,
      public specialty?: string,
      public visits?: number,
    ) {  }
  
  }