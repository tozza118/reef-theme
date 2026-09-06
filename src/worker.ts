// src/worker.ts - worker Cloudflare : sert directement les fichiers statiques de dist/
// La redirection multilingue a ete retiree car le site est desormais uniquement en anglais.

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return env.ASSETS.fetch(request);
  },
};
