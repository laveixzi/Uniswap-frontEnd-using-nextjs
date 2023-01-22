import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "lbb6b9mu",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skNZZnPoyNT9M1GKrnxa5xxG584D3RNDQOn1egE638F2m8kmNvqkY1uZ4mFwYX7KWI2KaJriw7kHntg997Nx3B4SImxWfOoqLMnhRppz7DJ93Ml0nx6osHpJ6xQlPEuS38eXdPpMkXj4PjtXzcRz4EyYxRYIhsgGtirWPQjemUiiGKbLhpOt",
  useCdn: false,
});
