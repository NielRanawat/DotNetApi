import { Box } from "@mui/material"
import ActivityCard from "./ActivityCard"

type Props = {
    activities: Activity[]
    selectActivity : (id : string) => void
    deleteActivity : (id : string) => void
}

export default function ActivityList({deleteActivity , activities , selectActivity}: Props) {
  return (
    <Box>
        {activities.map(activity => (
            <ActivityCard deleteActivity={deleteActivity} key={activity.id} activity={activity} selectActivity={selectActivity}/>
        ))}
    </Box>
  );
}
