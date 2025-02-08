import axios from 'axios';

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
  try {
    const usersResponse = await axios.get(USERS_API_URL);
    const { data: users } = usersResponse.data;

    const usersWithRoles = await Promise.all(
      users.map(async (user: { roleId: string }) => {
        const roleName = await fetchRoleName(user.roleId);
        return { ...user, roleName };
      }),
    );
    return usersWithRoles;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    return [];
  }
};
