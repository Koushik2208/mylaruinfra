interface SignInWithOAuthParams {
  provider: "google";
  providerAccountId: string;
  user: {
    email: string;
    name: string;
    // image: string;
    username: string;
    role?: "admin" | "lawyer" | "guest";
  };
}

interface BlogCategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
}

