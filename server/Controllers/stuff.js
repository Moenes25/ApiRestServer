const Thing = require('../Models/Thing')

createThing = (req, res) => {
    const {body,title,description,price} = req.body
  try{
        const thing = new Thing({
            title,
            description,
            price
            
        })

        thing.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: thing._id,
                message: 'Thing created!',
            })
        })
        if (!thing) {
            return res.status(400).json({ success: false, error: err })
        }
    } catch(e){
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a thing',
            })
        }
    }

   

    

    
        
}
  module.exports = {
      createThing,
  }