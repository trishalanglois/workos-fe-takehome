'use client';

import { Box, Flex, Spinner, Tabs } from '@radix-ui/themes';
import Search from './Search';
import AccentButton from './AccentButton';
import DataTable from './DataTable';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function UserRolesTabs() {
  const [toggleFocus, setToggleFocus] = useState('users');
  const [tableData, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/${toggleFocus}`,
        );
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error); // show error toast here?
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      {loading ? (
        <Spinner loading={loading} />
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
