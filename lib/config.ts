import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

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

export const PLACEHOLDER_INPUT =
  "Escribe aquí tu consulta para el agente B2B...";

export const GREETING =
  "Hola, soy el agente de ventas B2B de VIKA COLOMBIA. ¿Eres una tienda, kiosco u otro negocio? Dime en qué ciudad estás y qué cantidades te interesan.";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -2 : -4, // más oscuro en modo dark
    },
    accent: {
      // violeta corporativo para botones, highlights, etc.
      primary: "#a855f7",
      level: 2,
    },
  },
  radius: "round",
  // si quieres más ajustes de tema, se agregan aquí
});
