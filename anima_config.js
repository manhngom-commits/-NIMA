// ═══════════════════════════════════════════
// ÁNIMA — Configuración Central
// ═══════════════════════════════════════════
// Para cambiar el plan de una usuaria, solo
// cambia PLAN_USUARIO aquí. Todo lo demás
// se actualiza automáticamente.

const ANIMA_CONFIG = {
  // Plan: 0=Gratis, 1=Esencial($99), 2=Completa($199)
  PLAN_USUARIO: 0,

  // Nombre de la usuaria
  NOMBRE: "Amanda",

  // Cumpleaños (para Tu Año X)
  CUMPLEANOS: "1998-11-03",

  // Modo diseñadora: true = ve TODO desbloqueado
  // Cambia a false antes de publicar para usuarias
  MODO_DISENADORA: false,

  // Accesos especiales (para promociones o accesos gratis)
  // Agrega correos aquí para darles acceso Completa gratis
  ACCESOS_ESPECIALES: [
    // "amiga@email.com",
    // "influencer@email.com",
  ],
};

// No modificar debajo de esta línea
const PLAN = ANIMA_CONFIG.MODO_DISENADORA ? 2 : ANIMA_CONFIG.PLAN_USUARIO;
const NOMBRE = ANIMA_CONFIG.NOMBRE;
