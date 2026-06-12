# PRP-001: Material del Ponente — Webinar AFCademia 1-jul-2026

> **Estado**: APROBADO (decisiones cerradas 12-jun-2026, pendiente de ejecución)
> **Fecha**: 2026-06-12
> **Proyecto**: landing-webinar-afcademia (AFCademia)

---

## Objetivo

Producir el kit completo de materiales del ponente y su asistente para el webinar gratuito de AFCademia **"Las 3 Herramientas de IA y Automatización que Todo Administrador de Fincas Debería Conocer en 2026"** (miércoles 1-jul-2026, 12:00 h, Zoom, 60 min): escaleta, guion, presentación, demos guionizadas con plan B, y materiales operativos del asistente.

## Por Qué

| Problema | Solución |
|----------|----------|
| El webinar está anunciado (landing + form activos) pero no existe ningún material de ponencia | Kit completo y ensayable: nada se improvisa el día 1-jul |
| Demos en vivo de 3 herramientas distintas = alto riesgo de fallo en directo | Cada demo va guionizada paso a paso con datos ficticios y ensayada (sin plan B por decisión del usuario; contingencia verbal en el checklist) |
| El ponente presenta solo: debe gestionar contenido, chat, tiempos y técnica a la vez | Chuleta operativa minuto a minuto sincronizada con la escaleta |
| El webinar debe convertir asistentes en alumnos de AFCademia | Bloque de cierre con CTA diseñado, no improvisado |

**Valor de negocio**: el webinar es la pieza de captación de AFCademia (formación para administradores de fincas). Un directo profesional y sin fallos maximiza la conversión de inscritos → asistentes → interesados en los cursos de pago, y la grabación queda como activo evergreen.

## Qué

### Inventario de materiales a producir (a validar en Fase 1)

| # | Material | Para quién | Formato propuesto |
|---|----------|-----------|-------------------|
| 1 | **Escaleta minuto a minuto** (estructura de los 60 min) | Ponente + asistente | Markdown (tabla de tiempos) |
| 2 | **Guion del ponente** (semi-guion por bloques: ideas clave + frases puente, no palabra por palabra) | Ponente | Markdown |
| 3 | **Presentación de diapositivas** (~25-35 slides, marca AFCademia azul #16365C / naranja #F08019) | Ponente / pantalla | HTML → PDF (decidido) |
| 4 | **Demo 1 — TextExpander**: plantillas de respuestas a vecinos/proveedores (snippets reales de administración de fincas) | Ponente | Guion de demo paso a paso + snippets de ejemplo |
| 5 | **Demo 2 — Make.com**: escenario de automatización (ej. incidencia recibida por email → registro + aviso) | Ponente | Guion de demo + escenario montado de antemano |
| 6 | **Demo 3 — Claude**: casos de uso del día a día (redactar convocatoria/acta de junta, responder queja de vecino, resumir presupuesto) | Ponente | Guion de demo + prompts preparados |
| 7 | **Chuleta operativa del ponente** (presenta solo): tareas por minuto (admitir asistentes, vigilar chat, control de tiempos) | Ponente | Markdown (checklist temporal) |
| 8 | **Banco de Q&A anticipado**: 15-20 preguntas probables con respuesta preparada (+ 3-4 "preguntas semilla" para romper el hielo) | Ponente | Markdown |
| 9 | **Checklist técnico pre-webinar**: config Zoom (grabación, permisos, pantalla compartida), envío de enlaces por WhatsApp, audio/vídeo, contingencia si falla una demo | Ponente | Markdown |
| 10 | **Slide + guion de cierre/CTA**: siguiente paso para los asistentes (CTA parametrizado, a decidir antes del ensayo) | Ponente | Incluido en slides + guion |
| 11 | **Lead magnet post-webinar**: PDF "Guía rápida de las 3 herramientas" con prompts y plantillas de las demos (excusa para el mensaje de seguimiento por WhatsApp) | Asistentes al webinar | HTML → PDF |

**Descartado**: plan B de demos (capturas/vídeo de respaldo) — decisión del usuario: se confía en el directo, con contingencia verbal mínima documentada en el checklist.

### Criterios de Éxito
- [x] Inventario de materiales validado por el usuario (12-jun-2026: 6 decisiones cerradas)
- [ ] Escaleta de 60 min cerrada y los tiempos cuadran (intro + 3 herramientas + Q&A + cierre)
- [ ] Guion completo: el ponente puede dar el webinar leyendo solo guion + slides
- [ ] Presentación terminada con marca AFCademia (sin rastro de Serincosol)
- [ ] 3 demos guionizadas con datos ficticios y ensayables
- [ ] Chuleta operativa + checklist técnico + banco Q&A listos (el ponente presenta solo)
- [ ] Lead magnet PDF producido
- [ ] CTA de cierre decidido por el usuario y aplicado (sustituir `[CTA]`)
- [ ] Ensayo general realizado (validación final humana antes del 1-jul)

### Comportamiento Esperado (Happy Path)

El día del webinar el ponente lo opera todo él solo: sigue su checklist técnico (T-60 min a T-0), abre la sala y gestiona la admisión. Después sigue guion + escaleta: intro (≈5 min), bloque TextExpander (≈13 min, demo incluida), bloque Make.com (≈13 min), bloque Claude (≈14 min), Q&A (≈10 min, con el banco de Q&A y las preguntas semilla a mano), cierre con CTA (≈5 min). Si una demo en vivo falla, transición verbal preparada y se salta al siguiente bloque. Tras el webinar se envía el lead magnet por WhatsApp. Todo el material vive versionado en el repo del webinar.

---

## Contexto

### Referencias
- `c:\Users\manel\.000.Proyectos.DEV\landing-webinar-afcademia\index.html` — landing publicada: título oficial, fecha/hora, tono del copy ("gestionar más comunidades con menos esfuerzo"), promesa al inscrito (enlace de acceso por WhatsApp)
- `c:\Users\manel\.000.Proyectos.DEV\landing-webinar-afcademia\logo-afcademia.png` y `banner.jpeg` — assets de marca para las slides
- Memoria `landing-webinar-afcademia.md` — marca AFCademia (azul #16365C / naranja #F08019), contacto cursos@afcademia.com / 661 239 319, **prohibido mencionar Serincosol**
- Repo: https://github.com/Manelgon/webinar-julio-2026.afcademia.com- (rama `main`) — el material se versiona aquí

### Audiencia
Administradores de fincas españoles, perfil no técnico, dolor principal: sobrecarga operativa (emails de vecinos, incidencias, juntas, proveedores). Los ejemplos de TODAS las demos deben ser de su día a día, con datos 100% ficticios (RGPD: nada de comunidades ni vecinos reales).

### Arquitectura Propuesta (estructura de carpetas en el repo)
```
landing-webinar-afcademia/
└── material-ponente/
    ├── 00-escaleta.md
    ├── 01-guion-ponente.md
    ├── 02-presentacion/          # slides HTML (fuente) + export PDF
    ├── 03-demos/
    │   ├── demo-1-textexpander.md
    │   ├── demo-2-make.md
    │   └── demo-3-claude.md
    ├── 04-operativa/             # el ponente presenta solo
    │   ├── chuleta-ponente.md
    │   ├── banco-qa.md
    │   └── checklist-tecnico.md
    ├── 05-cierre-cta.md          # CTA parametrizado [CTA]
    └── 06-lead-magnet/           # guía HTML (fuente) + export PDF
```

### Modelo de Datos
No aplica (proyecto de contenido, sin BD).

### Decisiones cerradas (12-jun-2026, con el usuario)
1. **Formato de slides**: HTML con marca AFCademia → export a PDF (generadas por el agente, editables a petición)
2. **Profundidad del guion**: semi-guion por bloques (idea clave + frases gancho + transiciones + pasos exactos de demo)
3. **Lead magnet descargable**: SÍ — PDF "Guía rápida de las 3 herramientas" con los prompts y plantillas de las demos
4. **CTA de cierre**: PENDIENTE — el bloque de cierre se deja parametrizado (`[CTA]`); el usuario lo decide antes del ensayo (Fase 6)
5. **Plan B**: NO se produce material de respaldo. Contingencia mínima en el checklist: si una demo falla, transición verbal y saltar al siguiente bloque
6. **Ponente**: el usuario presenta SOLO, sin asistente — el cue sheet se convierte en chuleta operativa del propio ponente (chat, tiempos, enlaces)

---

## Blueprint (Assembly Line)

> IMPORTANTE: Solo fases. Las subtareas se generan al entrar a cada fase con `/bucle-agentico`.

### Fase 1: Definición y escaleta
**Objetivo**: Inventario de materiales cerrado (qué se produce y qué no, las 6 decisiones abiertas resueltas) + escaleta minuto a minuto de los 60 min aprobada.
**Validación**: El usuario aprueba inventario y escaleta; los tiempos suman 60 min.

### Fase 2: Guion del ponente
**Objetivo**: Guion completo alineado con la escaleta: intro con gancho, narrativa de cada herramienta (problema → herramienta → demo → recapitulación), transiciones, y guion del cierre/CTA.
**Validación**: Lectura completa del usuario; cada bloque cabe en su tiempo asignado (estimación de palabras/minuto).

### Fase 3: Demos guionizadas
**Objetivo**: Las 3 demos documentadas paso a paso con datos ficticios de administración de fincas (snippets TextExpander, escenario Make, prompts Claude) + definición del plan B de cada una.
**Validación**: Cada demo es reproducible siguiendo solo el documento; usuario confirma que los casos de uso son realistas para su audiencia.

### Fase 4: Presentación de diapositivas
**Objetivo**: Deck completo (~25-35 slides) con marca AFCademia, sincronizado con guion y escaleta, incluida la slide de cierre/CTA.
**Validación**: Export final generado; revisión visual del usuario; cero menciones a Serincosol.

### Fase 5: Operativa del ponente + lead magnet
**Objetivo**: Chuleta operativa minuto a minuto (el ponente presenta solo), banco de Q&A (15-20 preguntas + preguntas semilla), checklist técnico pre-webinar de Zoom (incluida contingencia verbal si falla una demo) y lead magnet PDF.
**Validación**: El usuario confirma que puede operar el webinar él solo con estos documentos; el PDF del lead magnet se genera sin errores.

### Fase 6: Validación Final (ensayo)
**Objetivo**: Kit completo coherente y ensayado end-to-end.
**Validación**:
- [ ] Todos los materiales del inventario aprobado existen en `material-ponente/`
- [ ] Ensayo general cronometrado: el contenido cabe en 60 min
- [ ] CTA decidido y sustituido en slides, guion y cierre (cero `[CTA]` pendientes)
- [ ] Criterios de éxito del PRP cumplidos
- [ ] Material commiteado al repo del webinar

---

## 🧠 Aprendizajes (Self-Annealing)

> Esta sección CRECE con cada error encontrado durante la implementación.

*(vacío — se rellena durante la ejecución)*

---

## Gotchas

> Cosas críticas a tener en cuenta ANTES de implementar

- [ ] **Cero menciones a Serincosol** en ningún material (rebranding a AFCademia; el Google Form aún tiene cabecera de Serincosol — pendiente aparte, no bloquea este PRP)
- [ ] Datos de las demos 100% ficticios (RGPD): nada de comunidades, vecinos o emails reales
- [ ] La landing promete que el enlace de acceso llega **por WhatsApp** — el checklist del asistente debe cubrir ese envío previo
- [ ] Demos en vivo con 3 herramientas SaaS distintas = 3 logins, 3 UIs que pueden cambiar antes del 1-jul → re-verificar las UIs la semana del webinar
- [ ] Audiencia no técnica: prohibido jerga (API, webhook, prompt engineering) sin traducirla a lenguaje de administrador de fincas
- [ ] 60 min es poco para 3 herramientas + Q&A: la escaleta manda; cada demo ≤ 7-8 min
- [ ] Grabar el webinar (config Zoom) — la grabación es activo de marketing posterior

## Anti-Patrones

- NO improvisar demos en directo sin guion (no hay plan B: el guion y el ensayo son la red de seguridad)
- NO hacer slides cargadas de texto (slide = apoyo visual, el contenido va en el guion)
- NO vender durante los bloques de contenido (el CTA vive solo en el cierre)
- NO usar ejemplos genéricos de oficina: todos los casos son de administración de fincas
- NO dejar el material solo en local: se versiona en el repo del webinar

---

*PRP aprobado el 12-jun-2026 (6 decisiones cerradas con el usuario). Material aún no producido — ejecutar con `/bucle-agentico` fase por fase.*