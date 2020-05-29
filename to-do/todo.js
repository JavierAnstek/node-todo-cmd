const fs = require('fs');

// array que guarda la info
let listToDo = [];

// guarda los datos en la db
const saveDB = () => {
    // parsea la info a type json
    let data = JSON.stringify(listToDo);

    // guarda la información en un archivo
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

// Lee la data de la db
const readList = () => {
    try {
        listToDo = require('../db/data');
    } catch (error) {
        listToDo = [];
    }

    return listToDo;
}

// actualiza la lista FINDINDEX
const update = (descripcion, completado) => {
    let listado = readList();
    // busca en la lista el valor el index que corresponde
    let index = listado.findIndex((tarea) => tarea.descripcion === descripcion);
    // valida existencia de datos
    if (index >= 0) {
        listToDo[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }
};

// borra la lista FILTER
const del = (descripcion) => {
    let listado = readList();
    // busca en la lista el valor el index que corresponde
    let newList = listado.filter((tarea) => tarea.descripcion !== descripcion);
    // valida existencia de datos
    if (listado.length === newList.length) {
        return false;
    } else {
        listToDo = newList;
        saveDB();
        return true;
    }
};

// función que crea las tareas
const crear = (descripcion) => {
    // carga la DB
    listToDo = readList();

    //creamos la tarea
    let todo = {
        descripcion,
        completado: false
    };

    //incluimos la tarea en el listado
    listToDo.push(todo);
    saveDB();

    return todo;
}

module.exports = { crear, readList, update, del };