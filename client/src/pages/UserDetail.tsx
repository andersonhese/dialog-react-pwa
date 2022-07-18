import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { GET_USER_DETAIL } from '../GraphQL/Queries';
import { useParams, useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import UserCard from '../components/UserCard/UserCard';

function UserDetail() {

  const { id } = useParams();
  const { error, loading, data } = useQuery(GET_USER_DETAIL, {
    variables: { id: id }
  });
  const [user, setUser] = useState({
    id: '',
    picture: '',
    name: '',
    age: '',
    email: '',
    friends: []
  })

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      console.log(error, loading, data)

      if (data.getUserData) {
        setUser(data.getUserData);
      } else {
        navigate('/');
      }
    }
  }, [data])

  return (
    <div>
      <br />
      <Grid
        container
        spacing={2}
        component="div"
      >
        <Grid item>
          <img src={user.picture} height="100" />
        </Grid>

        <Grid item>
          <div>
            name: { user.name } <br />
            age: { user.age } <br />
            email: { user.email } <br />
          </div>
        </Grid>
      </Grid>
      <br />
      <h1> Friends: </h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center" >
        {user.friends.map((u: any) => {
          return <Grid item>
            <UserCard id={u._id} name={u.name} picture={u.picture} age={u.age} eyeColor={u.eyeColor} company={u.company} email={u.email} />
          </Grid>
        })}
      </Grid>
    </div>
  )
}

export default UserDetail