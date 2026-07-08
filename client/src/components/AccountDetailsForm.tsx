// components/AccountDetailsForm.jsx
import React, { useState } from "react";
import InputField from "./InputField";

interface UserDataType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface AccountDetailsFormProps {
  initialData: UserDataType;
  onSave: (data: UserDataType) => void;
  onCancel: () => void;
}

export default function AccountDetailsForm({
  initialData,
  onSave,
  onCancel,
}: AccountDetailsFormProps) {
  const [formData, setFormData] = useState<UserDataType>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
    >
      <h3 className="text-lg font-semibold text-gray-900 border-b pb-3">
        Edit Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <InputField
          label="Last Name"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <InputField
          label="Email Address"
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          label="Phone Number"
          id="phone"
          type="tel"
          value={formData.phone}
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
          Save Changes
        </button>
      </div>
    </form>
  );
}
