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
  
  export type DataTableProps = {
    dataType: string;
    tableData: User[] | undefined
  };

  export type SearchProps = {
    onSearch: (searchTerm: string) => void;
  }