import React from "react";
import { MapPin } from "lucide-react";

interface ShippingFormProps {
  onUseSavedAddress: () => void;
}

export interface ShippingAddressData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
// 2. Expand props to accept values and the change handler
interface ShippingFormProps {
  values: ShippingAddressData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onUseSavedAddress: () => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({
  values,
  onChange,
  onUseSavedAddress,
}) => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Shipping Information
        </h2>
        <button
          type="button"
          onClick={onUseSavedAddress}
          className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary transition hover:bg-primary/10"
        >
          <MapPin size={16} />
          Use Saved Address
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={onChange}
            required
            placeholder="John Doe"
            className="mt-1 w-full rounded-lg border p-2.5 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            name="email"
            value={values.email}
            required
            onChange={onChange}
            className="mt-1 w-full rounded-lg border p-2.5 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+971 50 123 4567"
            name="phone"
            value={values.phone}
            required
            onChange={onChange}
            className="mt-1 w-full rounded-lg border p-2.5 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-gray-600">Address</label>
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={onChange}
            required
            placeholder="Street name, Building name, Apartment number"
            className="mt-1 w-full rounded-lg border p-2.5 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">City</label>
          <input
            type="text"
            placeholder="Dubai"
            name="city"
            value={values.city}
            required
            onChange={onChange}
            className="mt-1 w-full rounded-lg border p-2.5 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">
            State / Emirate
          </label>
          <input
            type="text"
            name="state"
            value={values.state}
            required
            onChange={onChange}
            placeholder="Dubai"
            className="mt-1 w-full rounded-lg border p-2.5 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">
            Postal / ZIP Code
          </label>
          <input
            type="text"
            placeholder="00000"
            name="postalCode"
            value={values.postalCode}
            required
            onChange={onChange}
            className="mt-1 w-full rounded-lg border p-2.5 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Country</label>
          <select
            name="country"
            value={values.country}
            required
            onChange={onChange}
            className="mt-1 w-full rounded-lg border bg-white p-2.5 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          >
            <option>United Arab Emirates</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>India</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
