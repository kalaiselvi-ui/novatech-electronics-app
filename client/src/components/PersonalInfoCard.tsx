import { Mail, Phone } from "lucide-react";

type PersonalInfoProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export const PersonalInfoCard = ({
  firstName,
  lastName,
  email,
  phone,
}: PersonalInfoProps) => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Personal Information</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm text-gray-500">First Name</label>
          <p className="mt-1 font-medium">{firstName}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Last Name</label>
          <p className="mt-1 font-medium">{lastName}</p>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="mt-1 text-primary" size={18} />
          <div>
            <label className="text-sm text-gray-500">Email</label>
            <p className="font-medium">{email}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="mt-1 text-primary" size={18} />
          <div>
            <label className="text-sm text-gray-500">Phone</label>
            <p className="font-medium">{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
