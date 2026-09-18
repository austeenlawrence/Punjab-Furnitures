import { SHOWROOM_CONFIG } from '../data/showroomData';

export function getWhatsAppProductUrl(productName: string): string {
  const text = `Hello Punjab Furnitures, I am interested in the ${productName}. Please share more details.`;
  return `https://wa.me/${SHOWROOM_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppGeneralUrl(customMessage?: string): string {
  const text = customMessage || `Hello Punjab Furnitures, I would like to enquire about your showroom collection.`;
  return `https://wa.me/${SHOWROOM_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getCallUrl(): string {
  return `tel:${SHOWROOM_CONFIG.phone}`;
}

export function getDirectionsUrl(): string {
  return SHOWROOM_CONFIG.googleMapsDirectionsUrl;
}

export function getGoogleMapsUrl(): string {
  return SHOWROOM_CONFIG.googleMapsDirectionsUrl;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
}
