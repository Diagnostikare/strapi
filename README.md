# Diagnostikare — Strapi CMS

CMS headless basado en **Strapi v5** que sirve el contenido y la configuración de la plataforma Diagnostikare. Expone una API REST y GraphQL consumida por las aplicaciones web y móvil del proyecto.

---

## Requisitos

| Herramienta | Versión |
|-------------|---------|
| Node.js     | `>=20.0.0 <=22.x.x` |
| npm         | `>=6.0.0` |
| Yarn        | Recomendado |
| PostgreSQL  | Compatible con pg `8.x` |

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Base de datos
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

# Servidor
HOST=0.0.0.0
PORT=1337
URL=http://localhost:1337

# Seguridad
APP_KEYS=key1,key2,key3,key4
JWT_SECRET=your-jwt-secret

# Opcional
WEBHOOKS_POPULATE_RELATIONS=false
STRAPI_DEV_MODE=true   # Si es "true", yarn start ejecutará en modo develop
```

---

## Instalación y desarrollo local

```bash
# 1. Instalar dependencias
yarn install

# 2. Iniciar en modo desarrollo
yarn dev
```

### Desarrollo con Railway (base de datos remota)

```bash
# Vincular al servicio de Railway
railway link

# Iniciar inyectando las variables de entorno de Railway
railway run bash -c 'URL=http://localhost:1337 yarn develop'
```

Accede al panel de administración en `http://127.0.0.1:1337/admin`.

---

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `yarn dev` / `yarn develop` | Inicia Strapi en modo desarrollo con hot-reload |
| `yarn start` | Inicia Strapi en modo producción |
| `yarn build` | Compila la aplicación para producción |
| `yarn console` | Abre la consola interactiva de Strapi |
| `yarn deploy` | Despliega la aplicación |
| `yarn upgrade` | Actualiza Strapi a la última versión |
| `yarn upgrade:dry` | Simula la actualización sin aplicar cambios |

---

## Arquitectura

### Tipos de contenido (APIs)

| API | Descripción |
|-----|-------------|
| `blog` | Posts del blog — localizado, con borrador/publicación |
| `site` | Configuración global del sitio |
| `theme` | Configuración de tema visual |
| `webpage` | Contenido de páginas individuales |
| `home` | Contenido de la página principal |
| `about` | Página "About / Nosotros" |
| `faq` | Preguntas frecuentes |
| `privacy` | Política de privacidad |
| `terms-page` | Página de términos y condiciones |
| `extra-term` / `extra-terms-config` | Términos adicionales y su configuración |
| `hidden-feature` / `hidden-feature-config` | Features ocultas y su configuración |
| `lab` | Laboratorios / experimentos |
| `organization` | Datos de organizaciones |
| `service` | Servicios ofrecidos |
| `service-flow` | Flujo de servicios |
| `service-theme` | Tema visual por servicio |
| `strategie` / `strategie-config` | Estrategias y configuración |
| `principal-navbar` | Barra de navegación principal |
| `side-navbar` | Barra de navegación lateral |
| `website` | Configuración general del website |

### Componentes reutilizables

| Grupo | Componentes destacados |
|-------|----------------------|
| `boe` | `login-data`, `navbar`, `table-data` |
| `labs` | `labs-card`, `labs-code`, `labs-tag`, `labs-access`, `labs-experiment-details`, `main-section`, `color-tag-picker` |
| `navbar` | `nav-item` |
| `webpage` | `header`, `footer`, `card`, `carousel`, `cta`, `button`, `link`, `subnav`, `social-icon`, `site-map`, `certificates`, `score-board`, `award`, `app-block` |
| `pwa` | Componentes UI de la PWA: `home`, `meeting`, `scheduling-card`, `interview`, `wizard`, `wallet`, `terms-content`, `faqs`, `splash`, `emergency`, entre otros |

---

## Plugins activos

| Plugin | Descripción |
|--------|-------------|
| `@strapi/plugin-graphql` | API GraphQL con introspección habilitada |
| `@strapi/plugin-users-permissions` | Autenticación y permisos de usuarios |
| `@strapi/plugin-color-picker` | Selector de color en el panel admin |
| `@strapi/provider-upload-local` | Almacenamiento local de archivos multimedia |
| `strapi-advanced-uuid` | Generación de UUIDs avanzados para entidades |
| `strapi-import-export` | Importación y exportación de contenido |
| `strapi-plugin-media-extended` | Gestión extendida de medios |
| `strapi-plugin-rich-text-blocks-extended` | Editor de bloques de texto enriquecido |
| `@chartbrew/plugin-strapi` | Integración de analíticas con ChartBrew |
| `i18n` (built-in) | Internacionalización de contenido |

---

## Base de datos

- **Motor**: PostgreSQL
- **Cliente**: `pg@8.17.1`
- **Pool de conexiones**: min `0` / max `7`
- **Configuración**: via `DATABASE_URL` (connection string)

---

## Despliegue

El proyecto está configurado para desplegarse en **Railway** usando Railpack.

```json
// railway.json
{
  "build": { "buildCommand": "yarn build" },
  "deploy": { "startCommand": "yarn start" }
}
```

El flujo de CI/CD ejecuta `yarn build` en la fase de construcción y `yarn start` al iniciar el servicio.

---

## Estructura del proyecto

```
strapi/
├── config/               # Configuración de Strapi (DB, server, plugins, middleware)
│   └── env/              # Overrides por entorno (development, beta)
├── database/
│   └── migrations/       # Migraciones de base de datos
├── public/
│   └── uploads/          # Archivos subidos (almacenamiento local)
├── src/
│   ├── api/              # Endpoints con estructura MVC por recurso
│   ├── components/       # Componentes reutilizables (boe, labs, navbar, pwa, webpage)
│   ├── extensions/       # Extensiones de plugins (users-permissions)
│   └── index.js          # Bootstrap y register hooks
└── types/
    └── generated/        # Tipos TypeScript generados automáticamente
```
