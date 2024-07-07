// Create a config file that exports a variable called WHATSAPP_URL with the URL of your WhatsApp chat.

export const NEXT_PUBLIC_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
export const WHATSAPP_CHAT_URL = `https://wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Me%20gustar%C3%ADa%20agendar%20un%20an%C3%A1lisis!%20%0A-%20*Nombre%20y%20Apellido%3A*%0A-%20*Numero%20de%20contacto%3A*%20%0A-%20*An%C3%A1lisis%20que%20desea%20realizar%3A*%0A-%20*Receta%20M%C3%A9dica%20(si%20es%20necesario)%3A*%0A-%20*Direcci%C3%B3n%3A*%0A`;
export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
