# Bullet List Component

Componente bullet list, responsable de crear una lista la cuál cambia de estilo según el dispositivo.  

<div align="center">

<img height="280" src="https://raw.githubusercontent.com/laguado415/itgloberspartnercl-bulletList/master/assets/img/Group%203.png"/>

</div>
  
## Configuración de uso

Para la configuracion se usara los valores por defecto como nombres de componentes, si personaliza el repositorio cambiaran algunos nombres como los de vendor, etc. 

###### 1 - Importe las dependecias al ` manifest.json`

```json
   "dependencies": {
    "{vendor}.bullets-diagramation": "0.x"
  }
```
######  2 - Agregue el list-content.bullets-group component a la página que deseé que renderice este componente, addicionalmente como children declarar un componente               slider-layout.
 ```json
   "list-context.bullets-group": {
    "title": "my list bullet",
    "children": ["slider-layout#bullet-list"],
    "props": {
      "bullets": [
        {
          "image": "/arquivos/image-1-banner-regalos.png",
          "titleBullet": "Title",
          "link": {
            "url": "/"
          }
        },
        {
          "image": "/arquivos/image-2-banner-regalos.png",
          "titleBullet": "Title 2",
          "link": {
            "url": "/"
          }
        },
        {
          "image": "/arquivos/image-3-banner-regalos.png",
          "titleBullet": "Title 3",
          "link": {
            "url": "/"
          }
        }
      ],
      "blockClass": "bullet-list"
    }
  },
  "slider-layout#bullet-list": {
    "props": {
      "itemsPerPage": {
        "desktop": 1
      },
      "infinite": true,
      "showPaginationDots": false,
      "blockClass": "bullet-list"
    }
  }
```

######  3 - Configuré las props.

## Props:

| Prop name      | Type     | Description                                          | Default value |
| -------------- | -------- | ---------------------------------------------------- | ------------- |
| `bullets`     | `Array` | Array de imagenes   |  `[]` |


### Bullets Props:

| Prop name      | Type     | Description                                          | Default value |
| -------------- | -------- | ---------------------------------------------------- | ------------- |
| `image`     | `String` | Url de imagen  |  `N/A` |
| `titleBullet`  | `String` | Titulo de bullet  |  `N/A` |
| `link`     | `object` | Recibe las propiedades del link |  `{}` |

### link Props:

| Prop name      | Type     | Description                                          | Default value |
| -------------- | -------- | ---------------------------------------------------- | ------------- |
| `url`     | `String` | Hipervinculo a otra pagina |  `N/A` |

## Configuración repositorio 
### Paso 1 - Clonación del repositorio

Para iniciar la [Clonación](https://github.com/vtex-apps/react-app-template) debe entrar a la pagina del repositorio de github una vez ahí buscar la opción que dice `Use this template`, para hacer una copia al repositorio.

Luego, acceda al directorio del repositorio usando su terminal.

### Paso 2 - Editar el Manifest.json

Una vez en el directorio del repositorio, es hora de editar el archivo `manifest.json` de la react app template, dentro del archivo, debe reemplazar los valores `vendor`, `name`, `version`, `title` y `description`.

 `vendor` es el nombre de la cuenta del partner en la que está trabajando
 `name` es el nombre de como se va a llamar su componente como dependencia
 `version` la versión inicial con la que se empezará a trabajar
 `title` título del componente que no está sujeto a como se va a declarar como dependencia por lo que puede ser cualquier título que desee
 `description` pequeña descripción para lo que sirve el componente
 
Ejemplo:

```json
{
  "vendor": "partner",
  "name": "name-component",
  "version": "0.0.x",
  "title": "Titulo del Componente",
  "description": "Pequeña descripción para lo que sirve el componente",
  ...
}
```

### Paso 3 - Editar el package.json

El primer `package.json` es el global, está al lado del `manifest.json`, vamos a cambiar su `version` y `name`.
 
Ejemplo:

```json
{
  "version": "0.0.x",
  "name": "name-component",
  ...
}
```

Y repetiremos el mismo proceso con el `package.json` que hay dentro de la carpeta de react.

### Paso 4 - Instalar dependencias de react

Para este paso ingresar a la carpeta de react, y una vez allí ejecutar en la consola el comando
```json
/> yarn
```
para que se instalen todas las dependencias necesarias

### Paso 5 - Crear componente

Si desea crear un componente en la carpeta de react/components se debe crear el archivo con el que se va a trabajar, ejemplo: `name.tsx`, luego crear su carpeta de componentes y empezar a desarrollar

### Paso 6 - Ejecute un preview de la tienda

Entonces ha llegado el momento de cargar todos los cambios que realizó en sus archivos locales a la plataforma. Para eso, use el comando `vtex link`.

Si el proceso se ejecuta sin ningún error, se mostrará el siguiente mensaje: `Aplicación vinculada con éxito`. Luego, ejecute el comando `vtex browser` para abrir una ventana del navegador que tenga su tienda vinculada.

Esto le permitirá ver los cambios aplicados en tiempo real, a través de la cuenta y el espacio de trabajo en el que está trabajando.

## Contributors
1. Jonathan Laguado  
