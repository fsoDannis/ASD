function(doc) {
    if(doc._id.substr(0, 11) === "Supervisor:"){
        emit(doc._id.substr(11),{
            "fullname": doc.fullname,
            "page": doc.page,
        });
    }
};