import { PageHeader } from "@/components/common/page-header";
import { ProfileSections } from "@/components/profile/profile-sections";

export default function ProfilePage() {
  return (
    <div>
      <PageHeader title="Profile" description="Manage your personal info, preferences, and saved destinations." />
      <ProfileSections />
    </div>
  );
}

