
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
            console.log('Something went wrong repo');
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
            console.log('Something went wrong');
            throw err;
        }
        
    }
    async get(data){
        try{
            let response=await this.model.findByPk(data);
            return response;
        }
        catch(err){
            console.log('Something went wrong');
            throw err;
        }
        
    }

    async getAll(){
        try{
            let response=await this.model.findAll();
            return response;
        }
        catch(err){
            console.log('Something went wrong');
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
            console.log('Something went wrong');
            throw err;
        }
        
    }
}

module.exports=CrudRepo;