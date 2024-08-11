import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "./db";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (image, { eq }) => eq(image.userId, user.userId),
    orderBy: (model, { desc }) => [desc(model.id)],
  });

  return images;
}
