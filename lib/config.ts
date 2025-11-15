import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Botones de inicio en la pantalla de bienvenida
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Estoy interesado en pedidos B2B",
    prompt:
      "Estoy interesado en hacer pedidos B2B de VIKA Nicotine Pouches para mi negocio. Explícame cómo funciona el proceso, cantidades mínimas y precios por volumen.",
    icon: "circle-question",
  },
  {
    label: "Ya soy cliente y quiero hacer un pedido",
    prompt:
      "Ya soy cliente B2B de VIKA COLOMBIA y quiero hacer un nuevo pedido. Ayúdame a armar la orden con sabores y cantidades.",
    icon: "circle-question",
  },
];

// Placeholder del input
export const PLACEHOLDER_INPUT =
  "Escribe aquí tu consulta para el agente B2B...";

// Primer mensaje del asistente
export const GREETING =
  "Hola, soy el agente de ventas B2B de VIKA COLOMBIA. ¿Eres una tienda, kiosco u otro negocio? Dime en qué ciudad estás y qué cantidades te interesan y te hago una cotización.";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 0,
      tint: 6,
      // un poco más oscuro en modo dark
      shade: theme === "dark" ? -2 : -4,
    },
    accent: {
      // violeta como color de acción (botones, etc.)
      primary: "#8f8e91",
      level: 2,
    },
  },
  radius: "round",
});
