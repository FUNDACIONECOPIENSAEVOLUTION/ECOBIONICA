# ECOBIONICA — Campaña internacional de donaciones PayPal (2026)

**Fuente:** el representante legal compartió el QR y los códigos oficiales de su panel PayPal el 4 de noviembre de 2026.  
**Organización:** Fundación Ecopiensa Evolution · NIT 900998128-1 · Colombia.  
**Nombre en PayPal:** ECOBIONICA: Tecnología 3D social para la Inclusión.  
**Identificador oficial:** `CLQ5X4MWH87W8`.  
**Estado de la campaña en el panel:** Activa (mensaje «Se creó la campaña y ya puede compartirla»).  
**Meta pública de campaña:** USD 90,000. Provisión estimada para comisiones, cambio y una posible depreciación del COP. **No** equivale a un neto garantizado; presupuesto objetivo interno aproximado COP 250 millones.

## Enlaces públicos verificados por el QR suministrado

- **Página PayPal:** https://www.paypal.com/donate?campaign_id=CLQ5X4MWH87W8
- **QR original (texto extraído):** https://www.paypal.com/donate?campaign_id=CLQ5X4MWH87W8&source=qr
- **Tarjeta embebible PayPal:** https://www.paypal.com/giving/campaigns?campaign_id=CLQ5X4MWH87W8
- **SVG QR local:** https://fundacionecopiensaevolution.github.io/ECOBIONICA/assets/paypal-ecobionica-qr.svg
- **Página institucional:** https://fundacionecopiensaevolution.github.io/ECOBIONICA/

## Código embebible oficial proporcionado por PayPal

```html
<iframe
  src="https://www.paypal.com/giving/campaigns?campaign_id=CLQ5X4MWH87W8"
  title="PayPal donate campaign card"
  frameborder="0" width="382" height="550" scrolling="no"></iframe>
```

```html
<form action="https://www.paypal.com/donate" method="post" target="_top">
  <input type="hidden" name="campaign_id" value="CLQ5X4MWH87W8" />
  <input type="image" src="https://pics.paypal.com/00/s/ODY5YWU2MDAtM2Q1Zi00NGJjLWFiMTQtMjE0ODAzMWU4MzY5/file.PNG"
    name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
</form>
```

## Uso y distribución

- **ECOBIONICA** recibe recursos para infraestructura de diseño, IA, impresión y escaneo 3D, transformación de PET recuperado a filamento, validación técnica y desarrollo de tecnología asistiva. El desarrollo/prototipado **no supone** dispositivos médicos clínicamente validados ni entrega a beneficiarios.
- Para empresas y organizaciones, usar la URL de PayPal **solo** como opción de donación directa; adaptar solicitudes a equipos, descuento, colaboración o financiación según criterios del destinatario.
- Para GlobalGiving, GivenGain y otras plataformas, usar sus propios procedimientos de elegibilidad y verificación. Un enlace PayPal **no sustituye** registro, due diligence ni una cuenta bancaria institucional cuando se exige.
- Por seguridad, **no** publicar credenciales API, client secret, claves, OTP, identificaciones, RUT, certificaciones bancarias ni datos privados de beneficiarios.
- Mantener remitente institucional de propuestas: **fundacionecopiensaevolution@gmail.com**. El correo financiero PayPal de la Fundación, si lo hay, es distinto y no debe utilizarse para prospección.
- Verificar en la cuenta PayPal comercial si existe alguna retención, verificación pendiente (KYC), el abono de una transacción real, comisiones definitivas y posibilidad de retiro a cuenta bancaria institucional. Estado *activa* de campaña **no prueba** verificación bancaria ni capacidad de retiro.
- Registrar invitaciones y respuestas en la hoja de seguimiento institucional, evitando contactos duplicados.

## Integración de la web

En `index.html` aparecen ahora tres enlaces CTA (menú, portada, bloque de apoyo), y en «Apoyar» el formulario oficial de PayPal, una tarjeta `iframe` opcional con enlace alternativo, y el código QR local. Mantener fallback de enlace directo en caso de iframe bloqueado por navegador o PayPal.
