## APLICACIÓN NODE PARA LISTA DE TAREAS MEDIANTE COMANDOS

Ésta aplicación permite la creación de listas de tareas mediante comandos de consola para
almacenar los datos en un archivo json que aumente la persistencia de la información.

no olvidar ejecutar comando

```
npm install
```

los comandos para operar con la aplicacion son los siguientes:

*** Crear tarea
parametro -D: indica el nombre de la tarea a crear
```
node app crear -D "Descripción Nombre Tarea"
```

*** Actualizar 
parametro -D: indica el nombre de la tarea a buscar para modificar
parametro -C: indica si la tarea fue o no completada
```
node app actualizar -D "Descripción Nombre Tarea" -C true/false
```

*** Listar 
```
node app listar
```

*** Borrar tarea
parametro -D: indica el nombre de la tarea a borrar
```
node app borrar -D "Descripción Nombre Tarea"
```