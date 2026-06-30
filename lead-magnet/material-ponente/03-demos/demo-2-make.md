# Demo 2 — Make.com (Automatización de Incidencias)
## Webinar AFCademIA · 1 jul 2026 · Bloque 20:30 – 26:30 (6 min)

> **Datos ficticios obligatorios** (RGPD): Comunidad "Residencial Las Acacias", vecino "Ana Martínez López", email ficticio demo@ejemplo.com.  
> El escenario de Make debe estar montado y probado antes del webinar.

---

## Preparación previa (la noche antes o el mismo día T-60 min)

- [ ] Cuenta Make.com activa y el escenario de demo creado (ver instrucciones abajo)
- [ ] Escenario en estado **ACTIVO** (toggle encendido en Make)
- [ ] Email de prueba preparado en borrador listo para enviar durante la demo
- [ ] Google Sheets con la hoja "Registro de Incidencias" abierta en otra pestaña
- [ ] Pestaña de Gmail (cuenta de demo) abierta

---

## Guion paso a paso

### Paso 1 — Mostrar el escenario en Make.com (60 s)

*Compartir pantalla → Make.com → abrir el escenario "Gestión de Incidencias Fincas"*

> "Esto es Make.com. Lo que véis aquí es un escenario — una automatización — que yo ya he montado de antemano.  
> Funciona así: a la izquierda tenéis el disparador, que es 'recibir un email'. En el centro hay dos acciones: registrar la incidencia en Google Sheets y enviar un acuse de recibo al vecino.  
> Parece complicado verlo así, pero en realidad son tres bloques que se conectan arrastrando.  
> Os demuestro que funciona."

### Paso 2 — Enviar el email de incidencia ficticio (30 s)

*Cambiar a pestaña Gmail de la cuenta de demo*

> "Voy a simular que Ana Martínez López, propietaria del 2º A del Residencial Las Acacias, me manda un email de incidencia ahora mismo.  
> El asunto es 'INCIDENCIA - Fuga de agua en garaje' y el cuerpo describe el problema."

*Enviar el email de prueba preparado*

> "Email enviado. Ahora esperamos unos segundos a que Make lo detecte."

### Paso 3 — Mostrar Make procesando (30 s)

*Volver a Make.com → pestaña "History" o ver el escenario ejecutarse*

> "Veis que Make ya ha detectado el email y está ejecutando el escenario. El módulo de Gmail se ha activado, está procesando los datos…"

### Paso 4 — Mostrar el resultado en Google Sheets (60 s)

*Cambiar a pestaña Google Sheets*

> "Y aquí está. La incidencia de Ana Martínez del 2º A acaba de aparecer automáticamente en nuestra hoja de registro:  
> fecha y hora, nombre de la comunidad, piso, descripción de la incidencia, estado 'pendiente'.  
> Sin que yo haya tocado nada."

### Paso 5 — Mostrar el email de acuse de recibo enviado (60 s)

*Cambiar a pestaña Sent/Enviados del email de la comunidad*

> "Y Make también le ha enviado automáticamente este email a Ana:  
> 'Hemos recibido su incidencia, queda registrada con el número INC-20260701-001, nos ponemos en contacto con usted en breve.'  
> El vecino sabe que su incidencia no se ha perdido. Vosotros no habéis escrito ni una letra."

### Paso 6 — Cierre de la demo (30 s)

> "Esto es lo que hace Make: conecta vuestro email con vuestra hoja de incidencias y con la respuesta al vecino, de forma completamente automática.  
> Se puede ampliar fácilmente: añadir un aviso a vuestro móvil por WhatsApp, notificar al proveedor correspondiente, o cambiar el estado de la incidencia cuando la cerráis.  
> Os incluyo el manual completo de cómo montar este escenario en el material que os envío hoy."

---

## Contingencia (si falla la demo)

> "Make está tardando más de lo normal. Sin problema — os muestro la hoja de incidencias ya rellena que preparé ayer con el resultado de la misma prueba, y el email de acuse que se generó. El resultado final es exactamente este."  
> *[Mostrar captura o hoja pre-rellenada]*

---

## Escenario Make.com — Manual de Construcción Paso a Paso

> Entregable para los asistentes: instrucciones para reproducir el escenario desde cero.

### Qué vamos a construir

**Disparador**: llega un email a la cuenta de la comunidad con la palabra "INCIDENCIA" en el asunto  
**Acción 1**: registrar la incidencia en una hoja de Google Sheets  
**Acción 2**: responder automáticamente al vecino con acuse de recibo

**Tiempo estimado de montaje**: 30-45 minutos la primera vez  
**Coste Make**: plan gratuito (1.000 operaciones/mes) suficiente para empezar

---

### PASO 0 — Preparar Google Sheets

1. Abrir Google Drive → Crear nueva hoja de cálculo → Nombrarla **"Registro de Incidencias Comunidades"**
2. Crear la siguiente cabecera en la fila 1:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Fecha y hora | Comunidad | Email remitente | Nombre vecino | Asunto | Descripción | Estado |

3. Guardar y dejar la hoja abierta (necesitaréis su URL en Make)

---

### PASO 1 — Crear la cuenta en Make.com

1. Ir a **make.com** → Crear cuenta gratuita
2. Confirmar el email de verificación
3. En el panel principal: clic en **"Create a new scenario"**

---

### PASO 2 — Añadir el disparador (módulo Gmail)

1. Clic en el círculo "+" del centro del escenario vacío
2. Buscar **"Gmail"** → Seleccionar **"Watch Emails"** (vigilar nuevos emails)
3. Conectar vuestra cuenta de Gmail de la comunidad (Make pedirá permisos de Google)
4. Configurar el módulo:
   - **Folder**: INBOX
   - **Criteria**: Subject contains → escribir `INCIDENCIA`
   - **Maximum number of results**: 1
5. Clic en **OK**

> **Alternativa**: si usáis Outlook, en el paso 2 buscar "Microsoft 365 Email" en lugar de Gmail.

---

### PASO 3 — Añadir acción 1: registrar en Google Sheets

1. Clic en el "+" que aparece a la derecha del módulo Gmail
2. Buscar **"Google Sheets"** → Seleccionar **"Add a Row"**
3. Conectar vuestra cuenta de Google (si no está ya conectada)
4. Configurar:
   - **Spreadsheet**: seleccionar "Registro de Incidencias Comunidades"
   - **Sheet**: Hoja1
   - Mapear las columnas así:

| Columna de Sheets | Valor de Make (arrastrar desde el módulo Gmail) |
|---|---|
| Fecha y hora | `Date` (del email) |
| Comunidad | Escribir manualmente el nombre de la comunidad |
| Email remitente | `From: Email` |
| Nombre vecino | `From: Name` |
| Asunto | `Subject` |
| Descripción | `Snippet` (resumen del cuerpo) |
| Estado | Escribir manualmente: `Pendiente` |

5. Clic en **OK**

---

### PASO 4 — Añadir acción 2: responder al vecino

1. Clic en el "+" a la derecha de Google Sheets
2. Buscar **"Gmail"** → Seleccionar **"Send an Email"**
3. Configurar:
   - **To**: `From: Email` (el email del vecino, viene del disparador)
   - **Subject**: escribir → `RE: {{subject}}` (pondrá automáticamente el asunto original)
   - **Content** (HTML o texto plano):

```
Estimado/a {{From: Name}},

Hemos recibido correctamente su comunicación de incidencia.

Su solicitud ha quedado registrada en nuestro sistema y será atendida a la mayor brevedad posible.

Si necesita ampliar información, responda a este mismo email o contacte con nosotros en el teléfono de administración.

Gracias por comunicárnoslo.

Atentamente,
[TU NOMBRE]
Administrador/a de Fincas · AFCademIA
📞 661 239 319 | cursos@afcademia.com
```

4. Clic en **OK**

---

### PASO 5 — Activar el escenario

1. En la parte inferior del editor: cambiar el **"Scheduling"** a **"Immediately"** o **"Every 15 minutes"** según la frecuencia que prefiráis
2. Clic en el toggle de activación (arriba a la izquierda) → debe quedar en **verde/ON**
3. Hacer una prueba: enviar un email de prueba con "INCIDENCIA" en el asunto a la cuenta de la comunidad
4. Esperar el intervalo configurado y verificar que:
   - La fila aparece en Google Sheets
   - El email de respuesta se ha enviado

---

### PASO 6 — Ampliaciones recomendadas (opcionales)

Una vez que el flujo básico funciona, podéis añadir:

**A. Aviso a vuestro móvil por WhatsApp**
- Añadir módulo **"WhatsApp Business"** o **"Twilio"** entre Sheets y el email de respuesta
- Enviaros un mensaje: "Nueva incidencia: [asunto] de [vecino]"

**B. Notificación a vuestro proveedor de mantenimiento**
- Si el asunto contiene "ascensor" → enviar email automático a la empresa de ascensores
- Si contiene "fontanería" → enviar a la empresa de fontanería
- Se hace con un módulo **"Router"** en Make

**C. Seguimiento y cierre**
- Cuando respondéis marcando "CERRADO" en el asunto → Make cambia el estado en Sheets a "Cerrado" y notifica al vecino
- Esto da trazabilidad completa sin software adicional

---

## Coste y herramientas alternativas

| Opción | Coste | Para quién |
|--------|-------|-----------|
| **Make.com** (recomendado en el webinar) | Gratis hasta 1.000 op/mes; plan básico ~9 €/mes | Todos los casos |
| **Zapier** | Gratis hasta 100 tareas/mes; más caro en planes de pago | Si ya lo conocéis |
| **Power Automate** (Microsoft) | Incluido en Microsoft 365 (si ya pagáis Office 365) | Si usáis Outlook + OneDrive |

> **Para administradores que usan Microsoft 365**: el mismo escenario se puede montar en Power Automate con los mismos pasos pero conectando Outlook → Excel Online → Outlook (respuesta). El resultado es idéntico.