export const apiVersion = process.env.SANITY_API_VERSION || "2024-05-30";

export const dataset = assertValue(
  process.env.SANITY_DATASET || "production",
  "Missing environment variable: SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.SANITY_PROJECT_ID!,
  "Missing environment variable: SANITY_PROJECT_ID"
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
