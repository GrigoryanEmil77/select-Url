import React, { useEffect, useState } from 'react';
import { CircularProgress,Select,Stack,} from '@chakra-ui/react';
import { useFetchSelectedResourceQuery } from '../API/dataApi';

function Header() {
  const optionNames = [
    { id: 1, value: "todos", name: "Todos" },
    { id: 2, value: "posts", name: "Posts" },
    { id: 3, value: "comments", name: "Comments" },
    { id: 4, value: "photos", name: "Photos" },
    { id: 5, value: "albums", name: "Albums" },
    { id: 6, value: "users", name: "Users" },
  ];

  const [selected, setSelected] = useState('');
  const { data: responseData,isLoading,} = useFetchSelectedResourceQuery(selected);
    
  const handleResourceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const  newSelected = event.target.value;
    setSelected(newSelected);
    const newUrl = `${window.location.pathname}?x=${newSelected.toString()}`;
    window.location.href = newUrl  
 
  };
  
  useEffect(() => {    
    const selectedUrl = new URLSearchParams(window.location.search).get('x');
    if (selectedUrl) {
      setSelected(selectedUrl);
    }
  }, []);
  

  return (
    <div>
      <Stack textAlign="center">
        <Select fontSize={40} onChange={handleResourceChange} value={selected}>
          <option value="">Select data</option>
          {optionNames.map((option) => (
            <option key={option.id} value={option.value}>{option.name}</option>
          ))}
        </Select>    
      </Stack>
      <div>
      {isLoading ? (
          <CircularProgress  isIndeterminate color='red' />
      ) :  (
        responseData && (
          <Stack>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </Stack>
        )
      )}

      </div>
    </div>
  );
}

export default Header;
























