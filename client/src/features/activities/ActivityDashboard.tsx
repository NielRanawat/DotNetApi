import {Grid} from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "./details/ActivityDetails";
import ActivityForm from "./form/ActivityForm";

type Props = {
    activities : Activity[]
    selectActivity : (id: string) => void
    cancelSelectActivity : () => void
    selectedActivity?: Activity
    submitForm : (activity : Activity) => void
    deleteActivity : (id : string) => void
}

export default function ActivityDashboard({deleteActivity , submitForm , activities , cancelSelectActivity , selectActivity , selectedActivity}: Props) {
    return (
        <Grid container>
            <Grid size={7}>
                <ActivityList deleteActivity={deleteActivity} activities={activities} selectActivity={selectActivity}/>
            </Grid>
            <Grid size={5}>
                {selectedActivity && <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity}/>}
                <ActivityForm submitForm={submitForm} />
            </Grid>
        </Grid>
    )
}
