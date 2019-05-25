# BingoJS

## 1. Creando estructura del proyecto

```bash
mkdir bingojs
cd bingojs
mkdir src
code .
```

Creamos los archivos index.css e index.js en sus respectivas carpetas, y creamos el archivo index.html referenciando a los dos archivos anteriores correctamente. 

Recuerda el `defer` en el script.js.

## 2. Inicializando proyecto

```bash
git init
code .gitignore
npm init -y
```

Recuerda editar el fichero `package.json` para indicar el nombre del proyecto, descripción y otros detalles.

## 3. Arrancar parcel para vigilar cambios en vivo en navegador

Una vez hecho esto, arrancamos parcel en la terminal. Recuerda que si no lo tienes instalado en tu equipo, debes hacer un `npm install -g parcel-bundler`:

```
parcel src/index.html --open
```

Recuerda que puedes crear tus propios scripts en `package.json` para que sea más cómodo ejecutar comandos complejos de terminal.