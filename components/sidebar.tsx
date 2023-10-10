import CreateDocButton from "./create-doc-button";
import DocumentCard from "./document-card";
import { prisma } from "@/lib/prisma";
import { ScrollArea } from "./ui/scroll-area";

export type DocumentType = {
  publicId: string;
  title: string;
};

// Fetch documents from the database without specifying ownerId
async function getDocuments() {
  return await prisma.documents.findMany({
    select: {
      publicId: true,
      title: true,
    },
  });
}

export default async function Sidebar() {
  const documents = await getDocuments();

  return (
    <aside className="fixed left-0 top-0 z-30 flex w-72 flex-col bg-gray-200">
      <ScrollArea className="flex h-screen w-full flex-col items-start justify-start">
        <CreateDocButton />
        {documents.map((document, index) => (
          <DocumentCard key={index} document={document} />
        ))}
      </ScrollArea>
    </aside>
  );
}
