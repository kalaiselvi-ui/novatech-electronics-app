import { Pencil } from "lucide-react";

type ProfileCardProps = {
  firstName: string;
  lastName: string;
  email: string;
  onEditProfile: () => void;
};

export const ProfileCard = ({
  firstName,
  lastName,
  email,
  onEditProfile,
}: ProfileCardProps) => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">
          {firstName[0]}
          {lastName[0]}
        </div>
        <h2 className="mt-4 text-xl font-semibold">
          {firstName} {lastName}
        </h2>
        <p className="text-sm text-gray-500">{email}</p>
        <button
          onClick={onEditProfile}
          className="mt-5 flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white transition hover:opacity-90"
        >
          <Pencil size={16} />
          Edit Profile
        </button>
      </div>
    </div>
  );
};
