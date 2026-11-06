# Creación del Google Form institucional de ECOBIONICA

**Estado:** plantilla automatizada preparada; el Google Form todavía no está creado ni publicado en la cuenta institucional.

## Preparación (una sola vez)
1. Inicia sesión EXCLUSIVAMENTE con **fundacionecopiensaevolution@gmail.com** en [Google Apps Script](https://script.google.com/home/projects/create).
2. Borra el código inicial y pega el archivo `admin/crear-formulario-ecobionica.gs`.
3. Guarda el proyecto. Ejecuta la función `crearFormularioECOBIONICA`; acepta los permisos de Google para crear el Formulario y la Hoja de cálculo.
4. Abre **Registro de ejecución**. Allí aparecen la URL pública del formulario, la URL de edición y la hoja privada con las respuestas.
5. Revisa los ajustes de acceso al formulario y conserva **privadas** las respuestas. No compartas la hoja con acceso público.
6. Copia la URL pública final en la configuración de la web: en `solicitud-protesis.html` sustituye la pre-solicitud actual por un botón con ese enlace **sólo después de comprobar que el formulario funciona**. No enlaces a un formulario inexistente.

## Datos y seguridad
- El formulario recoge nombre, correo, WhatsApp, municipio, departamento, país, tipo de contacto, alcance de miembro superior y consentimiento.
- Nunca solicita ni permite cargar fotografías, datos clínicos, videos, medidas o historia médica en el primer contacto.
- La cuenta **fundacionecopiensaevolution@gmail.com** debe ser la propietaria y responsable de administrar permisos.
- Para la evaluación técnica, definir y formalizar el procedimiento y las autorizaciones sobre datos sensibles, representación de menores y eventuales transferencias internacionales.
- No escribas datos de salud en la pestaña de seguimiento; usa solo notas administrativas.
- El código previene crear un segundo formulario si lo ejecutas otra vez desde el mismo proyecto.

**Nota:** Apps Script necesita una acción inicial de la cuenta institucional. El conector Google Drive disponible en esta conversación está conectado con otra cuenta y no permite crear Google Forms directamente.
