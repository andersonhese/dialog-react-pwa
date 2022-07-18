import { useContext, useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import UserCard from '../UserCard/UserCard'

import { gql, useQuery } from '@apollo/client';
import { GET_LIST } from '../../GraphQL/Queries';

import { AppContext } from '../../AppContext';


export default function UserGrid() {

  let { items, setMainResults } = useContext(AppContext);
  const { error, loading, data } = useQuery(GET_LIST);
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log(error, loading, data)
    if (data && data.list) {
      setMainResults(data.list)
    }
  }, [data])

   return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center" >
      {items.map((u: any) => {
        return <Grid item>
          <UserCard id={u._id} name={u.name} picture={u.picture} age={u.age} eyeColor={u.eyeColor} company={u.company} email={u.email} />
        </Grid>
      })}
    </Grid>
  );
}
