# Template SVELTEKIT-SUPABASE:
Este template pretende ser una forma rapida de iniciar proyectos de svelte 5 con lo escencial supabase para ir escalandolo progresivamente.

#### STACK
- `svelte 5.19.7`
- `sveltekit 2.17.1`
- `tailwind 4.0.3`
- `typescript 5.7.3`
- `bun 1.2.2`
- `Vite 6.0.11 `
- `Prettier 3.4.2`


## Instrucciones rapidas

- 🔹 Crear un nuevo repositorio desde la opcion **use this template** en este [repositorio](https://github.com/dei8bit-free/sveltekit-supabase)
- 🔹 Clonarlo 
- 🔹 Instalar dependencias
- 🔹 Actualizar los archivos  `.env.local`  y `+page.server.ts`  con los datos de **supabase**
- 🔹 levantar el servidor y testear


## _↓↓ Mas info ↓↓_

> [!IMPORTANT]
> Para poder instalar los paquetes con el gestor bun el cual encarecidamente recomiendo por [multiples beneficios](https://www.dreamhost.com/blog/bun-vs-node/), es necesario [tener instalado bun](https://bun.sh/docs/installation#windows)

### instalacion de dependencias: 📦

```shell
  bun install 
```

### start develop server: 👨‍💻
```shell
  bun run dev 
```

```shell
  bun run dev  --open
```

### build: 🏗️
Aqui bun ejecutara el script `vite build`

```shell
  bun run build 
```


### preview: 👀
Aqui bun ejecutara el script `vite preview`

```shell
  bun run preview 
```

> [!NOTE]  
> Para usar bun como bundler es necesario hacer [configuraciones extra](https://bun.sh/guides/ecosystem/sveltekit)


### deploy: 🚀
Para deployar un proyecto es necesario agregar un adaptador.
sveltekit provee algunos adaptadores oficiales: https://svelte.dev/docs/kit/adapters
> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
---

### Quick test: ⚡
Luego de crear un proyecto en supabase e instalar las dependencias; se puede rapidamente probar la conexion con los siguientes pasos:

- recuperar la *URL* y el *ANON* key, del proyecto en supabase y actualizar los datos el archivo `.env.local`
- crear una tabla en supabase
- insertar algunos datos
- Descomentar los archivos:` +page.svelte` , `+page.server.ts` , `supabaseClient.ts` y `.env.local`
- Dentro del archivo `+page.server.ts` ;reemplazar "tableName" con el nombre de la tabla creada.
- Empezar el servidor de desarrollo (`bun run dev`)

_Se deberian ver los datos de la tabla tanto por consola en el cliente como en el servidor, estos logs estan en `+page.svelte`_

> [!WARNING]
> Una vez echo esto es importante volver a agregar el archivo .env.local al .gitignore


---
---
## Estructura general: 🌿
```
.
├── src/
│   ├── lib/
│   ├── routes/
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   ├── app.css
│   ├── app.d.ts
│   └── app.html
├── static/
├── .gitignore
├── .prettierignore
├── .prettierrc
├── bun.lock
├── package.json
├── README.MD
├── .env.local
├── svelte.config.js
├── tailwind-config.js
├── todo.md
├── tsconfig.json
└── viteconfig.json
```
_A continuacion una definicion breve de cada carpeta o archivo_

### arhivos
- 💾 `.gitignore`: Lista de archivos/carpetas ignorados por Git.
- 💾 `.prettierignore`: Lista de archivos/carpetas ignorados por Prettier.
- 💾 `.prettierrc`: Configuración de estilos de código para Prettier.
- 💾 `bun.lock`: Versiones exactas de dependencias (Bun).
- 💾 `package.json`: Metadatos y dependencias del proyecto
- 💾 `README.md`: Documentación del proyecto.
- 💾 `.env.local`: Variables de entorno locales (deben ser ignoradas en .gitignore).
- 💾 `svelte.config.js`: Configuración de svelte y SvelteKit. (adapters - aliases - output- etc... )
- 💾 `tailwind.config.js`: Configuración de Tailwind CSS. (theme, variants, plugins, colors, breakpoints, and purge settings)
- 💾 `todo.md`: Lista de tareas pendientes en formato opionado pero flexible.
- 💾 `tsconfig.json`: Configuración de TypeScript.
- 💾 `vite.config.json`: Configuración de Vite.

### carpetas y sub archivos
- 📁 `src/`: Contiene el código fuente principal de la aplicación.
- 📁 `lib/`: Componentes reutilizables y utilidades (se puede importar por default con el alias '$lib')
- 📁 `routes/`: Páginas y rutas de la aplicación (cada ruta es una carpeta con un archivo +page.svelte).
- 💾  `+layout.svelte`: Layout prinicipal  (debe contener un children y es  el unico layout que no se puede ignorar)
- 💾  `+page.svelte`: primer pagina de la app
- 💾 `app.css`: Estilos globales de la aplicación.
- 💾 `app.d.ts`:  Declaraciones de tipos globales para TypeScript.
- 💾 `app.html`:  Plantilla HTML principal de la aplicación donde svelte renderiza todo lo que este en el layout.
- 📁 `static/`: Archivos estáticos (imágenes, fuentes, etc.) que se sirven directamente sin optimizacion alguna.
---

# SUPABASE:
Supabase ofrece varios paquetes oficiales para diferentes casos de uso.
debido a que este template no asume que el proyecto necesita autenticacion, entonces solo se instala el paquete escencial `@supabase-js`
el cual permite realizar CRUDS sencillos a excepcion de aquellos que involucren Row Level Security con solo usuarios autenticados

En caso de necesitar otras funcionalidades probablemente alguno de los siguientes paquetes deberian de agregarse.

- `@supabase/ssr` : [link](https://www.npmjs.com/package/@supabase/ssr)
- `@supabase/auth-ui-svelte` : [link](https://www.npmjs.com/package/@supabase/auth-ui-svelte)
- `@supabase/auth-ui-shared` : [link](https://www.npmjs.com/package/@supabase/auth-ui-shared)
- `@supabase/storage-js` : [link](https://www.npmjs.com/package/@supabase/storage-js)
- `@supabase/functions-js` : [link](https://www.npmjs.com/package/@supabase/functions-js)

> [!TIP]
> Para evitar imprevistos o aparentes bugs, es importante considerar las RLS actuales de la tabla y que el proyecto este habilitado

> [!NOTE]
> Si se va a agregar autenticacion es necesario:
> - Cambiar site URL dentro de  URL configuration  a la url actual: 'http://localhost:5174/' (en caso de que este deployado en un dominio sera otra la url)
> - Cambiar redirect URLs a: 'http://localhost:5174/**' (para incluir todas las rutas generadas con sveltekit)

---

## configuracion del IDE: ⚙️
Hay una carpeta llamada `.vscode` la cual no inclui en la estructura general del proyecto puesto que es optativa y deberia de eliminarse una vez configurado todo.
La misma tiene cuatro archivos, los cuales sugieren utilidades opcionales:

- `extensions.json` :  extensiones recomendadas para el stack actual
- `markdown.json` : snippets para poder trabajar comodamente en markdown , especificamente en el archivo todo.md 
- `settings.json` : Configuraciones para trabajar comodamente con svelte, markdown, typescript y vscode
- `svelte.json`: snippets utiles para trabajar en archivos.svelte