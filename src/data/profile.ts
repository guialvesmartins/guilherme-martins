/** Ano em que comecei a trabalhar com TI (primeiro cargo na Libert Solutions). */
export const CAREER_START_YEAR = 2017;

/** Anos de experiência, recalculados a cada build, para o número não envelhecer. */
export function yearsOfExperience(now: Date = new Date()): number {
  return now.getFullYear() - CAREER_START_YEAR;
}

export const PHONE_DISPLAY = "(62) 98145-7836";

/** Número no formato internacional, só dígitos, como o wa.me exige. */
const WHATSAPP_NUMBER = "5562981457836";

/** Link do WhatsApp que já abre a conversa com a mensagem preenchida. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
