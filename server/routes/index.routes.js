const Pirate =require("../controllers/index.controller");

module.exports=app=>{
    app.get("/api/Pirate", Pirate.findAll);
    app.get("/api/Pirate/:id", Pirate.findOne);
    app.put("/api/Pirate/:id", Pirate.update);
    app.post("/api/Pirate/", Pirate.create);
    app.delete("/api/Pirate/:id", Pirate.delete);
};