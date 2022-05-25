## TECH
- Se usa handlebars como plantillas dinamicas [Documentacion](handlebarsjs.com)

- Se usa grunt para la compilacion del handlebars con el pluguin grunt-compile-handlebars [Documentacion](https://github.com/patrickkettner/grunt-compile-handlebars)
- La data dinamica se hospeda en [Firebase](https://console.firebase.google.com/project/azul-ccf0f/firestore/data/~2Fprofesionales~2FHztn7wAWJaO3YDp94YJ3)


## Instalacion & requerimientos

- Ruby & SASS

    - Para verificar si ya tienes Ruby:
       ```bash
      ruby -v
      ```

    - Para instalar ruby ejecuta:

      apt (Debian or Ubuntu)
      ```bash
      sudo apt-get install ruby-full
      ```
      Homebrew (macOS)
      ```bash
      brew install ruby
      ```
      Windows Package Manager
      ```bash
      winget install Ruby
      ```

    - Para instalar SASS (despues de ruby)
      ```bash
      sudo gem install sass
      ```

- Node y NPM

  Es rocomendado usar NVM, [aqui](https://github.com/nvm-sh/nvm#installing-and-updating) las instrucciones de instalacion

  _Nota: istalar Node 18+_

- Paquetes y librerias

  ```bash
    npm install
  ```

## Compilacion
```bash
npm run build
```
_esto traera la data actualiazada en firebase y luego compilara el handlebars con esa misma data._

## Desarrollo
```bash
npm run dev
```
Esto compilara el proyecto y levantara un servidor de desarrollo en el pueto 8000, [localhost:8000](http://localhost:8000/) con los contenidos de directorio `dist` (si dist no existe sera creado automaticamente al compilar).

Cualquier cambio hecho en el directoria `src` desencadenara que se compilen de nuevo los archivos relacionados al cambio y refrescara la ventana donde esta visualizandose el proyecto para ver los cambios de inmediato.

--------------

Para obtener la info de firebase actualizada en cualquier momento
```bash
npm run get_data
```