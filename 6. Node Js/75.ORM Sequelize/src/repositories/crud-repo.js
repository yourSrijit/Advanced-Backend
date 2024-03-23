class CrudRepo {
    constructor(model){
        this.model=model
    }
    async create(data){
        try{
            const res=await this.model.create(data);
            return res;
        }
        catch(err){
          console.log('Something went wrong');
          throw err;
        }
    }


    // Delete
    async destroy(data){
        try{
            const res=await this.model.destroy({
                where:{
                    id:data
                }
            });
            return res;
        }
        catch(err){
          console.log('Something went wrong');
          throw err;
        }
    }

    async getData(data){
        try{
            const res=await this.model.findByPK(data);
            return res;
        }
        catch(err){
          console.log('Something went wrong');
          throw err;
        }
    }

    async gettAllData(){
        try{
            const res=await this.model.findAll();
            return res;
        }
        catch(err){
          console.log('Something went wrong');
          throw err;
        }
    }

    async update(id,data){
        try{
            const res=await this.model.update(data,{
                where:{
                    id
                }
            });
            return res;
        }
        catch(err){
          console.log('Something went wrong');
          throw err;
        }
    }
}

module.exports=CrudRepo