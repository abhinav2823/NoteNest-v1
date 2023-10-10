import { prisma } from "@/lib/prisma";
import * as z from "zod";

// Schema to validate the request body
const createDocSchema = z.object({
  publicId: z.string(),
  title: z.string(),
});

// Type of the required data to create a document
export type CreateDocType = z.infer<typeof createDocSchema>;

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = createDocSchema.parse(json);

    // Replace ownerId with the actual owner ID logic if needed
    const ownerId = "your_owner_id_logic_here";

    const document = await prisma.documents.create({
      data: {
        publicId: body.publicId,
        title: body.title,
        ownerId: ownerId,
      },
    });

    return new Response(JSON.stringify(document));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
