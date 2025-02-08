'use client';

import { Box, Callout, Flex, Spinner, Tabs } from '@radix-ui/themes';
import Search from './Search';
import AccentButton from './AccentButton';
import DataTable from './DataTable';
import React, { useEffect, useState } from 'react';
import { fetchUsersWithRoles } from '../hooks/fetchUsersWithRoles';
import { User } from '../types';
import { request } from 'http';
import { InfoCircledIcon } from '@radix-ui/react-icons';

export default function UserRolesTabs() {
  const [toggleFocus, setToggleFocus] = useState('users');
  const [tableData, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [requestError, setRequestError] = useState(false);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await fetchUsersWithRoles();
        setData(response);
      } catch (error) {
        setRequestError(true);
        console.error('Error fetching data:', error); // show error toast here?
      } finally {
        setLoading(false);
      }
    };
    fetchTableData();
  }, []);

  console.log('TL final data -->', fetchUsersWithRoles());

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
        <Search />
        <AccentButton displayText="Add user" />
      </Flex>

      {requestError && (
        <Callout.Root color="red">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            There was an error with your request. Please try again.
          </Callout.Text>
        </Callout.Root>
      )}
      
      {loading ? (
        <Spinner size={"3"} loading={loading} />
      ) : (
        <Box>
          <Tabs.Content value="users">
            <DataTable dataType="users" tableData={tableData} />
          </Tabs.Content>
          <Tabs.Content value="roles">
            <DataTable dataType="roles" tableData={tableData} />
          </Tabs.Content>
        </Box>
      )}
    </Tabs.Root>
  );
}
