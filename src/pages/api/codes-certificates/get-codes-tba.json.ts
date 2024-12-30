import type { APIRoute } from "astro"
import { db, Certificate, Codes, eq, isNull, and, or } from "astro:db";
import { not } from "drizzle-orm";

export const GET: APIRoute = async ({ params, request }) => {
    const searchParam = new URL(request.url).searchParams.get("search");
    const idCertificarteTBA = 14;
    const idTraningCertificarteTBA = 20;
    return new Response(JSON.stringify({
        message: "Consuta realiza con éxito!",
        data: await db.select()
        .from(Codes)
        .where(
            and(
                isNull(Codes.deleted_at),
                or(
                    eq(Codes.certificate_id, idCertificarteTBA),
                    eq(Codes.certificate_id, idTraningCertificarteTBA)
                ),
                eq(Codes.name, searchParam)
            )
        )
        .innerJoin(Certificate, eq(Codes.certificate_id, Certificate.id))
    })
    )
}