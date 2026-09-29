import React, { useState } from 'react';
import { X, MapPin, CheckCircle } from 'lucide-react';
import { RESTAURANT_LOCATIONS } from '../../data/restaurantData';
import { Button } from '../ui/Button';

interface QuickReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickReservationModal: React.FC<QuickReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedLocation, setSelectedLocation] = useState(RESTAURANT_LOCATIONS[0].id);
  const [partySize, setPartySize] = useState('2');
  const [date, setDate] = useState('2026-10-01');
  const [timeSlot, setTimeSlot] = useState('19:30');
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-ivory-50 border border-clay-300 w-full max-w-lg rounded-soft shadow-deep overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-clay-200 flex items-center justify-between bg-ivory-100">
          <div>
            <span className="editorial-caps text-[10px] text-brick-600 block">
              Dine-In Experience
            </span>
            <h3 className="font-serif text-2xl font-medium text-charcoal-900">
              Reserve Your Table
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-charcoal-400 hover:text-charcoal-900 rounded-soft transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-olive-50 border border-olive-200 rounded-full flex items-center justify-center mx-auto text-olive-600">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-charcoal-900 font-medium">
                Reservation Request Recorded
              </h4>
              <p className="text-sm text-charcoal-600 max-w-sm mx-auto font-light leading-relaxed">
                Thank you, <strong className="text-charcoal-900">{guestName || 'Guest'}</strong>. In production, our team at {RESTAURANT_LOCATIONS.find((l) => l.id === selectedLocation)?.name} will send a confirmation SMS to {phone || 'your phone'}.
              </p>
              <div className="pt-4">
                <Button variant="primary" size="md" onClick={handleReset}>
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Location */}
              <div>
                <label className="editorial-caps text-[11px] text-charcoal-700 block mb-1.5">
                  Select Outlet (Bhubaneswar)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {RESTAURANT_LOCATIONS.map((loc) => (
                    <button
                      type="button"
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc.id)}
                      className={`p-3 text-left border rounded-soft transition-all ${
                        selectedLocation === loc.id
                          ? 'border-brick-500 bg-brick-50/50 text-brick-900 font-medium'
                          : 'border-clay-300 bg-ivory-50 text-charcoal-700 hover:border-clay-400'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-brick-600 shrink-0" />
                        <span>{loc.area}</span>
                      </div>
                      <p className="text-[11px] text-charcoal-500 line-clamp-1 mt-0.5">
                        {loc.address}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="editorial-caps text-[11px] text-charcoal-700 block mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-ivory-50 border border-clay-300 rounded-soft text-sm text-charcoal-900 focus:outline-none focus:border-brick-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="editorial-caps text-[11px] text-charcoal-700 block mb-1">
                    Seating Time
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 bg-ivory-50 border border-clay-300 rounded-soft text-sm text-charcoal-900 focus:outline-none focus:border-brick-500"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="14:30">02:30 PM (Lunch)</option>
                    <option value="18:30">06:30 PM (Early Dinner)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Late Dinner)</option>
                  </select>
                </div>
              </div>

              {/* Guests Count */}
              <div>
                <label className="editorial-caps text-[11px] text-charcoal-700 block mb-1">
                  Number of Guests
                </label>
                <div className="flex gap-2">
                  {['1', '2', '4', '6', '8+'].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setPartySize(num)}
                      className={`flex-1 py-2 text-xs rounded-soft border font-medium transition-all ${
                        partySize === num
                          ? 'bg-charcoal-900 text-ivory-50 border-charcoal-900'
                          : 'bg-ivory-50 text-charcoal-700 border-clay-300 hover:border-charcoal-500'
                      }`}
                    >
                      {num} {num === '8+' ? '' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="editorial-caps text-[11px] text-charcoal-700 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Mohapatra"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3 py-2 bg-ivory-50 border border-clay-300 rounded-soft text-sm text-charcoal-900 focus:outline-none focus:border-brick-500"
                  />
                </div>

                <div>
                  <label className="editorial-caps text-[11px] text-charcoal-700 block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-ivory-50 border border-clay-300 rounded-soft text-sm text-charcoal-900 focus:outline-none focus:border-brick-500"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="editorial-caps text-[11px] text-charcoal-700 block mb-1">
                  Special Notes / Dietary Requirements (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Anniversary, outdoor seating preference, extra crispy crust"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full px-3 py-2 bg-ivory-50 border border-clay-300 rounded-soft text-sm text-charcoal-900 focus:outline-none focus:border-brick-500"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-clay-200">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  Confirm Table Request
                </Button>
                <p className="text-[11px] text-charcoal-500 text-center mt-2">
                  No advance reservation fees required. Tables held for 15 minutes.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
