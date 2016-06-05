export class Pizzeria {

    
    constructor(
       public name:string = "",
       public address?:string,
       public visited:boolean = false,
       public description?:string,
       public style?:string,
       public lat?: number ,
       public lon?: number,
       public website?: string,
       public favorite?: string,
       public price?: number
    )
    {
        this.name = name;
        this.address = address;
        this.visited = visited;
        this.description = description;
        this.style = name;
        this.lat = lat;
        this.lon = lon;
        this.website = website;
        this.favorite = favorite;
        this.price = price;
    }
}
  