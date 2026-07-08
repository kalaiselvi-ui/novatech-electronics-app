// components/SavedAddressForm.jsx
import React, { useState } from "react";
import InputField from "./InputField";

type SavedAddressType = {
  fullName: string;
  street: string;
  city: string;
  country: string;
  zip: string;
};

interface SavedAddressProps {
  initialData: SavedAddressType;
  onSave: (data: SavedAddressType) => void;
  onCancel: () => void;
}

export default function SavedAddressForm({
  initialData,
  onSave,
  onCancel,
}: SavedAddressProps) {
  const [address, setAddress] = useState<SavedAddressType>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(address);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-2xl bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
    >
      <h3 className="text-lg font-semibold text-gray-900 border-b pb-3">
        Edit Shipping Address
      </h3>

      <InputField
        label="Deliver To (Full Name)"
        id="fullName"
        value={address.fullName}
        onChange={handleChange}
        required
      />
      <InputField
        label="Street Address"
        id="street"
        value={address.street}
        onChange={handleChange}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="City"
          id="city"
          value={address.city}
          onChange={handleChange}
          required
        />
        <InputField
          label="Country"
          id="country"
          value={address.country}
          onChange={handleChange}
          required
        />
        <InputField
          label="Postal Code / PO Box"
          id="postalCode"
          value={address.zip}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/85"
        >
          Save Address
        </button>
      </div>
    </form>
  );
}
