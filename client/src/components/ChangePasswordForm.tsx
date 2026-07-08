// components/ChangePasswordForm.jsx
import React, { useState } from "react";
import InputField from "./InputField";

type ChangePasswordType = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

interface ChangePasswordProps {
  onSave: (data: ChangePasswordType) => void;
  onCancel: () => void;
}

export default function ChangePasswordForm({
  onSave,
  onCancel,
}: ChangePasswordProps) {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    onSave(passwords);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
    >
      <h3 className="text-lg font-semibold text-gray-900 border-b pb-3">
        Security & Password
      </h3>

      <InputField
        label="Current Password"
        id="currentPassword"
        type="password"
        value={passwords.currentPassword}
        onChange={handleChange}
        required
      />
      <InputField
        label="New Password"
        id="newPassword"
        type="password"
        value={passwords.newPassword}
        onChange={handleChange}
        required
      />
      <InputField
        label="Confirm New Password"
        id="confirmPassword"
        type="password"
        value={passwords.confirmPassword}
        onChange={handleChange}
        required
      />

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
          Update Password
        </button>
      </div>
    </form>
  );
}
