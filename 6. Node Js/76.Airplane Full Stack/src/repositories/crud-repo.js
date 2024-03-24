
class CrudRepo{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try{
            let response=await this.model.create(data);
            return response;
        }
        catch(err){
            console.log('Something went wtong');
            throw err;
        }
        
    }
    async destroy(data){
        try{
            let response=await this.model.destroy({
                where:{
                   id:data
                }
            });
            return response;
        }
        catch(err){
            console.log('Something went wtong');
            throw err;
        }
        
    }
    async get(data){
        try{
            let response=await this.model.findByPK(data);
            return response;
        }
        catch(err){
            console.log('Something went wtong');
            throw err;
        }
        
    }

    async getAll(data){
        try{
            let response=await this.model.findAll(data);
            return response;
        }
        catch(err){
            console.log('Something went wtong');
            throw err;
        }
        
    }
    async update(id,data){
        try{
            let response=await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response;
        }
        catch(err){
            console.log('Something went wtong');
            throw err;
        }
        
    }
}

module.exports=CrudRepo;