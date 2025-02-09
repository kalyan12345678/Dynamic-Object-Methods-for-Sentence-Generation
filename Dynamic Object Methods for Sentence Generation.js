let sentenceBuilder = {

    subject: "I",
    
    verb: "am",
    
    object: "coding",
    
    buildSentence: function() {
        if(this.subject&&this.verb&&this.object) // checks if all the keys were present
            console.log(this.subject+" "+this.verb+" "+this.object)
        else
            console.log("Incomplete sentence")
    },
    updateProperty: function(property, value) {
        if(sentenceBuilder.hasOwnProperty(property))  //checks if the property is present in object
            sentenceBuilder[property]=[value]
        
        else
            console.log("Invalid property")
             console.log("")
    
    }
}
sentenceBuilder.buildSentence()
sentenceBuilder.updateProperty("verb", "am learning")
sentenceBuilder.buildSentence()
sentenceBuilder.updateProperty("subject", "The cat")
sentenceBuilder.buildSentence()
sentenceBuilder.updateProperty("mood", "happy")
sentenceBuilder.updateProperty("verb", "")
 sentenceBuilder.buildSentence()


  