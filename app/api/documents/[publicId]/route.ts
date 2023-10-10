import { prisma } from "@/lib/prisma";
import * as z from "zod";

// Schema to validate the route params
const routeContextSchema = z.object({
  params: z.object({
    publicId: z.string(),
  }),
});

export async function DELETE(
  request: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context);

    // Delete the document
    await prisma.documents.delete({
      where: {
        publicId: params.publicId,
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

// Schema to validate the request body
const patchDocSchema = z.object({
  title: z.string().min(1).max(128),
  // I do not know the type of the document field, for now, any will do.
  document: z.any(),
});

// Type of the required data to update a document
export type PatchDocType = z.infer<typeof patchDocSchema>;

export async function PATCH(
  request: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context);

    // Get the request body and validate it.
    const json = await request.json();
    const body = patchDocSchema.parse(json);

    // Update the document
    await prisma.documents.update({
      where: {
        publicId: params.publicId,
      },
      data: {
        title: body.title,
        document: body.document,
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
