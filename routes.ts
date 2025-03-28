
/** This route does not need authentication
* @type {string[]}
*/
export const publicRoutes = ["/", '/dashboard', "/auth/new-verification"]

/**
 * An array of routes that are used for authentication
 * these routes will redirect logged users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix will be FOR API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"