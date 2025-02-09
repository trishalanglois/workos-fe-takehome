'use client';

import { Box, Text, Flex, Spinner, Tabs } from '@radix-ui/themes';
import Search from './Search';
import AccentButton from './AccentButton';
import DataTable from './DataTable';
import React, { useEffect, useState } from 'react';
import { fetchRoles, fetchUsersWithRoles } from '../apiCalls';
import { User } from '../types';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import '../styles.css';
import { request } from 'http';
import RequestError from './RequestError';

export default function UserRolesTabs() {
  const [toggleFocus, setToggleFocus] = useState('users');
  const [tableData, setData] = useState<User[] | undefined>([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [requestError, setRequestError] = useState(false);
  const [filteredData, setFilteredData] = useState(tableData);
  const [emptySearchResults, setEmptySearchResults] = useState(false);

  const handleSearch = (searchTerm: string) => {
    setEmptySearchResults(false);

    const filtered = tableData?.filter((item) =>
      Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );

    return filtered?.length
      ? setFilteredData(filtered)
      : setEmptySearchResults(true);
  };

  // fetch data for roles table

  useEffect(() => {
    setLoading(true)
    const fetchTableData = async () => {
      let result
      try {
        if (toggleFocus === 'roles') {
          result = await fetchRoles() 
        } else {
          result = await fetchUsersWithRoles();
        }
        if (result) {
          const { queriedData, hasError } = result;

          setData(queriedData);
          setFilteredData(queriedData);

          if (hasError) {
            setRequestError(hasError);
          }
        }
      } catch (error) {
        console.error('Error fetching table data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTableData();
  }, [toggleFocus]);

  return (
    <Tabs.Root defaultValue="users">
      <Tabs.List size={'2'}>
        <Tabs.Trigger
          value="users"
          name="users"
          onClick={(e) => setToggleFocus(e.currentTarget.name)}
        >
          Users
        </Tabs.Trigger>
        <Tabs.Trigger
          value="roles"
          name="roles"
          onClick={(e) => setToggleFocus(e.currentTarget.name)}
        >
          Roles
        </Tabs.Trigger>
      </Tabs.List>
      <Flex gap={'var(--space-2)'} justify={'between'} py={'var(--space-5)'}>
        <Search onSearch={handleSearch} />
        <AccentButton displayText={`Add ${toggleFocus === 'users' ? 'user' : 'role'}`} />
      </Flex>

      <RequestError requestError={requestError} />

      <>
        {loading && (
          <Flex justify={'center'}>
            <Spinner size={'3'} loading={loading} />
          </Flex>
        )}

        {!loading && emptySearchResults && (
          <Text>No results matched your search.</Text>
        )}

        {!loading && !emptySearchResults && (
          <Box>
            <Tabs.Content value="users">
              <DataTable dataType="user" tableData={filteredData} />
            </Tabs.Content>
            <Tabs.Content value="roles">
              <DataTable dataType="role" tableData={filteredData} />
            </Tabs.Content>
          </Box>
        )}
      </>
    </Tabs.Root>
  );
}
