const mongoose=require('mongoose');
const mongoURI='mongodb+srv://skgx:mongosk@cluster0.2wec8wx.mongodb.net/FEASTO-MERN?retryWrites=true&w=majority'
mongoose.set('strictQuery', true)


const mongoDB=async()=>{
   await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
        if(err) console.log(err);
        else{
        console.log("DB connected");
        const fetched_data=await mongoose.connection.collection("food_items");
        fetched_data.find({}).toArray(async function(err,data){

         const foodCategory=await mongoose.connection.collection("food_category");
         foodCategory.find({}).toArray(function(err,CatData){
            if(err) console.log(err)
            else {
            global.food_items=data;
            global.food_category=CatData;
            }
         })
      
        })
      }
   }
)
    
}

module.exports=mongoDB;













