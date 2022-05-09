## TECH
- Se usa handlebars como plantillas dinamicas [Documentacion](handlebarsjs.com)

- Se usa grunt para la compilacion del handlebars con el pluguin grunt-compile-handlebars [Documentacion](https://github.com/patrickkettner/grunt-compile-handlebars)
- La data dinamica se hospeda en [Firebase](https://console.firebase.google.com/project/azul-ccf0f/firestore/data/~2Fprofesionales~2FHztn7wAWJaO3YDp94YJ3)

## Compilacion
```bash
npm run build
```
_esto traera la data actualiazada en firebase y luego compilara el handlebars con esa misma data._