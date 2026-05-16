// ═══════════════════════════════════════════
// ÁNIMA — Configuración Central
// ═══════════════════════════════════════════

const ANIMA_CONFIG = {
  // Plan: 0=Gratis, 1=Esencial($99), 2=Completa($199)
  PLAN_USUARIO: 2,

  // Tus datos
  NOMBRE: "Amanda",

  // Carta natal
  SOL: "Escorpio",
  LUNA: "Piscis",
  ASCENDENTE: "Leo",
  VENUS: "Sagitario",
  MARTE: "Capricornio",

  // Tu Año X
  CUMPLEANOS: "1996-11-13",
  NUMERO_PERSONAL: 7,
  ANO_PERSONAL: "El Año de la Introspección",

  // Modo diseñadora: true = ve TODO desbloqueado
  MODO_DISENADORA: true,

  // Accesos especiales para promoción
  // Agrega correos aquí para darles acceso Completa gratis
  ACCESOS_ESPECIALES: [
    // "amiga@email.com",
  ],
};

// ── No modificar debajo ──
const PLAN = ANIMA_CONFIG.MODO_DISENADORA ? 2 : ANIMA_CONFIG.PLAN_USUARIO;
const NOMBRE = ANIMA_CONFIG.NOMBRE;
const SOL = ANIMA_CONFIG.SOL;
const LUNA = ANIMA_CONFIG.LUNA;
const ASCENDENTE = ANIMA_CONFIG.ASCENDENTE;
const NUMERO_PERSONAL = ANIMA_CONFIG.NUMERO_PERSONAL;
