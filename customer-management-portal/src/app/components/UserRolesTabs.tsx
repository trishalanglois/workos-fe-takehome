'use client';

import { Box, Text, Flex, Spinner, Tabs } from '@radix-ui/themes';
import Search from './Search';
import AccentButton from './AccentButton';
import React, { useEffect, useState } from 'react';
import { fetchRoles, fetchUsersWithRoles } from '../apiCalls';
import { Role, User } from '../types';
import '../styles.css';
import RequestError from './RequestError';
import UsersTable from './UsersTable';
import RolesTable from './RolesTable';

export default function UserRolesTabs() {
  const [toggleFocus, setToggleFocus] = useState('users');
  const [users, setUsers] = useState<User[] | undefined>([]);
  const [roles, setRoles] = useState<Role[] | undefined>([]);
  const [loading, setLoading] = useState(true);
  const [requestError, setRequestError] = useState(false);
  const [filteredData, setFilteredData] = useState<User[] | Role[] | undefined>(
    users,
  );
  const [emptySearchResults, setEmptySearchResults] = useState(false);

  const handleSearch = (searchTerm: string) => {
    // clears search input and renders all data
    if (!searchTerm.trim()) {
      setFilteredData(toggleFocus === 'users' ? users : roles);
      setEmptySearchResults(false);
      return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase().trim();

    const sourceData = toggleFocus === 'users' ? users : roles;

    const filtered = sourceData?.filter((item) =>
      Object.values(item)
        .map((value) => String(value).toLowerCase())
        .some((value) => value.includes(lowerSearchTerm)),
    );

    if (filtered && filtered.length > 0) {
      setFilteredData(filtered as Role[] | User[]);
      setEmptySearchResults(false);
    } else {
      setFilteredData([]);
      setEmptySearchResults(true);
    }
  };

  useEffect(() => {
    setLoading(true);

    const fetchUserData = async () => {
      try {
        const result = await fetchUsersWithRoles();
        if (result) {
          const { usersWithRoles, hasError } = result;
          setUsers(usersWithRoles);
          setFilteredData(usersWithRoles)
          if (hasError) setRequestError(hasError);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRoleData = async () => {
      try {
        const result = await fetchRoles();
        setRoles(result?.roles.data);
      } catch (error) {
        console.log('Error fetching roles:', error);
      } 
    };

    fetchUserData();
    fetchRoleData();
    setLoading(false)
  }, []);

  useEffect(() => {
    setLoading(true);
    setRequestError(false);
  
    const setData = toggleFocus === 'users' ? users : roles;
    setFilteredData(setData);
    setLoading(false)

  }, [toggleFocus, users, roles]);


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
        <AccentButton
          displayText={`Add ${toggleFocus === 'users' ? 'user' : 'role'}`}
        />
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

        {!loading && !emptySearchResults && filteredData?.length &&  (
          <Box>
            <Tabs.Content value="users">
              <UsersTable users={filteredData as User[]} />
            </Tabs.Content>
            <Tabs.Content value="roles">
              <RolesTable roles={filteredData as Role[]} />
            </Tabs.Content>
          </Box>
        )}
      </>
    </Tabs.Root>
  );
}
