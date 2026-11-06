# Google Forms · ECOBIONICA · Solicitudes de miembro superior

## Estado (6 de noviembre de 2026)

**Formulario generado por Google Apps Script, según registro de ejecución aportado por la Fundación.** El registro indica que la ejecución terminó correctamente y que se creó la hoja de respuestas. Su propietario, las restricciones de acceso público y la recepción real de respuestas aún deben revisarse desde Google Forms/Drive.

**Formulario público para beneficiarios:** https://docs.google.com/forms/d/e/1FAIpQLSe3aQqmd3_6A7MqqYG-pXsvI5Hu9ucstaJUUokhXL24n8fYSw/viewform

**Web oficial con guía integrada, modelos reales y un único Google Form público:**
https://fundacionecopiensaevolution.github.io/ECOBIONICA/solicitud-protesis.html

**No vuelva a ejecutar el código creando otro proyecto de Apps Script**, porque podría duplicar el formulario o generar otra hoja de respuestas. Mantenga el proyecto y los registros existentes.

## Comprobaciones desde la cuenta de la Fundación

1. Abrir el formulario en una ventana de incógnito para confirmar que permite responder desde fuera de la cuenta propietaria.
2. Revisar que los logos institucionales de la Fundación y del programa ECOBIONICA se muestren correctamente. Si no, agregarlos desde el editor de Google Forms.
3. En Google Forms > Respuestas, comprobar que esté activada la recepción y que el destino sea la hoja privada correcta.
4. En Google Sheets, comprobar que existan las pestañas **Respuestas del formulario** y **Seguimiento interno** (los nombres pueden variar). Conservar la hoja sin acceso público.
5. Revisar en Apps Script > Activadores que exista el evento de formulario enviado para la función `registrarPreSolicitudECOBIONICA`.
6. Hacer **una** solicitud de prueba claramente identificada como ficticia, sin datos personales reales ni médicos. Verificar que aparezca en la pestaña de respuestas y en **Seguimiento interno** con un ID tipo ECO-AAAAMMDD-0001. Eliminar después el registro de prueba de ambas pestañas si corresponde.
7. Para probar el uso desde móvil, abrir la página y usar el botón alternativo **Abrir Google Form**, en caso de que el navegador restrinja el iframe.
8. Revisar la opción de Google Forms para no exigir inicio de sesión si se desea recibir solicitudes de personas sin cuenta Google; aplicar medidas razonables contra spam.

## Privacidad

El formulario **no está destinado a recoger datos médicos, fotografías, vídeos, medidas corporales o historias clínicas**. Contiene datos de contacto y una confirmación de que la consulta se refiere a miembro superior.

El antiguo PDF imprimible de solicitud es redundante y se retiró del repositorio público; la guía de apoyo está completamente integrada en la página web. La ficha técnica también se retiró del repositorio público: la toma de medidas y evidencias debe hacerla exclusivamente personal profesional o de apoyo autorizado. Hay una ficha en blanco de dos páginas preparada como archivo de trabajo interno; conservarla en un almacenamiento privado de la Fundación, no en GitHub ni en formularios públicos. La información privada de personas beneficiarias no debe guardarse en el repositorio GitHub.

La evaluación técnica posterior requerirá permisos específicos, responsable del tratamiento, protección para menores, controles de acceso y, cuando corresponda, medidas para transferencias internacionales de datos.

## Administración

El enlace de edición del formulario y el enlace a la hoja de respuestas deben circular **solo entre personas autorizadas** de la Fundación. No agregarlos a esta web pública ni a este archivo del repositorio.

Código fuente original para mantenimiento: [crear-formulario-ecobionica.gs](./crear-formulario-ecobionica.gs).

Para evitar inconsistencias, **no cambie los títulos de las preguntas en Google Forms sin actualizar también el mapeo de respuestas** en `registrarPreSolicitudECOBIONICA`.
