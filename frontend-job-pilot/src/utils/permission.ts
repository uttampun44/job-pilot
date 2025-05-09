/**
  * @param userPermissions - The user's permissions array this user has fetch from the backend
  * @param requiredPermissions - The required permissions array this user needs to have to access the page and get from the
  * sidebard menu data
  * @returns boolean - Whether the user has all the required permissions
*/

export function hasPermissions(userPermissions: string[],requiredPermissions?: string[]): boolean {
    if (!requiredPermissions || requiredPermissions.length === 0) return true;
    return requiredPermissions.some((perm) => userPermissions.includes(perm));
  }
  