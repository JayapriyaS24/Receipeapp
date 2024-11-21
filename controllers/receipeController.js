//  import receipe model
const Receipe = require('../models/receipe');



const receipeController = {
  getAllReceipes: async(request, response) =>{
    try{
      const receipes = await Receipe.find();
          return response.status(200).json(receipes);
          
    }catch(error){
    return  response.status(500).json({message:error.message});
    }
  },
  getReceipeByID: async(request, response)=>{
     try{
      //  get the receipe ID from the parameters
      const {id} = request.params;

      // find the document for the matching ID
      const receipe = await Receipe.findById(id);

      // If there is no document found, return a 404 not found status code
      if(!receipe) {
       return  response.status(404).json({message:'Receipe not found'});
      };
      // If the document found, return a 200 ok status code
       response.status(200).json(receipe);
      
     }catch(error){
      return response.status(500).json({message: error.message});
     }
  },
  createReceipe: async(request,response)=>{
  try{
      // extract the receipe details from the request body
    const {name, ingredients, instruction, duration} = request.body;
    
    // create a new receipe object with the extracted details
    const newReceipe = new Receipe({
      name,
      ingredients,
      instruction,
      duration
    });
    // save the new receipe object to the database
    await newReceipe.save();
    
    // send a 201 created status code and the new receipe object
    return response.status(201).json({message:'Receipe created successfully'});

  }catch(error){
     return response.status(500).json({message:error.message});
  }
       

  },
  updateReceipe: async(request, response)=>{
    try {
      // get  the receipe ID from the request parameters
      const {id} = request.params;

      // extract the receipe details from the request body
      const {name} = request.body;
      
      // find the document for the matching ID
      const receipe = await Receipe.findById(id);

      receipe.name = name;

      // save the updated document to the database
      await receipe.save();
      // send a 200 ok status code to the updated document
     return response.status(200).json({message:"Receipe updated successfully"});


    }catch(error){
     return response.status(500).json({message:error.message});
    }
  },
  deleteReceipe: async(request,response) =>{
      try {
      // get the receipe ID from the request parameters
        const { id } = request.params;
        
       // find the document for the matching ID  and delete it 
      const receipe = await Receipe.findByIdAndDelete(id);

      // if the document is found, return a 404 not found status code
      if(!receipe){
        response.status(404).json({message:'Receipe not found'})
      }
      //   send the 200 ok status code 
      response.status(200).json({message:'Receipe deleted successfully'})
        
      }catch(error){
       response.status(500).json({message:error.message});
      }
  }
 
}

module.exports = receipeController;