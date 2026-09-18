import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, Check, Copy, Send, Calendar, AlertCircle } from 'lucide-react';
import { SHOWROOM_CONFIG } from '../data/showroomData';
import { getCallUrl, getWhatsAppGeneralUrl, getGoogleMapsUrl, copyToClipboard } from '../utils/helpers';

export const ShowroomView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formInterest, setFormInterest] = useState('Living Room Furniture');
  const [formDate, setFormDate] = useState('');
  const [formNotes, setFormNotes] = useState('');

  const handleCopyAddress = async () => {
    const fullAddress = `${SHOWROOM_CONFIG.name}, ${SHOWROOM_CONFIG.address.street}, ${SHOWROOM_CONFIG.address.area}, ${SHOWROOM_CONFIG.address.city}, ${SHOWROOM_CONFIG.address.state} - ${SHOWROOM_CONFIG.address.pincode}`;
    const success = await copyToClipboard(fullAddress);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hello Punjab Furnitures,\n\nI would like to schedule a showroom visit / enquiry:\n- Name: ${formName}\n- Contact: ${formPhone}\n- Primary Interest: ${formInterest}\n- Preferred Visit Date: ${formDate || 'This week'}\n- Requirements: ${formNotes || 'General consultation'}`;
    const url = getWhatsAppGeneralUrl(text);
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <div className="border-b border-[#E0D7C6] pb-6">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7A6E5A] font-semibold">
          Visit In Person
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132A1F] mt-1">
          Showroom & Workshop Location
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5343] mt-2 max-w-2xl font-sans">
          Step inside our flagship Saharanpur showroom to inspect wood grain, test seating ergonomics, feel fabric textures, and speak directly with our master furniture craftsmen.
        </p>
      </div>

      {/* Primary Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Address Card */}
        <div className="bg-white border border-[#E0D7C6] rounded-lg p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#DDD3C2] flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 text-[#132A1F]" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#7A6E5A]">Physical Address</span>
            <h3 className="font-display text-lg font-bold text-[#14261C] mt-1">
              {SHOWROOM_CONFIG.name}
            </h3>
            <p className="text-xs text-[#524939] mt-2 leading-relaxed">
              {SHOWROOM_CONFIG.address.street}, {SHOWROOM_CONFIG.address.area}<br />
              Near {SHOWROOM_CONFIG.address.landmark}<br />
              {SHOWROOM_CONFIG.address.city}, {SHOWROOM_CONFIG.address.state} — {SHOWROOM_CONFIG.address.pincode}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EAE2D2] flex gap-2">
            <a
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 bg-[#132A1F] hover:bg-[#1D3E2F] text-white text-xs font-semibold uppercase tracking-wider rounded text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Directions</span>
            </a>
            <button
              onClick={handleCopyAddress}
              className="px-3 py-2 border border-[#DDD3C2] hover:bg-[#FAF7F2] text-xs text-[#524939] font-medium rounded transition-colors flex items-center gap-1"
              title="Copy address"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Operating Hours Card */}
        <div className="bg-white border border-[#E0D7C6] rounded-lg p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#DDD3C2] flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-[#132A1F]" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#7A6E5A]">Showroom Timings</span>
            <h3 className="font-display text-lg font-bold text-[#14261C] mt-1">
              Store & Workshop Hours
            </h3>

            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-[#F0EAE0]">
                <span className="text-[#5C5343] font-medium">Wednesday – Monday:</span>
                <span className="font-bold text-[#132A1F]">9:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EAE0]">
                <span className="text-[#5C5343] font-medium">Tuesday:</span>
                <span className="font-bold text-[#A82B2B]">Closed (Weekly Holiday)</span>
              </div>
            </div>

            <p className="text-[11px] text-[#7A6E5A] mt-3">
              Walk-ins are warmly welcome without prior booking. For architect or large whole-home bespoke meetings, advance notice is recommended.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EAE2D2]">
            <span className="text-[11px] text-[#2A7545] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open for Walk-in Consultations
            </span>
          </div>
        </div>

        {/* Direct Phone & WhatsApp Card */}
        <div className="bg-white border border-[#E0D7C6] rounded-lg p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#DDD3C2] flex items-center justify-center mb-3">
              <Phone className="w-5 h-5 text-[#132A1F]" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#7A6E5A]">Direct Line</span>
            <h3 className="font-display text-lg font-bold text-[#14261C] mt-1">
              Speak to Showroom Desk
            </h3>

            <div className="mt-3 space-y-2 text-xs text-[#524939]">
              <div>
                <span className="block text-[11px] text-[#7A6E5A]">Phone Enquiry:</span>
                <a href={getCallUrl()} className="font-bold text-sm text-[#132A1F] hover:underline">
                  {SHOWROOM_CONFIG.contact.phoneFormatted}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-[#7A6E5A]">WhatsApp Support & Photos:</span>
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-[#2A7545] hover:underline"
                >
                  {SHOWROOM_CONFIG.contact.whatsappFormatted}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EAE2D2] flex gap-2">
            <a
              href={getCallUrl()}
              className="flex-1 py-2 bg-[#132A1F] hover:bg-[#1D3E2F] text-white text-xs font-semibold uppercase tracking-wider rounded text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call Now</span>
            </a>
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 bg-[#D4AF37] hover:bg-[#DEBA48] text-[#132A1F] text-xs font-bold uppercase tracking-wider rounded text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Map & Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Map Embed */}
        <div className="lg:col-span-7 bg-white border border-[#E0D7C6] rounded-lg overflow-hidden shadow-sm">
          <div className="p-4 border-b border-[#E0D7C6] flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8C6D1F]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#132A1F]">
                Saharanpur Showroom Location
              </span>
            </div>
            <a
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-[#8C6D1F] hover:underline flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <Navigation className="w-3 h-3" />
            </a>
          </div>

          <div className="relative aspect-[16/10] w-full bg-[#E5E0D5]">
            <iframe
              title="Punjab Furnitures Saharanpur Location"
              src={SHOWROOM_CONFIG.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          <div className="p-4 text-xs text-[#524B3E] bg-[#FAF7F2] border-t border-[#E0D7C6] flex flex-col sm:flex-row justify-between gap-2">
            <span>Ambala Road Timber Craft Corridor, Saharanpur</span>
            <span className="font-semibold text-[#132A1F]">Convenient On-site Customer Parking Available</span>
          </div>
        </div>

        {/* Visit & Consultation Enquiry Form */}
        <div className="lg:col-span-5 bg-[#FAF7F2] border border-[#DDD3C2] rounded-lg p-6 shadow-sm">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#8C6D1F] block">
            Plan Your Visit or Consultation
          </span>
          <h3 className="font-display text-xl font-bold text-[#132A1F] mt-1">
            Showroom Enquiry & Visit Request
          </h3>
          <p className="text-xs text-[#5C5343] mt-1">
            Let us know what you are looking for, and our team will have relevant timber samples and catalogue portfolios ready for your visit.
          </p>

          {formSubmitted ? (
            <div className="mt-6 p-4 bg-white border border-[#2A7545] rounded-lg text-center space-y-3 animate-in fade-in">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-[#14261C]">Enquiry Received</h4>
              <p className="text-xs text-[#5C5343] leading-relaxed">
                Thank you, <strong>{formName}</strong>. Our Saharanpur showroom team will connect with you via phone ({formPhone}) to coordinate your visit.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleSendViaWhatsApp}
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Direct to WhatsApp Now</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="mt-5 space-y-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4E4638] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full px-3 py-2 bg-white border border-[#D5CBB9] rounded text-xs text-[#1D201D] focus:outline-none focus:ring-1 focus:ring-[#132A1F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4E4638] mb-1">
                  Phone Number (Calling / WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  placeholder="+91 98XXX XXXXX"
                  className="w-full px-3 py-2 bg-white border border-[#D5CBB9] rounded text-xs text-[#1D201D] focus:outline-none focus:ring-1 focus:ring-[#132A1F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4E4638] mb-1">
                    Primary Interest
                  </label>
                  <select
                    value={formInterest}
                    onChange={(e) => setFormInterest(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D5CBB9] rounded text-xs text-[#1D201D] focus:outline-none focus:ring-1 focus:ring-[#132A1F]"
                  >
                    <option value="Living Room Furniture">Living Room Sets</option>
                    <option value="Bedroom & Teak Beds">Bedroom & Teak Beds</option>
                    <option value="Dining Tables & Chairs">Dining Sets</option>
                    <option value="Bespoke Custom Furniture">Bespoke Custom Woodwork</option>
                    <option value="Full Residence Package">Full Residence Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4E4638] mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D5CBB9] rounded text-xs text-[#1D201D] focus:outline-none focus:ring-1 focus:ring-[#132A1F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#4E4638] mb-1">
                  Custom Requirements / Room Dimensions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder="e.g. Looking for a 6-seater solid teak dining table in walnut polish with cream upholstered chairs..."
                  className="w-full px-3 py-2 bg-white border border-[#D5CBB9] rounded text-xs text-[#1D201D] focus:outline-none focus:ring-1 focus:ring-[#132A1F]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#132A1F] hover:bg-[#1C3E2D] text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Visit Request</span>
              </button>

              <p className="text-[10px] text-[#7A6E5A] text-center">
                We respect your privacy. Direct contact from our showroom team only.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
