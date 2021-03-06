

module.exports ={
    //Create Method
    create(title, body) {
        //Fetch TODO from Db file
        const db = this.list();


        //Create New TODO file
        const newTodo = {title, body, completed: false}

        //Merge OLd Data with New Data
        db.push(newTodo);

        //write TODO to DB file
        this.save(db);
    },
    //update Todo completed status
    toggle (index){
        //fetch all data
        const db= this.list();

        //fetch TODO by index
        const todo =db[index];

        //Reverse TODO completed
        todo.completed = !todo.completed;

        //sve todo completed
        this.save(db);
    },

    //Save Method
    save(data){
        fs.writeFileSync("./db.json", JSON.stringify(data));
    }
}