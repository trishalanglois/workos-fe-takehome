import axios from 'axios';
import { User } from '../types';

const USERS_API_URL = 'http://localhost:3002/users';
const ROLE_API_URL = 'http://localhost:3002/roles';

const fetchRoleName = async (roleId: string) => {
  try {
    const response = await axios.get(`${ROLE_API_URL}/${roleId}`);
    return response.data.name;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
  }
};

export const fetchUsersWithRoles = async () => {
  const usersWithRoles: User[] = [];
  try {
    const usersResponse = await axios.get(USERS_API_URL);
    const { data: users } = usersResponse.data;

    const usersWithRolesPromises = users.map(
      async (user: User) => {
        try {
          const roleName = await fetchRoleName(user.roleId);
          usersWithRoles.push({ ...user, roleName });
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 500) {
            // is there a way to return this so the parent can see there was an error?
            console.error('Error fetching role for user:', user, error);
          } else {
            console.error('Unexpected error:', error);
          }
          usersWithRoles.push({
            ...user,
            roleName: null,
          });
        }
      },
    );

    await Promise.all(usersWithRolesPromises);

    return usersWithRoles;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
  }
};