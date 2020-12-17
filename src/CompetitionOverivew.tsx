import React, {useContext, useEffect, useState} from 'react';
import {FirebaseContext} from './FirebaseProvider';
import {CompetitionTable} from './CompetitionTable';

const CompetitionOverview = ({})=> {
  const firebase = useContext(FirebaseContext);
  const [comps, setComps] = useState<any>({});

  useEffect(() => {
    if (firebase.firestore) {
      firebase.firestore()
          .collection('competitions')
          .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setComps((old) => ({...old, [doc.id]: doc.data()}));
            });
          });
    }
  }, []);

  const columns = React.useMemo(
      () => [
        {
          Header: 'Competitions',
          columns: [
            {
              Header: 'Name',
              accessor: 'name',
            },
            {
              Header: 'Source',
              accessor: 'source',
            },
            {
              Header: 'IDs',
              accessor: 'sourceIds',
            },
            {
              Header: 'From',
              accessor: 'fromDate',
            }, {
              Header: 'To',
              accessor: 'toDate',
            },
          ],
        },
      ],
      [],
  );

  const data = React.useMemo(() => Object.values(comps), [comps]);
  return (
    <CompetitionTable columns={columns} data={data}/>
  );
};

export {CompetitionOverview};
