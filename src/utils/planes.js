const planes = [
  {
    name: "Económico",
    example: "/ejemplos/plan-economico",
    description:
      "Ideal para pequeños negocios locales que solo necesitan una presencia online rápida y accesible con un diseño profesional y moderno.",
    price: "100.000",
    beforePrice: "150.000",
    wspLink:
      "https://api.whatsapp.com/send?phone=56965926195&text=Hola%2C%20me%20interesa%20el%20plan%20Econ%C3%B3mico.",
    features: [
      "Hosting y Dominio durante 1 año.",
      "Página web básica de una sola página (landing page).",
      "Información clave del negocio: descripción, fotos, contacto, ubicación (Google Maps) y botón básico de contacto vía WhatsApp.",
      "Diseño simple, profesional y moderno.",
      "Sitio responsive (adaptado para dispositivos móviles).",
      "🎁 Regalo: 5 Fotos de su negocio de calidad profesional.",
    ],
    mantenimiento: {
      title: "Mantenimiento básico por 6 meses",
      features: [
        "Actualización de contenido menor (1 vez al mes)",
        "Copias de seguridad automáticas (mensuales)",
        "Corrección de errores técnicos (bug fixing).",
      ],
    },
    color: "#A9DFBF",
  },
  {
    name: "Avanzado",
    description:
      "Ideal para negocios como restaurantes o cabañas que necesitan mostrar más detalles de sus servicios y atraer a más clientes online.",
    price: "200.000",
    beforePrice: "300.000",
    best: true,
    wspLink:
      "https://api.whatsapp.com/send?phone=56965926195&text=Hola%2C%20me%20interesa%20el%20plan%20Avanzado.",
    features: [
      "Hosting y Dominio durante 1 año.",
      "Sitio web de 3 a 5 páginas.",
      "Incluye: página de servicios, sobre nosotros, catálogo de productos (o menú/carta digitalizada), galería de fotos, testimonios de clientes, contacto, ubicación (Google Maps) y formulario de reservas/pedidos avanzado vía WhatsApp.",
      "Diseño personalizado para reflejar la identidad de la marca.",
      "Optimización SEO básica para mejorar el posicionamiento en Google.",
      "Sitio responsive (adaptado para dispositivos móviles).",
      "🎁 Regalo: 10 Fotos de su negocio de calidad profesional.",
    ],
    mantenimiento: {
      title: "Mantenimiento avanzado por 9 meses",
      features: [
        "Actualización de contenido menor (hasta 3 veces al mes).",
        "Copias de seguridad automáticas (semanales).",
        "Corrección de errores técnicos (bug fixing).",
      ],
    },
    color: "#5DADE2",
  },
  {
    name: "Full",
    description:
      "Ideal para empresas que buscan una solución completa y optimizada, con características avanzadas y mayor interacción con los clientes.",
    price: "350.000",
    beforePrice: "400.000",
    wspLink:
      "https://api.whatsapp.com/send?phone=56965926195&text=Hola%2C%20me%20interesa%20el%20plan%20Full.",
    features: [
      "Hosting y Dominio durante 1 año.",
      "Sitio web completamente personalizado de hasta 10 páginas (Incluye inicio, sobre nosotros, catalogo de productos o menú/carta digitalizada), contacto, ubicación, botón avanzado de contacto Vía WhatsApp.",
      "Incluye sistema de reservas/pedidos online hecho a medida para su negocio o integración con su plataformas de reservas.",
      "Blog o sección de noticias para mantener a los clientes informados.",
      "Optimización SEO avanzada y posicionamiento local en Google.",
      "Diseño responsive avanzado con una experiencia de usuario fluida y profesional.",
      "Integración con Google Analytics y herramientas avanzadas de seguimiento de tráfico.",
      "🎁 Regalo: 15 Fotos de su negocio de calidad profesional.",
    ],
    mantenimiento: {
      title: "Mantenimiento Premium incluido por 1 año",
      features: [
        "Actualización de contenido (ilimitado dentro de las necesidades del negocio)",
        "Copias de seguridad automáticas (diarias)",
        "Monitoreo de seguridad 24/7 y protección avanzada contra ciberataques",
        "Optimización SEO avanzada (trimestral)",
        "Optimización de velocidad de carga (trimestral)",
        "Corrección de errores técnicos y asistencia prioritaria en caso de problemas",
      ],
    },
    color: "#F4D03F",
  },
];

module.exports = planes;