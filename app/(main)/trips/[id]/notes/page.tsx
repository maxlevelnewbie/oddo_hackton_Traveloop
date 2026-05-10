import { PageHeader } from "@/components/common/page-header";
import { NotesJournal } from "@/components/notes/notes-journal";

type TripNotesPageProps = {
  params: Promise<{ id: string }>;
};

export default async function TripNotesPage({ params }: Readonly<TripNotesPageProps>) {
  const { id } = await params;

  return (
    <div>
      <PageHeader title={`Notes: ${id}`} description="Capture daily thoughts with searchable markdown-style notes." />
      <NotesJournal />
    </div>
  );
}

