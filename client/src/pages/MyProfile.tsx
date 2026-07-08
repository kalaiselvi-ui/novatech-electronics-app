import { ProfileCard } from "../components/ProfileCard.tsx";
import { QuickActions } from "../components/QuickActions.tsx";
import { PersonalInfoCard } from "../components/PersonalInfoCard.tsx";
import { AddressCard } from "../components/AddressCard.tsx";
import AccountDetailsForm from "../components/AccountDetailsForm.tsx";
import ChangePasswordForm from "../components/ChangePasswordForm.tsx";
import SavedAddressForm from "../components/SavedAddressForm.tsx";
import { useState } from "react";
import { useBodyScrollLock } from "../utils/useBodyScrollLock.ts";

const MyProfile = () => {
  const [activeModal, setActiveModal] = useState<
    "profile" | "password" | "address" | null
  >(null);

  useBodyScrollLock(activeModal !== null);

  // 2. Changed static 'user' object to reactive 'userData' state hook
  const [userData, setUserData] = useState({
    firstName: "Kalai",
    lastName: "Selvi",
    email: "kalai@example.com",
    phone: "+971 50 123 4567",
  });

  // 3. Changed static 'address' object to reactive 'addressData' state hook
  const [addressData, setAddressData] = useState({
    fullName: "Kalai Selvi",
    street: "Dubai Marina",
    city: "Dubai",
    country: "United Arab Emirates",
    zip: "00000",
  });

  const closeModal = () => setActiveModal(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-primary">My Profile</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Hand Actions Column */}
        <div className="space-y-6">
          <ProfileCard
            firstName={userData.firstName}
            lastName={userData.lastName}
            email={userData.email}
            onEditProfile={() => setActiveModal("profile")}
          />
          <QuickActions
            onOpenPasswordModal={() => setActiveModal("password")}
          />
        </div>

        {/* Right Hand Information Logs Column */}
        <div className="space-y-6 lg:col-span-2">
          <PersonalInfoCard {...userData} />
          <AddressCard
            address={addressData}
            onEditAddress={() => setActiveModal("address")}
          />
        </div>
      </div>

      {activeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {activeModal === "profile" && (
              <AccountDetailsForm
                initialData={userData}
                onCancel={closeModal}
                onSave={(updatedData) => {
                  setUserData(updatedData);
                  closeModal();
                }}
              />
            )}
            {activeModal === "password" && (
              <ChangePasswordForm
                onCancel={closeModal}
                onSave={(passwords) => {
                  console.log("Password Updated", passwords);
                  closeModal();
                }}
              />
            )}
            {activeModal === "address" && (
              <SavedAddressForm
                initialData={addressData}
                onCancel={closeModal}
                onSave={(updatedAddress) => {
                  setAddressData(updatedAddress);
                  closeModal();
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
