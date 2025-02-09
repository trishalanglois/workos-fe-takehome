export type User = {
    createdAt: string,
    first: string,
    id: string,
    last: string,
    photo: string,
    roleId: string,
    roleName: string | null,
    updatedAt: string
  }
  
  export type Role = {
    createdAt: string,
    description: string,
    id: string,
    isDefault: boolean,
    name: string,
    updatedAt: string,
  }
  
  export type UserTableProps = {
    users: User[] | undefined
  };

  export type RolesTableProps = {
    roles: Role[] | undefined
  }

  export type SearchProps = {
    onSearch: (searchTerm: string) => void;
  }

  export type RequestErrorProps = {
    requestError: boolean;
  }