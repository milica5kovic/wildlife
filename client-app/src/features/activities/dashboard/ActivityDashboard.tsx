import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity : Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectedActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm : () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
    
}

export default function ActivityDashboard({activities, selectActivity, selectedActivity, cancelSelectedActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity, submitting}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity}
                deleteActivity = {deleteActivity}
                submitting = {submitting}
                />
            </Grid.Column>
            <GridColumn width='6'>
                {selectedActivity  && !editMode &&
                <ActivityDetails activity={selectedActivity} cancelSelectedActivity = {cancelSelectedActivity}
                openForm = {openForm}
                />}
                {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit = {createOrEdit} submitting={submitting}
                 />}
            </GridColumn>
        </Grid>
    )

}