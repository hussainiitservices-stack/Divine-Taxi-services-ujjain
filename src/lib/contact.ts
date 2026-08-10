export const PHONE_DISPLAY = "+91 98765 43210";
export const PHONE_TEL = "+919876543210";
export const WHATSAPP_NUMBER = "919876543210";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
