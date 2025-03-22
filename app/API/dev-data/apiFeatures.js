class APIFeatures{
    constructor(query,queryString){
        this.query=query;
        this.queryString=queryString
    }
   
    //!  Advance Filtering
    filter(){
        const queryObj={...this.queryString}
        let queryStr=JSON.stringify(queryObj)
        queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`)
        let parsedQuery = JSON.parse(queryStr);
        console.log(parsedQuery,queryObj,queryStr,'🦁🦁🦁🐱')
        if (this.queryString.name) {
            //parsedQuery={ name: 'assasw' } 
            //regex=contains, starts with, or ends with a specific string.
            parsedQuery.name = { $regex: this.queryString.name, $options: "i" };
            //  "i"	Case-insensitive (e.g., "rsv" matches "RSV4")
        }

       this.query=this.query.find(parsedQuery);
       
        console.log(queryStr,'😊😊😉')
        return this;
    }




  //! Sorting
    sort(){
    if(this.queryString.sort){
        const sortBy=this.queryString.sort.split(',').join(' ');
        this.query=this.query.sort(sortBy)
    }
    return this;
    }
 
    //! Field Limiting
    limitedFields(){
    if(this.queryString.fields){
        const fields=this.queryString.fields.split(',').join(' ')
        this.query=this.query.select(fields)
    }


  
    return this
    }
}

module.exports=APIFeatures;