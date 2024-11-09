import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Button, Container } from 'react-bootstrap';
import swal from 'sweetalert';
import moment from 'moment';
import { ZipZap } from 'meteor/udondan:zipzap';
import { PAGE_IDS } from '../utilities/PageIDs';
import { dumpDatabaseMethod } from '../../api/base/BaseCollection.methods';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import { DatabaseConfiguration } from '../../api/dbconfig/DatabaseConfigurationCollection';
import LoadingSpinner from "../components/LoadingSpinner";

const ManageDatabase = () => {
    const { DBConfig, ready } = useTracker(() => {
        const sub = Meteor.subscribe(DatabaseConfiguration.userPublicationName);
        const rdy = sub.ready();
        const DBConfigInformation = DatabaseConfiguration.collection.find({}).fetch();
        return {
            DBConfig: DBConfigInformation,
            ready: rdy && sub,
        };
    }, []);

  const databaseFileDateFormat = DBConfig[0].databaseFileDateFormat;

  const submit = () => {
    dumpDatabaseMethod.callPromise()
      .catch(error => swal('Error', error.message, 'error'))
      .then(result => {
        const zip = new ZipZap();
        const dir = 'matp-db';
        const fileName = `${dir}/${moment(result.timestamp).format(databaseFileDateFormat)}.json`;
        zip.file(fileName, JSON.stringify(result, null, 2));
        zip.saveAs(`${dir}.zip`);
      });
  };
  return ready ? <Container id={PAGE_IDS.MANAGE_DATABASE}>
      <Button id={COMPONENT_IDS.MANAGE_DATABASE_DUMP} onClick={() => submit()}>Dump Database</Button>
    </Container> : <LoadingSpinner />;
};

export default ManageDatabase;
