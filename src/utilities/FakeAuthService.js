const mockUsers = [
  {
    id: "user-001",
    username: "test",
    email: "jdoe@customsbroker.com",
    passwordHash: "test",
    roles: ["Broker"],
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-01-01T08:00:00Z",
  },
];

function hashPassword(plainText) {
  return plainText;
}

export function signUp({ username, email, password }) {
  const userExists = mockUsers.find(
    (u) => u.username === username || u.email === email
  );
  if (userExists) {
    return { success: false, message: "User already exists." };
  }

  // Create new user record
  const newUser = {
    id: `user-${Date.now()}`,
    username,
    email,
    passwordHash: hashPassword(password),
    roles: ["Broker"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  mockUsers.push(newUser);

  return {
    success: true,
    user: newUser,
  };
}

export function signIn(emailOrUsername, password) {
  const found = mockUsers.find(
    (u) => u.username === emailOrUsername || u.email === emailOrUsername
  );
  if (!found) {
    return { success: false, message: "User not found." };
  }

  const hashed = hashPassword(password);
  if (found.passwordHash !== hashed) {
    return { success: false, message: "Invalid password." };
  }

  return { success: true, user: found };
}
