export type User = {
    createdAt: string,
    first: string,
    id: string,
    last: string,
    photo: string,
    roleId: string,
    roleName: string,
    updatedAt: string
  }
  
  export type DataTableProps = {
    dataType: string;
    tableData: User[]
  };

  export type SearchProps = {
    onSearch: (searchTerm: string) => void;
  }