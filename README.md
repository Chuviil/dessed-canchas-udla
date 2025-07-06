# Proyecto de Reservas de Canchas UDLA

Este es un proyecto desarrollado con [Next.js](https://nextjs.org/), que utiliza autenticación con [NextAuth.js](https://next-auth.js.org/) y [Keycloak](https://www.keycloak.org/) implementando control de acceso basado en roles (RBAC).

## Descripción

Esta aplicación permite a los usuarios de la UDLA reservar canchas deportivas de manera sencilla y segura. El sistema gestiona la autenticación y autorización de los usuarios mediante Keycloak y NextAuth, asegurando que solo los usuarios autorizados puedan acceder a las funcionalidades según su rol (administrador, usuario, etc).

## Tecnologías principales

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Keycloak](https://www.keycloak.org/)
- RBAC (Control de Acceso Basado en Roles)
- Tailwind CSS

## Primeros pasos

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Configuración de autenticación

Asegúrate de tener un servidor Keycloak configurado y los datos de conexión en las variables de entorno. Consulta la documentación interna para detalles de configuración.

## Estructura del proyecto

- `src/app/` - Páginas y rutas principales
- `src/components/` - Componentes reutilizables
- `src/constants.js` - Constantes globales
- `src/lib/nextauth/` - Configuración de NextAuth y Keycloak

## Recursos útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación NextAuth.js](https://next-auth.js.org/getting-started/introduction)
- [Documentación Keycloak](https://www.keycloak.org/documentation)

## Despliegue

Puedes desplegar la aplicación fácilmente en [Vercel](https://vercel.com/) o en tu infraestructura preferida.
