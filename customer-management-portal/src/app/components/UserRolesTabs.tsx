"use client"

import { Box, Flex, Tabs } from '@radix-ui/themes';
import Search from './Search';
import AccentButton from './AccentButton';
import DataTable from './DataTable';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// async function getServerSideProps() {
//   const response = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
//   return {
//     props: {
//       users: response,
//     },
//   };
// }

export default function UserRolesTabs() {
  // state in this component to hold whether users or roles is in focus
  // will change when user clicks on either
  // make BE call here based on if users or state or in focus, make call
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Define the async function inside the useEffect
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3002/users");
        setUsers(response.data); // Set the users data
      } catch (error) {
        console.error("Error fetching users:", error); // Handle errors
      } finally {
        setLoading(false); // Once data is fetched, stop loading
      }
    };

    fetchUsers(); // Call the async function
  }, []); // Empty dependency array means this runs once after the component mounts

  if (loading) {
    return <p>Loading...</p>; // Show loading state while waiting for data
  }

  return (
    <Tabs.Root defaultValue="users">
      <Tabs.List size={'2'}>
        <Tabs.Trigger value="users">Users</Tabs.Trigger>
        <Tabs.Trigger value="roles">Roles</Tabs.Trigger>
      </Tabs.List>
      <Flex gap={'var(--space-2)'} justify={'between'} py={'var(--space-5)'}>
        <Search />
        <AccentButton displayText="Add user" />
      </Flex>
      <Box>
        <Tabs.Content value="users">
          <DataTable dataType="users" data={users}/>
        </Tabs.Content>
        <Tabs.Content value="roles">
          <DataTable dataType="roles" data={users}/>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
