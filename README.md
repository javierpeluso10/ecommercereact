# Proyecto final del curso Reactjs de [Coder House](https://www.coderhouse.com/)

[Repositorio](https://github.com/javierpeluso10/ecommercereact)

**Profesor**: Sebastian Zuviria

**Alumno**: Javier Peluso

[*Creado con create-react-app*](https://es.reactjs.org/)

### Tipo del aplicativo web: ecommerce

### Dependencias utilizadas (ver en [package.json](https://github.com/javierpeluso10/ecommercereact/blob/main/package.json) )

### Iniciar el proyecto

#### Ten en cuenta que este proyecto utiliza una *Cloud Firestore* de [Google Firebase](https://firebase.google.com/) y los datos de acceso no están incluidos en el repositorio 

La base de firestore se utiliza tanto para traer la información de los productos y las categorias al aplicativo, como para generar ordenes de compra desde el aplicativo. 

Para simular este comportamiento es necesario crear un nuevo Project dentro de firebase que se titule ```coderhouse-ecommerce``` y agregar una web app al mismo dentro de la configuración de firebase (guarda los datos de configuración, los vamos a utilizar más adelante)

El proyecto debe contener dos colecciones: 

**products**  ```{ category: 'camisas', description: 'Descripcion de camisa', img: '', name:'nombre camisa', price: 'precio camisa en number', stock: 'valor en number'  }```

**categories** ```{ label: 'Camisas', order: '1', slug:'camisas'  }``` 

1. Descargá o clona el repositorio
2. Creá un nuevo proyecto en firebase con las indicaciones e información mencionada anteriormente
3. Remplaza los datos de configuración en el archivo  [firebase.js](https://github.com/javierpeluso10/ecommercereact/blob/main/src/services/firebase/index.js) con los datos que te administra firebase
4. Si no tenes instalado [nodejs](https://nodejs.org/), descargalo e instalalo
5. Instala create-react-app, abre la consola y tipea ```npm install``` 
6. Esperá que las dependencias mencionadas anteriormente se instalen correctamente 
7. En la misma consola ejecuta ```npm start```
8. Espera que se compile y luego se abrirá el aplicativo en tu explorador predeterminado

*Este aplicativo web es una simulación, por lo tanto la información proporcionada **no debe** ser considerada como real, tanto los precios, como la disponibilidad de stock han sido inventados para este proyecto. Es recomendable no proporcionar información real a la hora de completar el formulario de compra. Dicho formulario es parte de la simulación y no un compromiso de compra o reserva. Los articulos proporcionados por este aplicativo no están disponibles.*

### Deploy: https://ecommercereact-jvxe28li8-javierpeluso10.vercel.app/