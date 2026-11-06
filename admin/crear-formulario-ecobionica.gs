/**
 * ECOBIONICA - Formularios de primer contacto (sólo miembro superior)
 * EJECUTAR EXCLUSIVAMENTE DESDE fundacionecopiensaevolution@gmail.com
 * Una ejecución crea: Google Form + Google Sheet de respuestas + pestaña privada de seguimiento.
 *
 * NO SE SOLICITAN en este formulario diagnósticos, historia clínica, fotografías,
 * videos ni medidas del cuerpo. La evaluación sensible requiere otra fase
 * con autorizaciones y protocolos de seguridad.
 */
function crearFormularioECOBIONICA() {
  const CUENTA = 'fundacionecopiensaevolution@gmail.com';
  const effective = (Session.getEffectiveUser().getEmail() || '').trim().toLowerCase();
  if (effective && effective !== CUENTA) {
    throw new Error('No ejecutar desde una cuenta personal. Inicie sesión como ' + CUENTA);
  }
  const props = PropertiesService.getScriptProperties();
  const prevId = props.getProperty('ECOBIONICA_FORM_ID');
  if (prevId) {
    const anterior = FormApp.openById(prevId);
    Logger.log('Ya existe el formulario de ECOBIONICA.');
    Logger.log('Formulario público: ' + anterior.getPublishedUrl());
    Logger.log('Edición: ' + anterior.getEditUrl());
    Logger.log('Hoja de respuestas: https://docs.google.com/spreadsheets/d/' + anterior.getDestinationId() + '/edit');
    return;
  }
  const form = FormApp.create('ECOBIONICA | Solicitud de orientación para prótesis de miembro superior', true);
  form.setDescription(
    'FUNDACIÓN ECOPIENSA EVOLUTION - PROGRAMA ECOBIONICA\n' +
    'Pre-solicitud GRATUITA de orientación, exclusivamente para MIEMBRO SUPERIOR.\n' +
    'Los datos de contacto se usarán para responder a la consulta y coordinar los próximos pasos. ' +
    'No adjunte diagnósticos, fotografías, medidas, vídeos ni historia clínica. ' +
    'Presentar este formulario NO garantiza una prótesis, aprobación o fecha de entrega.'
  );
  form.setCollectEmail(false)
      .setLimitOneResponsePerUser(false)
      .setShowLinkToRespondAgain(false)
      .setPublishingSummary(false)
      .setProgressBar(true)
      .setConfirmationMessage('Recibimos tu pre-solicitud de orientación ECOBIONICA. La Fundación revisará la información de contacto. No envíes datos médicos ni fotografías por este formulario. La recepción no garantiza fabricación ni entrega.');
  form.addSectionHeaderItem().setTitle('1 · Contacto institucional')
      .setHelpText('Sólo datos mínimos para responder a tu solicitud.');
  form.addTextItem().setTitle('Nombre de la persona que realiza la solicitud').setRequired(true);
  form.addTextItem().setTitle('Correo electrónico de contacto').setRequired(true)
      .setValidation(FormApp.createTextValidation().requireTextIsEmail().setHelpText('Escribe un correo válido.').build());
  form.addTextItem().setTitle('WhatsApp o teléfono de contacto').setRequired(true);
  form.addTextItem().setTitle('Ciudad o municipio').setRequired(true);
  form.addTextItem().setTitle('Departamento / región').setRequired(true);
  form.addTextItem().setTitle('País').setRequired(true);
  form.addMultipleChoiceItem().setTitle('¿En calidad de quién realiza el contacto?')
      .setChoiceValues(['Persona interesada','Madre, padre o representante legal','Otro familiar autorizado','Entidad u organización que orienta']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('¿La consulta se refiere a un dispositivo de MIEMBRO SUPERIOR?')
      .setChoiceValues(['Sí','No, deseo recibir información general']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('¿Necesita una persona representante legal para continuar una futura evaluación?')
      .setChoiceValues(['Sí','No','Prefiero consultar esto directamente con la Fundación']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Canal preferido para respuesta')
      .setChoiceValues(['Correo electrónico','WhatsApp / llamada']).setRequired(true);
  form.addSectionHeaderItem().setTitle('2 · Condiciones y consentimiento')
      .setHelpText('La evaluación técnica y eventuales imágenes, medidas o datos de salud se tramitan únicamente en una fase posterior, con autorizaciones específicas y canales privados.');
  form.addCheckboxItem().setTitle('Autorización para el contacto inicial')
      .setHelpText('Autorizo a Fundación Ecopiensa Evolution a utilizar mis datos mínimos de contacto con la finalidad exclusiva de gestionar y responder esta pre-solicitud. Entiendo que puedo solicitar información sobre su tratamiento por el correo institucional y que no debo aportar datos de salud en este formulario.')
      .setChoiceValues(['Sí, autorizo este contacto inicial']).setRequired(true);
  form.addCheckboxItem().setTitle('Conocimiento de condiciones')
      .setChoiceValues(['Entiendo que la solicitud no garantiza fabricación, asignación ni entrega de un dispositivo, y que esta etapa es sólo de orientación.']).setRequired(true);

  const ss = SpreadsheetApp.create('ECOBIONICA | Registro privado de solicitudes - FUNDACIÓN ECOPIENSA EVOLUTION');
  const hoja = ss.getSheets()[0].setName('Seguimiento interno');
  const header = ['ID interno','Fecha de recepción','Nombre solicitante','Correo','Teléfono','Municipio','Tipo de contacto','Miembro superior','Estado del caso','Responsable','Siguiente contacto','Notas administrativas sin datos de salud'];
  hoja.getRange(1,1,1,header.length).setValues([header]).setBackground('#08796c').setFontColor('#FFFFFF').setFontWeight('bold');
  hoja.setFrozenRows(1);
  hoja.setColumnWidths(1,header.length,160);
  hoja.setColumnWidth(12,330);
  const estados = ['Recibido','Orientación inicial','Pendiente de información administrativa','Consentimientos pendientes','Revisión interna','Derivado a evaluación técnica','En seguimiento','Cerrado'];
  hoja.getRange('I2:I5000').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(estados,true).build());
  form.setDestination(FormApp.DestinationType.SPREADSHEET,ss.getId());
  props.setProperty('ECOBIONICA_FORM_ID',form.getId());
  props.setProperty('ECOBIONICA_SHEET_ID',ss.getId());
  ScriptApp.newTrigger('registrarPreSolicitudECOBIONICA').forForm(form).onFormSubmit().create();
  form.setPublished(true);
  Logger.log('FORMULARIO PÚBLICO: ' + form.getPublishedUrl());
  Logger.log('EDITAR FORMULARIO: ' + form.getEditUrl());
  Logger.log('HOJA PRIVADA DE RESPUESTAS: ' + ss.getUrl());
  Logger.log('Sólo la cuenta institucional debe conservar permisos de edición y acceso a respuestas.');
}

function registrarPreSolicitudECOBIONICA(e) {
  if (!e || !e.response) return;
  const props = PropertiesService.getScriptProperties();
  const ss = SpreadsheetApp.openById(props.getProperty('ECOBIONICA_SHEET_ID'));
  const sh = ss.getSheetByName('Seguimiento interno');
  const vals = {};
  e.response.getItemResponses().forEach(function(x){vals[x.getItem().getTitle()] = x.getResponse();});
  function get(title){return vals[title] || '';}
  const lock = LockService.getScriptLock(); lock.waitLock(30000);
  try {
    const id = 'ECO-' + Utilities.formatDate(new Date(), 'America/Bogota', 'yyyyMMdd') + '-' + String(sh.getLastRow()).padStart(4,'0');
    sh.appendRow([
      id,
      e.response.getTimestamp(),
      get('Nombre de la persona que realiza la solicitud'),
      get('Correo electrónico de contacto'),
      get('WhatsApp o teléfono de contacto'),
      get('Ciudad o municipio'),
      get('¿En calidad de quién realiza el contacto?'),
      get('¿La consulta se refiere a un dispositivo de MIEMBRO SUPERIOR?'),
      'Recibido',
      '',
      '',
      ''
    ]);
  } finally { lock.releaseLock(); }
}