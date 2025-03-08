# API RESTful en Express con MySQL (Dockerizado)

Este proyecto es una API RESTful construida con Express.js y MySQL. Utiliza Docker para contener la aplicación y la base de datos, lo que facilita su implementación y ejecución en cualquier entorno. La API permite realizar operaciones CRUD (Crear, Leer) sobre una base de datos de teléfonos móviles.

**Tegnologias usadas:**
- nodejs (express)
- mysql
- docker (docker desktop)
- zod (para validation del backend)

### Requisitos para la app 

- Tener [Docker](https://www.docker.com/) instalado en tu máquina.
- Tener [Docker Compose](https://docs.docker.com/compose/) instalado para gestionar los servicios.

### Instalacion

clonamos el repositorio y accedemos a el repositorio clonado

```bash
  git clone https://github.com/UsopKing7/MVC-rest-api.git
  cd MVC-rest-api
```

### Ejecucion

Abrimos una terminal y ejecutamos el siguiente comando

```bash
  docker compose up --build
```
y ya tendriamos el servidor corriendo

## Problemas Comunes

1. **Error: "Ports are not available"**
   - Este error ocurre cuando el puerto `3306` ya está en uso por otro servicio en tu máquina. Asegúrate de no tener otro servicio MySQL corriendo o cambia el puerto mapeado en el archivo `docker-compose.yml`.

2. **El contenedor MySQL no se inicia**
   - Asegúrate de haber configurado correctamente las variables de entorno, especialmente las contraseñas y el nombre de la base de datos en el archivo `docker-compose.yml`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, puedes seguir estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu cambio 
3. Realiza tus cambios y haz commit de ellos 
4. Sube tus cambios a tu fork 
5. Abre un pull request desde tu fork hacia el repositorio original.

## Soporte

Si tienes problemas al utilizar este script o tienes preguntas, no dudes en abrir un **issue** en el repositorio. Nos esforzamos por responder lo antes posible y ayudar a resolver cualquier inconveniente.

## Agradecimientos

Gracias por utilizar este proyecto. Si lo encuentras útil, ¡no dudes en dejar una estrella ⭐ en GitHub!