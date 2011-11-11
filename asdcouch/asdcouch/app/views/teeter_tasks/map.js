function(doc) {
    if(doc._id.substr(0, 13) === "teeter_tasks:"){
        emit(doc._id.substr(13),{
            "tasks": doc.tasks,
        });
    }
};