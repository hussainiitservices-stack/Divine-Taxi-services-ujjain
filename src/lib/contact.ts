export const PHONE_DISPLAY = "+91 87708 61770";
/** E.164, used in tel: links */
export const PHONE_TEL = "+918770861770";
/** International format used in structured data */
export const PHONE_SCHEMA = "+91-87708-61770";
export const WHATSAPP_NUMBER = "918770861770";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
