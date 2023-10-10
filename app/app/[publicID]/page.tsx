import Editor from "@/components/editor";
import { prisma } from "@/lib/prisma";

type DocumentProps = {
  params: {
    publicId: string;
  };
};

// Fetch the document from the Database.
async function getDocument(publicId: string) {
  return await prisma.documents.findFirst({
    where: {
      publicId: publicId,
    },
    select: {
      title: true,
      document: true,
    },
  });
}

export default async function DocumentPage(props: DocumentProps) {
  const document = await getDocument(props.params.publicId);

  if (!document) {
    // Handle the case when the document is not found.
    return <div>Document not found</div>;
  }

  return (
    <Editor
      publicId={props.params.publicId}
      document={{
        title: document.title,
        document: document.document,
      }}
    />
  );
}
