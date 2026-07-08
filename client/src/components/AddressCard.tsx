import { MapPin } from "lucide-react";

type AddressProps = {
  address: {
    fullName: string;
    street: string;
    city: string;
    country: string;
    zip: string;
  };
  onEditAddress: () => void;
};

export const AddressCard = ({ address, onEditAddress }: AddressProps) => (
  <div className="rounded-xl border bg-white p-6 shadow-sm">
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">Saved Address</h2>
      <button onClick={onEditAddress} className="text-primary hover:underline">
        Edit
      </button>
    </div>
    <div className="flex items-start gap-3">
      <MapPin className="mt-1 text-primary" size={20} />
      <div className="space-y-1">
        <p className="font-semibold">{address.fullName}</p>
        <p>{address.street}</p>
        <p>
          {address.city}, {address.country}
        </p>
        <p>{address.zip}</p>
      </div>
    </div>
  </div>
);
