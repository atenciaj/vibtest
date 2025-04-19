# Simulador de Examen de Vibraciones

Aplicación web para simular exámenes de vibraciones con sistema de registro y autenticación.

## Configuración de Brevo para envío de correos

### 1. Crear una cuenta en Brevo

1. Ve a [Brevo](https://www.brevo.com/)
2. Regístrate para una cuenta gratuita
3. Verifica tu correo electrónico

### 2. Configurar el dominio de envío

1. En el panel de Brevo, ve a Settings > Senders & Domains
2. Verifica tu dominio (el que usas con GoDaddy)
3. Sigue las instrucciones para agregar los registros DNS necesarios

### 3. Obtener la API Key

1. En el panel de Brevo, ve a Settings > API Keys & Tokens
2. Crea una nueva API Key
3. Copia la API Key generada

### 4. Configurar las variables de entorno en Netlify

1. Ve al panel de Netlify
2. Selecciona tu sitio
3. Ve a Site settings > Build & deploy > Environment
4. Agrega las siguientes variables:
   ```
   BREVO_API_KEY=tu_api_key_de_brevo
   EMAIL_FROM_ADDRESS=tu_correo_verificado@tudominio.com
   ```

### 5. Probar la configuración

1. Despliega los cambios a Netlify
2. Visita `https://tu-sitio.netlify.app/test-sendgrid.html`
3. Intenta enviar un correo de prueba

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# Construir para producción
npm run build
```

## Estructura del proyecto

- `src/`: Código fuente de la aplicación React
- `netlify/functions/`: Funciones serverless para Netlify
- `public/`: Archivos estáticos

## Características

- Preguntas reales de exámenes de vibraciones
- Temporizador configurable
- Retroalimentación inmediata
- Historial de intentos
- Revisión detallada de respuestas
- Diseño responsivo y moderno

## Requisitos

- Node.js 14.0.0 o superior
- npm 6.0.0 o superior

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/vibration-exam-simulator.git
```

2. Instala las dependencias:
```bash
cd vibration-exam-simulator
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Uso

1. En la página principal, haz clic en "Iniciar nuevo examen"
2. Responde las preguntas dentro del tiempo límite
3. Al finalizar, revisa tus resultados
4. Guarda el resultado para verlo más tarde
5. Accede al historial para ver todos tus intentos

## Tecnologías utilizadas

- React
- TypeScript
- Tailwind CSS
- LocalStorage para persistencia de datos

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. 