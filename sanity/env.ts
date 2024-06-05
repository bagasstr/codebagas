export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-05-30";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  "Missing environment variable: SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "4hwar922",
  "Missing environment variable: SANITY_PROJECT_ID"
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
